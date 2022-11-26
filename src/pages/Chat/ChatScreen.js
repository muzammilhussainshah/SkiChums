import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity, Keyboard, Modal } from 'react-native';
import ChatMessagesList from "../../components/Chat/ChatMessagesList";
import ChatMessageSendBox from "../../components/Chat/ChatMessageSendBox";
import EditGroupChatScreen from "./EditGroupChatScreen";
import { connect } from 'react-redux'
import GroupChatTopBar from "../../components/Chat/GroupChatTopBar";
import PrivateChatTopBar from "../../components/Chat/PrivateChatTopBar";
import { firebase } from "@react-native-firebase/auth";
import { sendMessage } from '../../store/action/action'
class ChatScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyboardOffset: 0,
      editlVisible: false,
      message: ''
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
  handleSendMessage(recipientData) {
    if (this.state.message.length > 0) {
      const user = firebase.auth().currentUser
      let msgObj = {
        messageText: this.state.message,
        sendBy: user.uid,
        sendAt: new Date()
      }
      let docId;
      if (user.uid.length > recipientData.uid.length) docId = recipientData.uid + user.uid
      else docId = user.uid + recipientData.uid
      this.props.sendMessage(docId, msgObj)
      this.setState({ message: '' })
    }
  }
  getMessage(message) { this.setState({ message: message }) }
  render() {
    let isPrivate = this.props.route.params.isPrivate ?? false
    let recipientData = this.props.route.params.recipientData ?? {}

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={require("../../assets/icons/blue-logo.png")} resizeMode="cover" style={styles.logo} />
          <View style={styles.topContainer}>
            <View style={styles.topBarContainer}>
              <TouchableOpacity style={styles.back} onPress={this.onBack}>
                <Image source={require("../../assets/Settings/blue-chevron-left.png")} style={styles.backIcon} />
              </TouchableOpacity>
              {isPrivate ? (<PrivateChatTopBar
                name={recipientData?.displayName ? recipientData?.displayName : recipientData?.email}
                profilePic={recipientData.photoURL}
              />) : (<GroupChatTopBar onSettings={this.onSettings} />)}
            </View>

            <View style={styles.topLine} />
          </View>

        </View>

        <ChatMessagesList style={styles.chat} isPrivate={isPrivate} />
        <ChatMessageSendBox
          sendMessage={() => this.handleSendMessage(recipientData)}
          messageValue={this.state.message}
          getMessage={(message) => { this.getMessage(message) }}
          keyboardOffset={this.state.keyboardOffset} />

        <Modal style={styles.modal} transparent={true} visible={this.state.editlVisible} presentationStyle={"overFullScreen"}>
          <EditGroupChatScreen onAddMember={this.onAddMember} onDeleteGroup={this.onDeleteGroup} onClose={this.onClose} />
        </Modal>

      </View>
    );
  }

  onClose = () => {
    this.setState({ editlVisible: false })
  }

  onAddMember = () => {

  }

  onDeleteGroup = () => {

  }

  onBack = () => {
    this.props.navigation.pop(this.props.route.params.isPrivate ? 1 : 2)
  }

  onSettings = () => {
    this.setState({ editlVisible: true })
  }
}



function mapStateToProps(states) {
  return ({
    // chums: states.root.chums

  })
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: (docId, msgObj) => {
      dispatch(sendMessage(docId, msgObj));
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  chat: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  createButton: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  groupNameContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topBarContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupNameTxt: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
  groupMemberTxt: {
    fontSize: 10,
    color: 'black',
    textAlign: 'center',
  },
  searchButton: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchIcon: {
    width: 20,
    height: 20
  },
  topLine: {
    marginLeft: 20,
    backgroundColor: '#CCCCCC',
    height: 0.5,
  },
  back: {
    width: 24,
    height: 24,
    // marginLeft: 9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backIcon: {
    width: 7,
    height: 14
  },
  memberContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 27,
    height: 45
    // height: 100
  },
  list: {
    paddingVertical: 25,
    flex: 1,
    width: '100%',
  },
  headerContainer: {
    paddingTop: 44,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  logo: {
    width: 59,
    aspectRatio: 1,
    marginRight: 10
  },
});