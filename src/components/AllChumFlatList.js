import React, { Component } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import ChumInfoView from './ChumInfoView';
import ChumInviteButton from './ChumInviteButton';
import MyChumAcceptContainer from './MyChumAcceptContainer';
import { firebase } from '@react-native-firebase/auth'

const Item = ({ item, user }) => {
  let ardeadyChams = user[0]?.myChams?.filter((val) => val.id == item.uid)
  let isRequested = user[0]?.chumpsRequest?.filter((val) => val.id == item.uid)
  return (
    <View style={styles.item}>
      <ChumInfoView name={item.displayName} profilePic={item.photoURL} distance={item.distance}   ></ChumInfoView>
      {ardeadyChams?.length > 0 ?
        ardeadyChams[0]?.status === 'REQUESTED' &&
        <MyChumAcceptContainer />
        :
        <ChumInviteButton user={user[0]} item={item} buttonType={isRequested?.length > 0 ? isRequested[0].status : 'ADD'}></ChumInviteButton>
      }
    </View>
  )
};

export default class AllChumFlatList extends Component {

  render() {
    const renderItem = ({ item }) => {
      const user = firebase.auth().currentUser
      let userDoc = this.props.data.filter((val) => val.uid == user.uid)
      if (user?.uid !== item?.uid) {
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