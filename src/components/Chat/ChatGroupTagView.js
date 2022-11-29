import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ChatGroupTagItem from './ChatGroupTagItem';

const Item = ({ removeMember, profilePic, }) => (
  <View style={styles.item}>
    <ChatGroupTagItem
      removeMember={removeMember}
      profilePic={profilePic}
    />
  </View>
);

export default class ChatGroupTagView extends Component {

  render() {
    const renderItem = ({ item }) => (
      <TouchableWithoutFeedback onPress={this.props.onClick}>
        <Item
          removeMember={this.props.removeMember}
          profilePic={item?.photoURL}
        />
      </TouchableWithoutFeedback>
    );

    return (
      <>
        {
          <View style={this.props.style ?? styles.container}>
            <FlatList
              data={this.props.data}
              horizontal={true}
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