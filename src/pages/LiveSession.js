import React, { Component } from "react";
import { StyleSheet, Image, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import BlueLogoAndSettingsBar from '../components/BlueLogoAndSettingsBar';
import NearChumView from '../components/NearChumsView/NearChumView';
import ResortSearchBox from '../components/ResortSearchBox';
import SCSessionDetailView from '../components/Profile/Session/SCSessionDetailView';
import SCGradientButton from "../components/SCGradientButton";
import StartSessionBottomView from "../components/Session/StartSessionBottomView";
import StopSessionBottomView from "../components/Session/StopSessionBottomView";

export default class LiveSession extends Component{
  constructor(props) {
    super(props);

    this.state = {
      sessionStarted: false
    }
  }

  render() {    
    const mapPins = []
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

      
      {/* top 5: top right 5,
      bottom 5: bottom right 5 */}
      {!this.state.sessionStarted ? <>
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
          coordinate={{latitude: 45.4722619, longitude: 6.964592}}
          image={{uri: 'map_ski_target'}}
        />

      

        <Marker
          coordinate={{latitude: 45.4705619, longitude: 6.970792}}
          image={{uri: 'map_resort_route'}}
        />
      </> : <>
      <Marker
          coordinate={{latitude: 45.4719619, longitude: 6.970792}}
          image={{uri: 'map_sample_live_route'}}
        />
      </>}
        

     </MapView>

     <BlueLogoAndSettingsBar/>
     {this.state.sessionStarted ? (<StopSessionBottomView onClick={this.onStop}/>) : (<StartSessionBottomView onClick={this.onStart}/>)}
     
     
   </View>
    );  
  }
    
  onStop = () => {
    this.setState({sessionStarted: false})
  }
  onStart = () => {
    this.setState({sessionStarted: true})
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%'
    },
    searchBox: {
      position: 'absolute',
      bottom: 34,
      height: 36,
      left: 22,
      right: 22
    },
    bottomContainer: {
      position: 'absolute',
      flexDirection: 'column',
      flex: 1,
      height: 166,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'white',
    },
    
});
