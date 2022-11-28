import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Platform } from "react-native";
import SCSessionDetailView from "./SCSessionDetailView";
import MapView from 'react-native-maps';
import SCSessionItemAndroidView from "./SCSessionItemAndroidView";
import SCSessionItemiOSView from "./SCSessionItemiOSView";

export default class SCSessionItemView extends Component {
    render() {
        let name = this.props.name;
        let distance = this.props.distance;
        let elevation = this.props.elevation;
        let time = this.props.time;
        let top = this.props.top;
        let avg = this.props.avg;

        return (
            <>
            {
                <View style={[this.props.style ?? {}, styles.container]}>
                    {Platform.OS == 'android' ? <SCSessionItemAndroidView/> : <SCSessionItemiOSView/>}
                </View>
                
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        height: 203,
        padding: 5,
        backgroundColor: 'white'
        // backgroundColor: 'green'
    },
    shadowContainer: {
        position: 'absolute',
        left: 3,
        right: 3,
        top: 3,
        bottom: 3,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        // overflow: 'hidden',
        elevation: 2,
        backgroundColor: Platform.OS == 'android' ? '#0000' : 'white',
        // backgroundColor: 'red'
    },
    header: {
        flexDirection: 'row',
        height: 41,
        alignItems: 'center',
        top: 0,
        backgroundColor: 'white'
    },
    headerSpace: {
        flex: 1
    },
    mapView: {
        flex: 1
    },
    bottomView: {
        paddingHorizontal: 30,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: 0,
        height: 59,
    }, 
    headerButton: {
        width: 15,
        height: 15,
        marginHorizontal: 2.5
    },
    sessionProfilePhoto: {
        width: 20,
        height: 20,
        marginLeft: 17
    },
    headerButtons: {
        flexDirection: 'row',
        height: 15,
        right: 15
    },
    sessionUserName: {
        color: '#0245F5',
        fontWeight: '400',
        fontSize: 12,
        marginLeft: 12
    },     
})