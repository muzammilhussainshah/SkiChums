import React, { Component } from 'react';
import { FlatList, Image, View, StyleSheet } from 'react-native';

const DATA = [
    {
      id: '1',
      name: 'Jane Doe',
      distance: '3km',
      status: 'ADD'
    },
    {
      id: '2',
      name: 'Jack Sparrow',
      distance: '5km',
      status: 'REJECTED'
    },
    {
      id: '3',
      name: 'Peter Parker',
      distance: '15km',
      status: 'REQUESTED'
    },
    {
        id: '4',
        name: 'Jane Doe',
        distance: '3km',
        status: 'ADD'
      },
      {
        id: '5',
        name: 'Jack Sparrow',
        distance: '5km',
        status: 'REJECTED'
      },
      {
        id: '6',
        name: 'Peter Parker',
        distance: '15km',
        status: 'REQUESTED'
      },
      {
        id: '7',
        name: 'Jane Doe',
        distance: '3km',
        status: 'ADD'
      },
      {
        id: '8',
        name: 'Jack Sparrow',
        distance: '5km',
        status: 'REJECTED'
      },
      {
        id: '9',
        name: 'Peter Parker',
        distance: '15km',
        status: 'REQUESTED'
      },
      {
        id: '10',
        name: 'Jane Doe',
        distance: '3km',
        status: 'ADD'
      },
      {
        id: '11',
        name: 'Jack Sparrow',
        distance: '5km',
        status: 'REJECTED'
      },
      {
        id: '12',
        name: 'Peter Parker',
        distance: '15km',
        status: 'REQUESTED'
      }
  ];

const Item = ({ name, distance, status }) => (
    <View style={styles.item}>
        <Image source={require('../assets/icons/sample-chum-profile.png')}/>
    </View>
  );

export default class SCProfileChumList extends Component {
    
    render() {
        const renderItem = ({ item }) => (
            <Item name={item.name} distance={item.distance} status={item.status} />
          );

        return (
            <>
            {
                <View style={this.props.style ?? styles.container}>
                    <FlatList
                    horizontal={true}
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
    },
    item: {
        flex: 1,
        padding: 0,
        marginVertical: 12,
        marginHorizontal: 5,
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 17.5
    },
})