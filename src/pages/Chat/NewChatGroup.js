import React from "react";
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import ChatFlatList from "../../components/Chat/ChatFlatList";
import ChatGroupTagView from "../../components/Chat/ChatGroupTagView";
import { connect } from 'react-redux';
import { createGroup, addGroupMember } from '../../store/action/action'
import { firebase } from "@react-native-firebase/auth";
class NewChatGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      members: []
    }
  };
  render() {
    const { params } = this?.props?.route
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={require("../../assets/icons/blue-logo.png")} resizeMode="cover" style={styles.logo} />
          <View style={styles.topContainer}>
            <View style={styles.topBarContainer}>
              <TouchableOpacity style={styles.back} onPress={this.onBack}>
                <Image source={require("../../assets/Settings/blue-chevron-left.png")} style={styles.backIcon} />
              </TouchableOpacity>
              <View style={styles.groupNameContainer}>
                <Text style={styles.groupNameTxt}>
                  Val d'lsere
                </Text>
                <Text style={styles.groupMemberTxt}>
                  Add participants
                </Text>
              </View>
              <TouchableOpacity style={styles.searchIcon}>
                <Image source={require("../../assets/icons/ic_blue_search.png")} style={styles.searchIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.topLine} />
          </View>

        </View>
        {!params?.singleMsg &&
          <>
            <View style={styles.memberContainer}>
              <ChatGroupTagView
                removeMember={this.addMember}
                data={this.state.members}
                style={styles.tagView} />
              <TouchableOpacity style={styles.createButton} onPress={this.onCreateChat}>
                <Image style={styles.createButton} source={require("../../assets/icons/ic_blue_circle_arrow.png")} />
              </TouchableOpacity>
            </View>
            <View style={styles.blueLine} />
          </>
        }
        <ChatFlatList
          navigation={this.props.navigation}
          style={styles.list}

          forNewGourp={!params?.singleMsg ? this.addMember
            : null}
          data={this?.props?.mychums}
        />
      </View>
    );
  }

  addMember = (member, addMember) => {
    let memberIndex = this.state.members.findIndex((stMember) => member.uid == stMember.uid)
    if (memberIndex !== -1) {
      // if (!addMember)
      this.setState({ member: this.state.members.splice(memberIndex, 1) })
    }
    else {
      //  if (addMember)
      this.setState({ member: this.state.members.push(member) })
    }
  }

  onBack = () => {
    this.props.navigation.pop()
  }

  onCreateChat = () => {
    console.log(this.props, 'addMemberaddMember')
    let addMember = this?.props?.route?.params?.addMember
    if (addMember) {
      let myChatRoom = this?.props?.route?.params?.myChatRoom
      let recipientData = this?.props?.route?.params?.recipientData
      this.props.addGroupMember(recipientData, this?.state?.members, myChatRoom)
      // this.props.navigation.navigate('ChatScreen', {
      this.props.navigation.pop( 2)

    }
    else {
      let members = this.state.members
      const user = firebase.auth().currentUser
      let membersIds = members?.map(({ uid }) => uid)
      membersIds?.push(user.uid)
      let groupId = self?.crypto?.randomUUID()
      let groupObj = {
        creatAt: new Date(),
        createBy: user.uid,
        id: groupId,
        members: membersIds,
        // modifiedAt
        // name
        // recientMessage
        // readBy
        // sentAt
        // sentBy
        type: 1,
        // users
      }
      this.props.createGroup(groupObj, groupId)
      this.props.navigation.navigate('ChatScreen', {
        isPrivate: false, members: this.state.members,
        recipientData: groupObj
      })
    }
  }
}


function mapStateToProps(states) {
  return ({
    mychums: states.root.mychums
  })
}

function mapDispatchToProps(dispatch) {
  return {
    createGroup: (members, groupId) => {
      dispatch(createGroup(members, groupId));
    },
    addGroupMember: (recipientData, updatedname, myChatRoom) => {
      dispatch(addGroupMember(recipientData, updatedname, myChatRoom));
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewChatGroup);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  tagView: {
    flex: 1
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
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchIcon: {
    width: 18,
    height: 18
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
  blueLine: {
    backgroundColor: '#035BF8',
    height: 0.5,
    marginTop: 16,
    marginHorizontal: 25
  }
});


