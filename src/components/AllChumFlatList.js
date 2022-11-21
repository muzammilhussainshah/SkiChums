import React, { Component } from 'react';
import { FlatList, FlatListProps, Text, View, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialIndicator } from 'react-native-indicators';
import ChumInfoView from './ChumInfoView';
import ChumInviteButton from './ChumInviteButton';

const DATA = [
    {
      id: '1',
      name: 'Sarah Garner',
      distance: '3km',
      status: 'ADD'
    },
    {
      id: '2',
      name: 'John Barker',
      distance: '5km',
      status: 'CHUM'
    },
    {
      id: '3',
      name: 'Michael Wilkinson',
      distance: '15km',
      status: 'REQUESTED'
    },
    
  ];

const Item = ({ name, distance, status, id }) => (
    <View style={styles.item}>
        <ChumInfoView name={name} distance={distance} id={id}></ChumInfoView>
        <ChumInviteButton buttonType={status}></ChumInviteButton>        
    </View>
  );

export default class AllChumFlatList extends Component {
    
    render() {
        const renderItem = ({ item }) => (
          <TouchableWithoutFeedback onPress={this.props.clickChum}>
              <Item name={item.name} distance={item.distance} status={item.status} id={item.id} />
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