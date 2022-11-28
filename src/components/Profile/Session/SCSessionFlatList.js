import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import SCSessionItemView from './SCSessionItemView';

const DATA = [
    {
      id: '1',
      name: 'Jane Doe',
      distance: '3000 m',
      elevation: '400 m',
      time: '1:20:15',
      top_speed: '60 km/h',
      avg_speed: '30 km/h'
    },
    {
        id: '2',
        name: 'Jane Doe',
        distance: '3000 m',
        elevation: '400 m',
        time: '1:20:15',
        top_speed: '60 km/h',
        avg_speed: '30 km/h'
      },
      {
        id: '3',
        name: 'Jane Doe',
        distance: '3000 m',
        elevation: '400 m',
        time: '1:20:15',
        top_speed: '60 km/h',
        avg_speed: '30 km/h'
      },
      {
        id: '4',
        name: 'Jane Doe',
        distance: '3000 m',
        elevation: '400 m',
        time: '1:20:15',
        top_speed: '60 km/h',
        avg_speed: '30 km/h'
      }
  ];

const Item = ({ name, distance, elevation, time, top, avg }) => (
    <View style={styles.item}>
        <SCSessionItemView name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg}/>
    </View>
  );

export default class SCSessionFlatList extends Component {
    
    render() {
        const renderItem = ({ item }) => (
            <Item name={item.name} distance={item.distance} elevation={item.elevation} time={item.time} top={item.top_speed} avg={item.avg_speed}/>
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
        marginHorizontal: 0,
      }
    

})