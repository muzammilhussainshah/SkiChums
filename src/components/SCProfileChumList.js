import React, { Component } from 'react';
import { FlatList, Image, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export class SCProfileChumList extends Component {

  render() {
    return (
      <>
        {
          <View style={this.props.style ?? styles.container}>
            <FlatList
              horizontal={true}
              data={this.props.mychums}

              contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 50 }}
              renderItem={({ item }) => {
                return (
                  item?.photoURL?.length > 0 ?
                    <Image source={{ uri: item?.photoURL }} style={styles.myChumsList} />
                    :
                    <FontAwesome name="user-circle-o" color={'gray'} size={36} style={{ marginHorizontal: 5 }} />

                )
              }}
              keyExtractor={item => item.id}></FlatList>
          </View>

        }
      </>
    )
  }
}




function mapStateToProps(states) {
  return ({
    mychums: states.root.mychums

  })
}

function mapDispatchToProps(dispatch) {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SCProfileChumList);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    padding: 0,
    marginVertical: 12,
    marginHorizontal: 5,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5
  },
  myChumsList: {
    height: 36,
    marginHorizontal: 5,
    borderRadius: 18,
    overflow: 'hidden',
    width: 36
  }
})