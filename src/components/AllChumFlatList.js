import React, { Component } from 'react';
import { FlatList, FlatListProps, Text, View, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialIndicator } from 'react-native-indicators';
import ChumInfoView from './ChumInfoView';
import ChumInviteButton from './ChumInviteButton';
import auth, { firebase } from '@react-native-firebase/auth'

const Item = ({ name, distance, profilePic, status, id }) => (
  <View style={styles.item}>
    <ChumInfoView name={name} profilePic={profilePic} distance={distance}   ></ChumInfoView>
    <ChumInviteButton buttonType={status}></ChumInviteButton>
  </View>
);

export default class AllChumFlatList extends Component {

  render() {
    const renderItem = ({ item }) => {
      const user = firebase.auth().currentUser
      if (user.uid !== item.uid) {
        return (
          <TouchableWithoutFeedback onPress={this.props.clickChum}>
            <Item profilePic={item.photoURL} name={item.displayName} distance={item.distance} status={'ADD'} id={item.uid} />
          </TouchableWithoutFeedback>
        )
      }
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