import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity, Text, Touchable, Keyboard } from 'react-native';
import ChatGroupMemberList from "../../components/Chat/ChatGroupMemberList";
import EditGroupBottomView from "../../components/Chat/EditGroupBottomView";
import EditGroupNameView from "../../components/Chat/EditGroupNameView";

export default class EditGroupChatScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editName: false,
      keyboardOffset: 0,
    }
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow.bind(this),
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide.bind(this),
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow(event) {
    console.log('keyboardDidShow: ', event.endCoordinates.height)
    this.setState({
      keyboardOffset: event.endCoordinates.height,
    })
  }

  _keyboardDidHide() {
    console.log('keyboardDidHide')
    this.setState({
      keyboardOffset: 0,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onClose} style={styles.transparent} />

        <View style={[styles.bottomContainer, { bottom: this.state.keyboardOffset > 0 ? 200 : 107 }]}>

          <ChatGroupMemberList style={styles.imageList} />
          <TouchableOpacity style={styles.close} onPress={this.onCloseBottomView}>
            <Image style={styles.image} source={require("../../assets/icons/ic_close_blue.png")} />
          </TouchableOpacity>

          {this.state.editName ?
            (<EditGroupNameView />) :
            (<EditGroupBottomView
              onDeleteGroup={() => this.props.onDeleteGroup()}
              isIAmAdmin={this.props.isIAmAdmin}
              onEditName={this.onEditName} />)}
        </View>


      </View>
    );
  }

  onEditName = () => {
    this.setState({ editName: true })
  }

  onCloseBottomView = () => {
    { this.state.editName ? this.setState({ editName: false }) : this.props.onClose() }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    // justifyContent: 'space-between'
    // alignItems: 'center',
    // justifyContent: 'space-between'
  },
  transparent: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  imageList: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  bottomContainer: {
    // position: 'absolute',
    bottom: 107,
    left: 0,
    right: 0,
    height: 315,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white'
  },
  groupTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 30
  },
  messageButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 42,
    marginTop: 42,
  },
  groupButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 42,
    marginTop: 25,
  },
  text: {
    color: 'black',
    fontSize: 15,

  },
  image: {
    width: 11,
    height: 11
  },
  line: {
    backgroundColor: '#035BF8',
    height: 0.5,
    marginHorizontal: 42,
    marginTop: 8
  },
  close: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: 10,
    top: 20,
  }
});