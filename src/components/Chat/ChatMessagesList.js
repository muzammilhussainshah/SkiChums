import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ChatReceiverCell from './ChatReceiverCell';
import ChatSenderCell from './ChatSenderCell';
import ChatPrivateReceiverCell from './ChatPrivateReceiverCell';
import ChatSenderGifCell from './ChatSenderGifCell';

const DATA = [
    {
      id: '0',
      name: 'John Barker',
      sender: true,
      message: 'Hey guys, so we meet at the slope at 9am?',
      time: '17:30',
      type: 'text'
    },
    {
      id: '1',
      name: 'Sarah Garner',
      sender: false,
      message: 'Hi, sure sounds good, see you there!',
      time: '17:32',
      type: 'text'
    },
    {
      id: '2',
      name: 'Michael Wilkinson',
      sender: false,
      message: 'Hey. Works for me too. I\'ve got my new skis. Can\'t wait to try them out!',
      time: '17:36',
      type: 'text'
    },
    {
        id: '3',
        name: 'John Barker',
        sender: true,
        message: 'Fab, see you guys there at 9am! Weather looks great, we\'ll have a blast! 🏂🏻',
        time: '17:36',
        type: 'text'
    },
    {
        id: '6',
        name: 'John Barker',
        sender: true,
        message: '',
        time: '17:36',
        type: 'gif'
    },
    {
        id: '4',
        name: 'Sarah Garner',
        sender: false,
        message: 'Snow is fresh, meant to be sunny with clear sky! Should be perfect!',
        time: '17:37',
        type: 'text'
      },
      {
        id: '5',
        name: 'Michael Wilkinson',
        sender: false,
        message: 'I\'ll get some sun block then! See u!',
        time: '17:37',
        type: 'text'
      },
  ];

const Item = ({ name, sender, message, time, isPrivate, type }) => (
    <View style={styles.item}>
      {type == 'text' ? (sender ? (<ChatSenderCell name={name} message={message} time={time}></ChatSenderCell>) : isPrivate ? (<ChatPrivateReceiverCell name={name} message={message} time={time} isPrivate={isPrivate}></ChatPrivateReceiverCell>) : (<ChatReceiverCell name={name} message={message} time={time} isPrivate={isPrivate}></ChatReceiverCell>)) : (<ChatSenderGifCell time={time} isPrivate={isPrivate}/>)}
        
    </View>
  );

export default class ChatMessagesList extends Component {
    
    render() {
      let isPrivate = this.props.isPrivate;
        const renderItem = ({ item }) => (
          <TouchableWithoutFeedback onPress={this.props.onClick}>
              <Item name={item.name} sender={item.sender} message={item.message} time={item.time} isPrivate={isPrivate} type={item.type}/>
          </TouchableWithoutFeedback>            
          );

        return (
            <>
            {
                <View style={[this.props.style ?? [], styles.container]}>
                    <FlatList
                    data={DATA}
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
        // alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 16,
      }
    

})