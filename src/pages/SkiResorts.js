import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import BlueLogoAndSettingsBar from '../components/BlueLogoAndSettingsBar';
import NearChumView from '../components/NearChumsView/NearChumView';
import ResortSearchBox from '../components/ResortSearchBox';
import { EventRegister } from 'react-native-event-listeners'

export default class SkiReorts extends Component {
  
  componentDidMount() {
    this.listener = EventRegister.addEventListener('startSession', (data) => {
      console.log('start session event triggered')
      this.props.navigation.navigate('LiveSession')
    })
  }
  
  componentWillUnmount() {
      EventRegister.removeEventListener(this.listener)
  }

  render() {
    // let startSession = this.props.route.params.startSession ?? false;
    return (
      <View style={styles.container}>
      <MapView provider={MapView.PROVIDER_GOOGLE} style={styles.map}
       region={{
        latitude: 45.4692619,
        longitude: 6.970792,
        latitudeDelta: 0.0152,
        longitudeDelta: 0.0151,
      }}
     >
      <Marker
          coordinate={{latitude: 45.4742619, longitude: 6.9755402}}
          image={{uri: 'map_skier_pin'}}
        >
        </Marker>

        <Marker
          coordinate={{latitude: 45.4752619, longitude: 6.9735402}}
          image={{uri: 'map_skier_pin'}}
        ></Marker>

        <Marker
          coordinate={{latitude: 45.4752619, longitude: 6.9765402}}
          image={{uri: 'map_skier_pin'}}
        ></Marker>

        <Marker
          coordinate={{latitude: 45.4722619, longitude: 6.9765402}}
          image={{uri: 'map_skier_pin'}}
        ></Marker>

        <Marker
          coordinate={{latitude: 45.4732619, longitude: 6.9745402}}
          image={{uri: 'map_skier_pin'}}
        ></Marker>

        <Marker
          coordinate={{latitude: 45.4756619, longitude: 6.9665402}}
          image={{uri: 'map_skier_pin'}}
        ></Marker>

        <Marker
          coordinate={{latitude: 45.4746619, longitude: 6.9652402}}
          image={{uri: 'map_skier_pin'}}
        ></Marker>

        <Marker
          coordinate={{latitude: 45.4726619, longitude: 6.9662402}}
          image={{uri: 'map_skier_pin'}}
        ></Marker>

        <Marker
          coordinate={{latitude: 45.4736619, longitude: 6.9682402}}
          image={{uri: 'map_skier_pin'}}
        ></Marker>

        <Marker
          coordinate={{latitude: 45.4716619, longitude: 6.9682402}}
          image={{uri: 'map_skier_pin'}}
        ></Marker>

        <Marker
          coordinate={{latitude: 45.4636619, longitude: 6.9742402}}
          image={{uri: 'map_skier_pin'}}
        />

        <Marker
          coordinate={{latitude: 45.4649619, longitude: 6.9747402}}
          image={{uri: 'map_skier_pin'}}
        />

        <Marker
          coordinate={{latitude: 45.4659619, longitude: 6.9732402}}
          image={{uri: 'map_skier_pin'}}
        />

        <Marker
          coordinate={{latitude: 45.4659619, longitude: 6.9762402}}
          image={{uri: 'map_skier_pin'}}
        />

        <Marker
          coordinate={{latitude: 45.4669619, longitude: 6.9752402}}
          image={{uri: 'map_skier_pin'}}
        />

        {/* ski target */}
        <Marker
          coordinate={{latitude: 45.4692619, longitude: 6.965292}}
          image={{uri: 'map_ski_target'}}
        />
     </MapView>

     <BlueLogoAndSettingsBar/>
     <ResortSearchBox style={styles.searchBox}/>
     {/* <NearChumView style={styles.nearChums}/> */}
   </View>
    );  
  }
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'space-between'
      // alignItems: 'center',
      // alignItems: 'stretch',
      // justifyContent: 'flex-end'
    },
    map: {
      // flex: 1,
      width: '100%',
      height: '100%'
      // position: 'absolute',
      // left: 0,
      // right: 0,
      // bottom: 0,
      // height: 0
    },
    searchBox: {
      // marginBottom: 34,
      // marginHorizontal: 22,
      position: 'absolute',
      bottom: 34,
      height: 36,
      left: 22,
      right: 22
    },
    nearChums: {
      position: 'absolute',
      height: 232,
      left: 0,
      right: 0,
      bottom: 0
      // flex: 1,
      // backgroundColor: 'green'
    }
});
