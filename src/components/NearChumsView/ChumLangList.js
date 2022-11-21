import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ChumInfoView from '../ChumInfoView';
import LangIconView from './LangIconView';
import MyChumAcceptContainer from '../MyChumAcceptContainer';
import NearChumInfoView from './NearChumInfoView';

const DATA = [
    {
      id: '1',
      name: 'Jane Doe',
      distance: '3km',
      status: 'REQUESTED'
    },
    // {
    //   id: '2',
    //   name: 'Jack Sparrow',
    //   distance: '5km',
    //   status: 'REQUESTED'
    // },
  ];

const Item = ({ name, distance, status }) => (
    <View style={styles.item}>
        <LangIconView name={name} distance={distance}></LangIconView>        
    </View>
  );

export default class ChumLangList extends Component {
    
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
        flex: 1,
        flexDirection: 'row',    
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        // padding: 0,
        // marginHorizontal: 2,
      }
    

})