import React, { Component } from 'react';
import {
  FlatList,
  View,
  StyleSheet
} from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
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

export default class ChatFlatList extends Component {

  navigationToChat(item) {
    this.props.navigation.navigate('ChatScreen', {
      isPrivate: true,
      recipientData: item
    })
  }
  render() {
    console.log(this.props.data,'this.props.data')
    const renderItem = ({ item }) => {
      return (
        <TouchableWithoutFeedback onPress={this.navigationToChat.bind(this, item)} style={styles.item}>
          <ChatFlatListCell
            profilePic={item.photoURL}
            name={item.displayName ? item.displayName : item.email}
            last_msg={'Should be perfect!'} time={'13:23'}
            id={item.uid} />

        </TouchableWithoutFeedback >
      )
    };

    return (
      <>
        {
          <View style={this.props.style ?? styles.container}>
            <FlatList
              data={this.props.data}
              renderItem={renderItem}
              keyExtractor={item => item.id}></FlatList>
          </View>

        }
      </>
    )
  }
}

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