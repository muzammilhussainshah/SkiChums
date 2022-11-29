import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Keyboard,
  Modal
} from 'react-native';

import { connect } from 'react-redux'
import { firebase } from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import ChatMessagesList from "../../components/Chat/ChatMessagesList";

import ChatMessageSendBox from "../../components/Chat/ChatMessageSendBox";
import EditGroupChatScreen from "./EditGroupChatScreen";
import GroupChatTopBar from "../../components/Chat/GroupChatTopBar";
import PrivateChatTopBar from "../../components/Chat/PrivateChatTopBar";
import {
  sendMessageToDb,
  getMessagesFromDb,
  deleteGroup,
  updateGroupName
} from '../../store/action/action'


let subscriber;
class ChatScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyboardOffset: 0,
      editlVisible: false,
      message: '',
      messages: [],
      recipientData: [],
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
    this?.keyboardDidShowListener?.remove();
    this?.keyboardDidHideListener?.remove();
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
  componentDidMount() {


    let recipientData = this.props.route?.params?.recipientData ?? {}
    if (recipientData.type == 1) {

      this.setState({ recipientData: this.props.route.params.recipientData })
    }
    else[
      subscriber = firestore().collection('chums').
        where(firebase.firestore.FieldPath.documentId(), '==', recipientData.uid)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach(documentSnapshot => {
            this.setState({ recipientData: documentSnapshot.data() })
          });

        }
          , () => { })
    ]
    const user = firebase.auth().currentUser
    if (Object.keys(user).length > 0 && Object.keys(recipientData).length > 0) {
      let docId;
      if (recipientData.type === 1) {
        docId = recipientData.id
      } else {

        if (user?.uid > recipientData?.uid) docId = recipientData?.uid + user.uid
        else docId = user?.uid + recipientData?.uid
      }
      this.props.getMessagesFromDb(docId)
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {

    this.setState({ messages: nextProps.messages })
    if (this.state.messages !== nextProps.messages) {
    }
  } 
  componentWillUnmount() {
    if (subscriber) subscriber()
  }
  render() {
    let isPrivate = this.props.route.params?.isPrivate ?? false
    let recipientData = this.state.recipientData
    let member = this.props.route?.params?.members ?? {}
    const user = firebase.auth().currentUser
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
                isOnline={recipientData?.isOnline}
                name={recipientData?.displayName ? recipientData?.displayName : recipientData?.email?.split('@')[0]}
                profilePic={recipientData.photoURL}
              />) : (
                <GroupChatTopBar
                  name={recipientData?.displayName ? recipientData?.displayName : recipientData?.email?.split('@')[0]}

                  member={member}
                  onSettings={this.onSettings} />
              )}
            </View>

            <View style={styles.topLine} />
          </View>

        </View>

        <ChatMessagesList
          messages={this.state.messages}
          style={styles.chat}
          isPrivate={isPrivate} />
        <ChatMessageSendBox
          sendMessage={() => this.handleSendMessage(recipientData)}
          messageValue={this.state.message}
          getMessage={(message) => { this.getMessage(message) }}
          keyboardOffset={this.state.keyboardOffset} />

        <Modal
          style={styles.modal}
          transparent={true}
          visible={this.state.editlVisible}
          presentationStyle={"overFullScreen"}>
          <EditGroupChatScreen
            isIAmAdmin={recipientData?.createBy == user?.uid ? true : false}
            displayName={recipientData?.displayName}
            updatedname={(updatedname) => this.updateName(recipientData, updatedname,)}
            addMember={() => {

              this.setState({ editlVisible: false })
              this.props.navigation.navigate('NewChatGroup', { addMember: true, recipientData: recipientData, myChatRoom: this.props.myChatRoom })
            }}
            onAddMember={this.onAddMember}
            onDeleteGroup={() => this.onDeleteGroup(recipientData)}
            onClose={this.onClose} />
        </Modal>

      </View>
    );
  }
  updateName(recipientData, updatedname) {
    this.props.updateGroupName(recipientData, updatedname, this.props.myChatRoom)
    this.setState({ editlVisible: false })
  }

  handleSendMessage(recipientData) {
    if (this.state.message.length > 0) {
      const user = firebase.auth().currentUser
      let messageType;
      console.log(user, recipientData, '1232132132')

      if (Object.keys(user).length > 0 && Object.keys(recipientData).length > 0) {
        let msgObj = {
          messageText: this.state.message,
          sendBy: user.uid,
          sendAt: new Date().valueOf(),
          // recieveAt: recipientData.uid

        }
        let docId;
        if (recipientData.type === 1) {
          messageType = 'group'
          docId = recipientData.id
        } else {
          messageType = 'single'
          msgObj.recieveAt = recipientData?.uid

          if (user.uid > recipientData.uid) docId = recipientData.uid + user.uid
          else docId = user.uid + recipientData.uid
        }
        console.log(docId, msgObj, messageType, '1232132132')
        this.props.sendMessageToDb(docId, msgObj, messageType)
      }
      this.setState({ message: '' })
    }
  }

  getMessage(message) { this.setState({ message: message }) }

  onClose = () => {
    this.setState({ editlVisible: false })
  }

  onAddMember = () => {

  }

  onDeleteGroup = (recipientData) => {
    // alert()
    const user = firebase.auth().currentUser

    if (Object.keys(user)?.length > 0 && Object.keys(recipientData)?.length > 0) {
      let docId;
      if (recipientData?.type === 1) {
        docId = recipientData.id
      } else {
        if (user.uid > recipientData.uid) docId = recipientData.uid + user.uid
        else docId = user.uid + recipientData.uid
      }

      this.props.deleteGroup(docId)
      this.props.navigation.pop(this.props.route.params.isPrivate ? 1 : 2)
    }
  }

  onBack = () => {
    this.props.navigation.pop( )

  }

  onSettings = () => {
    this.setState({ editlVisible: true })
  }
}



function mapStateToProps(states) {
  return ({
    messages: states.root.messages,
    myChatRoom: states.root.myChatRoom
  })
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessageToDb: (docId, msgObj, messageType) => {
      dispatch(sendMessageToDb(docId, msgObj, messageType));
    },
    getMessagesFromDb: (docId,) => {
      dispatch(getMessagesFromDb(docId,));
    },
    deleteGroup: (docId,) => {
      dispatch(deleteGroup(docId,));
    },
    updateGroupName: (recipientData, updatedname, myChatRoom) => {
      dispatch(updateGroupName(recipientData, updatedname, myChatRoom));
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