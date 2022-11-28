import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Platform } from "react-native";
import SCSessionDetailView from "./SCSessionDetailView";
import MapView from 'react-native-maps';

export default class SCSessionItemAndroidView extends Component {
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
                    <View style={styles.shadowContainer}>                    
                    <View style={styles.header}>
                        <View style={styles.sessionProfilePhoto}>
                            <Image source={require('../../../assets/profile/profile-default-avatar.png')}/>
                        </View>
                        <Text style={styles.sessionUserName}>
                            Jane Doe
                        </Text>
                        <View style={styles.headerSpace}/>
                        <View style={styles.headerButtons}>
                            <TouchableOpacity style={styles.headerButton}>
                                <Image source={require('../../../assets/profile/profile-session-save.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.headerButton}>
                                <Image source={require('../../../assets/profile/profile-session-like.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.headerButton}>
                                <Image source={require('../../../assets/profile/profile-session-share.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mapView}>
                        <MapView 
                        provider={MapView.PROVIDER_GOOGLE} 
                        style={styles.mapView}
                        region={{
                            latitude: 50.4501,
                            longitude: 30.5234,
                            latitudeDelta: 10,
                            longitudeDelta: 10,
                        }}>

                        </MapView>
                    </View>
                    <View style={styles.bottomView}>
                        <SCSessionDetailView type='distance' name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg}></SCSessionDetailView>
                        <SCSessionDetailView type='elevation' name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg}></SCSessionDetailView>
                        <SCSessionDetailView type='time' name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg}></SCSessionDetailView>
                        <SCSessionDetailView type='top' name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg}></SCSessionDetailView>
                        <SCSessionDetailView type='avg' name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg}></SCSessionDetailView>
                    </View>
                    </View> 
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
        elevation: 5,
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
        backgroundColor: 'white'
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