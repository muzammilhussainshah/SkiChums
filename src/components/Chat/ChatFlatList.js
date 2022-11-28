import React, { Component } from 'react';
import { FlatList, FlatListProps, Text, View, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialIndicator } from 'react-native-indicators';
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

const Item = ({ name, last_msg, time, id }) => (
    <View style={styles.item}>
        <ChatFlatListCell name={name} last_msg={last_msg} time={time} id={id}></ChatFlatListCell>
        
    </View>
  );

export default class ChatFlatList extends Component {
    
    render() {
        const renderItem = ({ item }) => (
          <TouchableWithoutFeedback onPress={this.props.onClick}>
              <Item name={item.name} last_msg={item.last_msg} time={item.time} id={item.id}/>
          </TouchableWithoutFeedback>            
          );

        return (
            <>
            {
                <View style={this.props.style ?? styles.container}>
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