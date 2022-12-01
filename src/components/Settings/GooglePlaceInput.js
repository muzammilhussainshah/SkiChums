import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class GooglePlaceInput extends Component {
    render() {
        return (
          <View style={{flex:1}}>

            <View style={{ width: "92%",left:'13%',top:"-20%", position: "absolute", zIndex: 1  }}>
            <View style={{ width: "95%",}}>
              <GooglePlacesAutocomplete
                placeholder='Enter Location'
                minLength={2}
                onPress={(data, details = null) => {
                  // 'details' is provided when fetchDetails = true
                  // console.log(data, details, "Console");
                  // let location = details.geometry.location
                  // this.getShopWithPlaceName(details.name, location)
                }}
                query={{
                  key: 'AIzaSyBQHKZTwhPJX_9IevM5jKC8kmz0NzqAaBk',
                  language: 'en',
                }}
                // autoFocus={this.state.focus}
                // returnKeyType={'default'}
                returnKeyType='next'
                fetchDetails={true}
                styles={{
                  textInputContainer: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                  },
                  listView: { backgroundColor: "white", height: 100 },
                  textInput: {
                    // backgroundColor: '#F2F2F2',
                    marginLeft: 0,
                    marginRight: 0,
                    color: '#5d5d5d',
                    fontSize: 16,
                    borderBottomColor:'#0A63EB',
                    borderBottomWidth:0.8,
                    height:35,
                  },
                  predefinedPlacesDescription: {
                    color: '#1faadb',
                  },
                }}
              />
            </View>
          </View>
          </View> 
        )        
    }
}

const styles = StyleSheet.create({
   
})