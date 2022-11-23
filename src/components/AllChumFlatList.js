import React, { Component } from 'react';
import { FlatList, FlatListProps, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialIndicator } from 'react-native-indicators';
import ChumInfoView from './ChumInfoView';
import ChumInviteButton from './ChumInviteButton';
import auth, { firebase } from '@react-native-firebase/auth'
import MyChumAcceptContainer from './MyChumAcceptContainer';

const Item = ({ item, user }) => {
  let ardeadyChams = user[0]?.myChams?.filter((val) => val.id == item.uid)
  let isRequested = user[0]?.chumpsRequest?.filter((val) => val.id == item.uid)
  if (isRequested?.length > 0) isRequested = true
  else isRequested = false

  return (
    <View style={styles.item}>
      <ChumInfoView name={item.displayName} profilePic={item.photoURL} distance={item.distance}   ></ChumInfoView>
      {ardeadyChams?.length > 0 ?
        <MyChumAcceptContainer />
        :
        <ChumInviteButton user={user[0]} item={item} buttonType={isRequested ? 'REQUESTED' : 'ADD'}></ChumInviteButton>
      }
    </View>
  )
};

export default class AllChumFlatList extends Component {

  render() {
    const renderItem = ({ item }) => {
      const user = firebase.auth().currentUser
      let userDoc = this.props.data.filter((val) => val.uid == user.uid)
      if (user.uid !== item.uid) {
        return (
          <TouchableOpacity
            onPress={this.props.clickChum}
            activeOpacity={.8}
          >
            <Item item={item} user={userDoc} />
          </TouchableOpacity>
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