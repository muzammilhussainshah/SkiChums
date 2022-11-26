import React, { Component } from "react";
import { StyleSheet, Image, View } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import AllChumFlatList from '../components/AllChumFlatList';
import InviteChumButton from '../components/InviteChumButton';
import { connect } from 'react-redux'
import MyChumFlatList from "../components/MyChumsFlatList";
import { getAllChums } from '../store/action/action'
import SCSearchBar from '../components/SCSearchBar';
import TabButton from '../components/TabButton';

class Chums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listType: 'all',
      allChums: []
    }
  }
  componentDidMount() {
    // function onError(error) {
    //   console.error(error);
    // }
    this.props.getAllChums()
    // firestore().collection('chums').onSnapshot((querySnapshot) => {
    //   let chums = []
    //   querySnapshot.forEach(documentSnapshot => {
    //     chums.push(documentSnapshot.data())
    //   });
    //   // this.props.chums = chums

    //   this.setState({ allChums: chums })

    // }
    //   , onError);

  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.chums.length !== this.state.allChums.length) { this.setState({ allChums: nextProps.chums }) }
  } 


  render() {
    // console.log(this.props, 'NewChatGroupNewChatGroupNewChatGroup',)
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
          <AllChumFlatList style={styles.list} clickChum={this.onClickChum} data={this.state.allChums} />)
          : (<MyChumFlatList data={this.state.allChums} clickChum={this.onClickChum} style={styles.list}></MyChumFlatList>)}

        <InviteChumButton style={styles.inviteButton} />
      </View>
    );
  }

  onClickChum = () => {
    console.log('chum clicked...')
    this.props.navigation.navigate('Chatlist')
  }
}


function mapStateToProps(states) {
  return ({
    chums: states.root.chums

  })
}

function mapDispatchToProps(dispatch) {
  return {
    getAllChums: () => {
      dispatch(getAllChums());
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chums);
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