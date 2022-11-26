import firestore from '@react-native-firebase/firestore';
import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity, Modal } from 'react-native';
import ChatFlatList from "../../components/Chat/ChatFlatList";
import InviteChumButton from '../../components/InviteChumButton';
import MyChumFlatList from "../../components/MyChumsFlatList";
import { connect } from 'react-redux'
import SCSearchBar from "../../components/SCSearchBar";
import TabButton from "../../components/TabButton";
import CreateChatScreen from "./CreateChatScreen";
import { firebase } from '@react-native-firebase/auth';
import { getChatroom } from '../../store/action/action';

class Chatlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listType: 'chat',
      chatModalVisible: false,
    }
  }
  componentDidMount() {
    // for chatroom
    this.props.getChatroom(this.props.mychums)
    // console.log(this.props.myChatRoom,'aaaaaaaaaaaaaaa')
    
    // let chatroomArray = []
    // const user = firebase.auth().currentUser
    // this.props.mychums.map(async (item) => {
    //   let docId;
    //   if (user.uid.length > item.uid.length) docId = item.uid + user.uid
    //   else docId = user.uid + item.uid
    //   firestore()
    //     .collection('message')
    //     .where(firebase.firestore.FieldPath.documentId(), '==', docId)
    //     .get()
    //     .then(querySnapshot => {
    //       querySnapshot.forEach(documentSnapshot => {
    //         chatroomArray.push(documentSnapshot.id)
    //         console.log(documentSnapshot.id, 'aaaaa', chatroomArray)
    //         // alert(documentSnapshot.id)
    //       });
    //     });
    // })
    // console.log('aaaaa', chatroomArray)
    // for chatroom

    // console.log(this.state.charoomArray, 'querySnapshotquerySnapshotquerySnapshot',)

    // firestore().collection(`message/${docId}/messages`).get()
    //   .then((response) => {
    //     response.forEach(documentSnapshot => {
    //       console.log(   documentSnapshot.data(), 'querySnapshotquerySnapshotquerySnapshot', docId)
    //       // chums.push(documentSnapshot.data())
    //     });
    //     // console.log(response.data(), 'responseresponse  ')
    //   })

    // console.log(charoomArray, 'charoomArray')
  }
  UNSAFE_componentWillReceiveProps(props){
    console.log(this.props.myChatRoom,'aaaaaaaaaaaaaaa',props)

  }
  render() {
    
    // console.log(this.props,'aaaaaaaaaaaaaaa')
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={require("../../assets/icons/blue-logo.png")} resizeMode="cover" style={styles.logo} />
          <SCSearchBar />
        </View>

        <View style={styles.tabHeader}>
          <TabButton
            selectedStatus={this.state.listType == 'chat' ? true : false}
            buttonTitle={'CHATS'}
            onTabBtnClick={() => this.setState({ listType: 'chat' })} />

          <TabButton
            selectedStatus={this.state.listType == 'session' ? true : false}
            buttonTitle={'SESSIONS'}
            onTabBtnClick={() => this.setState({ listType: 'session' })} />
        </View>
        {this.state.listType == 'chat' ? (
          <ChatFlatList
            data={this.props.myChatRoom}
            navigation={this?.props?.navigation}
            style={styles.list} onClick={this.onClickChatCell}></ChatFlatList>) : (<MyChumFlatList style={styles.list}></MyChumFlatList>)}

        <View style={styles.messageButton}>
          <TouchableOpacity onPress={this.onSetupChat}>
            <Image source={require("../../assets/icons/ic_chat.png")} resizeMode="cover" style={styles.logo} />
          </TouchableOpacity>

        </View>

        <InviteChumButton style={styles.inviteButton} />

        <Modal style={styles.modal} transparent={true} visible={this.state.chatModalVisible} presentationStyle={"overFullScreen"}>
          <CreateChatScreen
            onNewMessage={this.onNewMessage}
            onNewGroup={this.onNewGroup}
            onClose={this.onClose} />
        </Modal>
      </View>
    );
  }

  onSetupChat = () => {
    this.setState({ chatModalVisible: true })
  }

  onNewMessage = () => {
    this.setState({ chatModalVisible: false })
    this.props.navigation.navigate('NewChatGroup', { 'singleMsg': true })
  }

  onNewGroup = () => {
    this.setState({ chatModalVisible: false })
    this.props.navigation.navigate('NewChatGroup')
  }

  onClose = () => {
    this.setState({ chatModalVisible: false })
  }

  onClickChatCell = () => {
    console.log('clicked chat cell')
    this.props.navigation.navigate('ChatScreen', {
      isPrivate: true
    })
  }
}


function mapStateToProps(states) {
  return ({
    mychums: states.root.mychums,
    myChatRoom: states.root.myChatRoom

  })
}

function mapDispatchToProps(dispatch) {
  return {
    getChatroom: (myChams) => {
      dispatch(getChatroom(myChams));
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chatlist);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  modal: {
    position: 'absolute',
    bottom: 200,
    left: 0,
    right: 0,
    top: 0
  },
  list: {
    paddingVertical: 25,
    flex: 1,
    width: '100%',
  },
  headerContainer: {
    paddingTop: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 28,
  },
  tabHeader: {
    paddingTop: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50
  },
  logo: {
    width: 59,
    aspectRatio: 1,
    marginRight: 10
  },
  searchBar: {
    justifyContent: 'flex-end'
  },
  inviteButton: {
    marginBottom: 34,
    height: 36,
    marginHorizontal: 22
  },
  messageButton: {
    marginRight: 24,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});