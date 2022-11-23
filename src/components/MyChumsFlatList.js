import React, { Component } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import ChumInfoView from './ChumInfoView';
import auth, { firebase } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import MyChumAcceptContainer from './MyChumAcceptContainer';

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
const Item = ({ item, status }) => {
  console.log(item, 'adlassakjlsadj', status)

  return (
    <View style={styles.item}>
      <ChumInfoView name={item.displayName} profilePic={item.photoURL} distance={item.distance}   ></ChumInfoView>

      {status == 'REQUESTED' ? (
        <MyChumAcceptContainer accept={handleAccept} />
      ) : (null)}

    </View>
  )
};

export default class MyChumFlatList extends Component {

  render() {

    const handleAccept = (id) => {
      const user = firebase.auth().currentUser
      let userDoc = this.props.data.filter((val) => val.uid == user.uid)
      let selectedChams = userDoc[0].myChams.filter((val) => val.id == id)
      if (selectedChams.length > 0) { selectedChams[0].status = 'CHUMS' }
      let reciepentDoc = this.props.data.filter((val) => val.uid == id)
      let selectedReciepentRequestObj = reciepentDoc[0]?.chumpsRequest?.filter((val) => val.id === userDoc[0].uid)
      if (selectedReciepentRequestObj&&selectedReciepentRequestObj.length > 0) { selectedReciepentRequestObj[0].status = 'CHUMS' }
      if (!reciepentDoc[0]?.myChams) {
        reciepentDoc[0].myChams = []
      }
      reciepentDoc[0].myChams.push(selectedReciepentRequestObj[0])
      firestore().collection('chums').doc(user.uid).update({ myChams: userDoc[0].myChams });
      firestore().collection('chums').doc(id).update({ chumpsRequest: reciepentDoc[0].chumpsRequest });
      firestore().collection('chums').doc(id).update({ myChams: reciepentDoc[0].myChams });
    }
    const renderItem = ({ item }) => {
      let data = this.props.data.filter((val) => val.uid == item.id)
      return (
        <TouchableOpacity
          onPress={this.props.clickChum}
          activeOpacity={.8}
        >
          {/* <Item item={data[0]} status={item.status} /> */}
          <View style={styles.item}>
            <ChumInfoView name={data[0].displayName} profilePic={data[0].photoURL} distance={data[0].distance}   ></ChumInfoView>
            {console.log(item, 'itemitemitem')}
            {item.status == 'REQUESTED' ? (
              <MyChumAcceptContainer accept={() => handleAccept(item.id)} />
            ) : (null)}

          </View>
        </TouchableOpacity>
      )

    };
    const user = firebase.auth().currentUser
    return (
      <>
        {
          <View style={this.props.style ?? styles.container}>
            <FlatList
              data={this.props.data.filter((val) => val.uid == user.uid)[0].myChams}
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