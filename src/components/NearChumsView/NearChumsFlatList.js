import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import NearChumInfoView from './NearChumInfoView';

const DATA = [
    {
      id: '1',
      name: 'Jane Doe',
      distance: '3km',
      status: 'REQUESTED'
    },
    {
      id: '2',
      name: 'Jack Sparrow',
      distance: '5km',
      status: 'REQUESTED'
    },
    {
      id: '3',
      name: 'Peter Parker',
      distance: '15km',
      status: 'CHUM'
    },
    {
        id: '4',
        name: 'Jane Doe',
        distance: '3km',
        status: 'CHUM'
      },
      {
        id: '5',
        name: 'Jack Sparrow',
        distance: '5km',
        status: 'CHUM'
      },
      {
        id: '6',
        name: 'Peter Parker',
        distance: '15km',
        status: 'CHUM'
      },
      {
        id: '7',
        name: 'Jane Doe',
        distance: '3km',
        status: 'CHUM'
      },
      {
        id: '8',
        name: 'Jack Sparrow',
        distance: '5km',
        status: 'CHUM'
      },
      {
        id: '9',
        name: 'Peter Parker',
        distance: '15km',
        status: 'CHUM'
      },
      {
        id: '10',
        name: 'Jane Doe',
        distance: '3km',
        status: 'CHUM'
      },
      {
        id: '11',
        name: 'Jack Sparrow',
        distance: '5km',
        status: 'CHUM'
      },
      {
        id: '12',
        name: 'Peter Parker',
        distance: '15km',
        status: 'CHUM'
      }
  ];

const Item = ({ name, distance, status }) => (
    <View style={styles.item}>
        <NearChumInfoView name={name} distance={distance}></NearChumInfoView>        
    </View>
  );

export default class NearChumsFlatList extends Component {
    
    render() {
        const renderItem = ({ item }) => (
            <Item name={item.name} distance={item.distance} status={item.status} />
          );

        return (
            <>
            {
                <View style={[this.props.style ?? {}, styles.container]}>
                    <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    horizontal={true}
                    keyExtractor={item => item.id}></FlatList>
                </View>
                
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',    
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 10,
      }
    

})