import React, { Component } from 'react';
import {
  FlatList,
  View,
  StyleSheet
} from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import ChatFlatListCell from './ChatFlatListCell';

const DATA = [
  {
    id: '0',
    name: 'John Barker',
    last_msg: 'I\'ll get some sun block then! See u!',
    time: '9:30'
  },
  {
    id: '1',
    name: 'Sarah Garner',
    last_msg: 'Should be perfect!',
    time: '13:23'
  },
  {
    id: '2',
    name: 'Michael Wilkinson',
    last_msg: 'See you there!',
    time: '14:12'
  }

];

class ChatFlatList extends Component {

  navigationToChat(item) {
    this.props.navigation.navigate('ChatScreen', {
      isPrivate: true,
      recipientData: item
    })
  }
  render() {
    const renderItem = ({ item }) => {
      let name;
      if (item?.type == 1) {

        item?.members?.map((item) => {
          let userData = this.props.mychums.filter((val) => val.uid == item)
          if (userData?.length > 0) {
            if (typeof name !== 'undefined') {
              name += userData[0].displayName ? userData[0].displayName + ', ' : userData[0].email.split("@")[0] + ', '
            }
            else {
              name = userData[0].displayName ? userData[0].displayName + ', ' : userData[0].email.split("@")[0] + ', '
            }
          }
        })
      }
      else if (item.displayName) name = item.displayName
      else name = item?.email?.split('@')[0]
      return (
        <TouchableWithoutFeedback onPress={
          this.props.forNewGourp ?
            () => this.props.forNewGourp(item, true) :
            this.navigationToChat.bind(this, item)
        }
          style={styles.item} >
          <ChatFlatListCell
            profilePic={item.photoURL}
            name={name}
            type={item?.type}
            last_msg={'Should be perfect!'} time={'13:23'}
            id={item.uid} />

        </TouchableWithoutFeedback >
      )
    };
    return (
      <>
        {
          < View style={this.props.style ?? styles.container} >
            <FlatList
              data={this.props.data}
              renderItem={renderItem}
              keyExtractor={item => item.id}></FlatList>
          </View >

        }
      </>
    )
  }
}

function mapStateToProps(states) {
  return ({
    mychums: states.root.mychums,
  })
}

function mapDispatchToProps(dispatch) {
  return {
    // getChatroom: (myChams) => {
    //   dispatch(getChatroom(myChams));
    // },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatFlatList);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 16,
  }


})