import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import ChatFlatList from "../../components/Chat/ChatFlatList";
import ChatGroupTagView from "../../components/Chat/ChatGroupTagView";
import InviteChumButton from '../../components/InviteChumButton';
import MyChumFlatList from "../../components/MyChumsFlatList";
import SCSearchBar from "../../components/SCSearchBar";
import TabButton from "../../components/TabButton";
import CreateChatScreen from "./CreateChatScreen";

export default class NewChatGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const { params } = this?.props?.route
    console.log('singleMsg', params, this?.props?.route)
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
              <ChatGroupTagView style={styles.tagView} />
              <TouchableOpacity style={styles.createButton} onPress={this.onCreateChat}>
                <Image style={styles.createButton} source={require("../../assets/icons/ic_blue_circle_arrow.png")} />
              </TouchableOpacity>
            </View>
            <View style={styles.blueLine} />
          </>
        }
        <ChatFlatList style={styles.list} onClick={this.onClickChatCell} />
      </View>
    );
  }

 
  onClickChatCell = () => {
    console.log('clicked chat cell')
    this.props.navigation.navigate('ChatScreen', {
      isPrivate: true
    })
  }

  onBack = () => {
    this.props.navigation.pop()
  }

  onCreateChat = () => {
    this.props.navigation.navigate('ChatScreen', {
      isPrivate: false
    })
  }
}

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