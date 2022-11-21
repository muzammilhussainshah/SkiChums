import React, { Component } from 'react';
import { FlatList, FlatListProps, Text, View, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ChatGroupMemberCell from './ChatGroupMemberCell';

const DATA = [
    {
      id: '1',
      name: 'Jane Doe',
      last_msg: 'last message from Jane',
      time: '9:30'
    },
    {
      id: '2',
      name: 'Jack Sparrow',
      last_msg: 'last message from Jack',
      time: '3:23'
    },
    {
      id: '3',
      name: 'Peter Parker',
      last_msg: 'last message from Peter',
      time: '2:12'
    },
    {
        id: '4',
        name: 'Smith',
        last_msg: 'last message from Smith',
        time: '11:42'
    }
      
  ];

const Item = ({ name, last_msg, time }) => (
    <View style={styles.item}>
        <ChatGroupMemberCell/>
        
    </View>
  );

export default class ChatGroupMemberList extends Component {
    
    render() {
        const renderItem = ({ item }) => (
          <TouchableWithoutFeedback onPress={this.props.onClick}>
              <Item name={item.name} last_msg={item.last_msg} time={item.time} />
          </TouchableWithoutFeedback>            
          );

        return (
            <View style={[this.props.style ?? {}, styles.container]}>
                <FlatList
                data={DATA}
                horizontal={true}
                renderItem={renderItem}
                keyExtractor={item => item.id}></FlatList>
            </View>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flexDirection: 'row',
        padding: -2,
        marginHorizontal: 0,
      }
    

})