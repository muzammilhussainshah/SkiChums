import React, { Component } from "react";
import { StyleSheet, Image, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import AllChumFlatList from '../components/AllChumFlatList';
import InviteChumButton from '../components/InviteChumButton';
import MyChumFlatList from "../components/MyChumsFlatList";
import SCSearchBar from '../components/SCSearchBar';
import TabButton from '../components/TabButton';
import firestore from '@react-native-firebase/firestore';


export default class Chums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listType: 'all',
      allChums: []
    }
  }
  componentDidMount() {

    // function onResult(QuerySnapshot) {
    //   console.log('Got Users collection result.', QuerySnapshot);
    //   let chums = []

    //   QuerySnapshot.forEach(documentSnapshot => {
    //     chums.push(documentSnapshot.data())
    //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //   });
    //   this.setState({ allChums: chums })
    // }

    function onError(error) {
      console.error(error);
    }

    firestore().collection('chums').onSnapshot((querySnapshot)=>{
          let chums = []
          querySnapshot.forEach(documentSnapshot => {
            chums.push(documentSnapshot.data())
            // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
          });
          this.setState({ allChums: chums })
        // console.log(chums,'sdasadsdas')
          
        }
        // onResult
        , onError);
        // console.log(this.state.allChums,'sdasadsdas')
    // firestore()
    //   .collection('chums')
    //   .get()
    //   .then(querySnapshot => {
    //     console.log('Total users: ', querySnapshot.size);
    //     let chums = []
    //     querySnapshot.forEach(documentSnapshot => {
    //       chums.push(documentSnapshot.data())
    //       console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //     });
    //     this.setState({ allChums: chums })


    //   });
    //   firestore()
    // .collection('chums')
    // // .doc('ABC')
    // .get()
    // .then(documentSnapshot => {
    //   console.log('User exists: ', documentSnapshot.exists);

    //   if (documentSnapshot.exists) {
    //     console.log('User data: ', documentSnapshot.data());
    //   }
    // });

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={require("../assets/icons/blue-logo.png")} resizeMode="cover" style={styles.logo} />
          <SCSearchBar />
        </View>

        <View style={styles.tabHeader}>
          <TabButton
            selectedStatus={this.state.listType == 'all' ? true : false}
            buttonTitle={'ALL CHUMS'}
            onTabBtnClick={() => this.setState({ listType: 'all' })} />

          <TabButton
            selectedStatus={this.state.listType == 'mine' ? true : false}
            buttonTitle={'MY CHUMS'}
            onTabBtnClick={() => this.setState({ listType: 'mine' })} />
        </View>

        {this.state.listType == 'all' ? (

          <AllChumFlatList style={styles.list} clickChum={this.onClickChum}
            data={this.state.allChums}
          />)
          : (<MyChumFlatList style={styles.list}></MyChumFlatList>)}


        <InviteChumButton style={styles.inviteButton} />
      </View>
    );
  }

  onClickChum = () => {
    console.log('chum clicked...')
    this.props.navigation.navigate('Chatlist')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    paddingVertical: 25,
    flex: 1,
    width: '100%',
  },
  headerContainer: {
    paddingTop: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 28,
  },
  tabHeader: {
    paddingTop: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50
  },
  logo: {
    width: 59,
    aspectRatio: 1,
    marginRight: 10
  },
  searchBar: {
    justifyContent: 'flex-end'
  },
  inviteButton: {
    marginBottom: 34,
    height: 36,
    marginHorizontal: 22
  },

});