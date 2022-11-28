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
import firestore from '@react-native-firebase/firestore';

export default class AllChumFlatList extends Component {

  render() {
    // FOR ACCEPT CHUM REQUEST
    const handleAccept = (id) => {
      const user = firebase.auth().currentUser
      let userDoc = this.props.data.filter((val) => val.uid == user.uid)
      let selectedChams = userDoc[0].myChams.filter((val) => val.id == id)
      if (selectedChams.length > 0) { selectedChams[0].status = 'CHUMS' }
      let reciepentDoc = this.props.data.filter((val) => val.uid == id)
      let selectedReciepentRequestObj = reciepentDoc[0]?.chumpsRequest?.filter((val) => val.id === userDoc[0].uid)
      if (selectedReciepentRequestObj && selectedReciepentRequestObj.length > 0) { selectedReciepentRequestObj[0].status = 'CHUMS' }
      if (!reciepentDoc[0]?.myChams) reciepentDoc[0].myChams = []
      reciepentDoc[0].myChams.push(selectedReciepentRequestObj[0])
      firestore().collection('chums').doc(user.uid).update({ myChams: userDoc[0].myChams });
      firestore().collection('chums').doc(id).update({ chumpsRequest: reciepentDoc[0].chumpsRequest });
      firestore().collection('chums').doc(id).update({ myChams: reciepentDoc[0].myChams });
    }

    // FOR DECLINE CHUM REQUEST
    const handleDecline = (id) => {
      const user = firebase.auth().currentUser
      let userDoc = this.props.data.filter((val) => val.uid == user.uid)
      let removeChumIndex = userDoc[0].myChams.findIndex((val) => val.id == id)
      if (removeChumIndex !== -1) userDoc[0].myChams.splice(removeChumIndex, 1)
      let reciepentDoc = this.props.data.filter((val) => val.uid == id)
      let removeReciepentIndex = reciepentDoc[0]?.chumpsRequest?.findIndex((val) => val.id === userDoc[0].uid)
      if (removeReciepentIndex !== -1) reciepentDoc[0]?.chumpsRequest.splice(removeReciepentIndex, 1)
      firestore().collection('chums').doc(user.uid).update({ myChams: userDoc[0].myChams });
      firestore().collection('chums').doc(id).update({ chumpsRequest: reciepentDoc[0].chumpsRequest });
    }

    const renderItem = ({ item }) => {
      const user = firebase.auth().currentUser
      let userDoc = this.props.data.filter((val) => val.uid == user.uid)
      if (user?.uid !== item?.uid) {
        let ardeadyChams = userDoc[0]?.myChams?.filter((val) => val.id == item.uid)
        let isRequested = userDoc[0]?.chumpsRequest?.filter((val) => val.id == item.uid)
        return (
          <TouchableOpacity
            onPress={this.props.clickChum}
            activeOpacity={.8}
          >

            <View style={styles.item}>
              <ChumInfoView
                name={item?.displayName ? item?.displayName : item?.email.split('@')[0]}
                profilePic={item.photoURL}
                distance={item.distance} />
              {ardeadyChams?.length > 0 ?
                ardeadyChams[0]?.status === 'REQUESTED' &&
                <MyChumAcceptContainer
                  accept={() => handleAccept(item.uid)}
                  decline={() => handleDecline(item.uid)}
                />
                :
                <ChumInviteButton
                  user={userDoc[0]}
                  item={item}
                  buttonType={isRequested?.length > 0 ? isRequested[0].status : 'ADD'} />
              }
            </View>
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