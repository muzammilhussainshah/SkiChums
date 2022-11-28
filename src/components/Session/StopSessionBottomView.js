import React, { Component } from "react";
import { View, StyleSheet, Text} from "react-native";
import SCSessionDetailView from "../Profile/Session/SCSessionDetailView";
import SCGradientButton from "../SCGradientButton";
import SessionChumView from "./SessionChumView";

export default class StopSessionBottomView extends Component {
    render() {
        let distance = '1000 m'
        let elevation = '400 m'
        let time = '1:20:15'
        let top = '60 km/h'
        let avg = '30 km/h'
        let name = ''
        return (
            <View style={[this.props.style ?? {}, styles.container]}>
                <View style={styles.chums}>
                    <SessionChumView name={"John"} me={false} id={0}/>
                    <SessionChumView name={"Michael"} me={false} id={1}/>
                    <SessionChumView name={"Me"} me={true} id={0}/>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.speedTimeContainer}>
                        <View style={styles.speedContainer}>
                            <Text style={styles.speedTimeTitle}>
                                Current speed
                            </Text>
                            <View style={styles.speedTxtContainer}>
                                <Text style={styles.speed}>
                                    12
                                </Text>
                                <Text style={styles.kmh}>
                                    km/h
                                </Text>
                            </View>
                        </View>
                        <View style={styles.speedContainer}>
                            <Text style={styles.speedTimeTitle}>
                                Time recorded
                            </Text>
                            <Text style={styles.time}>
                                0:35:26
                            </Text>
                        </View>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.detailContainer}>
                        <SCSessionDetailView type='distance' name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg} iconStyle={styles.iconStyle} infoLabelStyle={styles.infoLabelStyle} infoTxtStyle={styles.infoTxtStyle} style={{marginHorizontal: 8}}/>
                        <SCSessionDetailView type='elevation' name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg} iconStyle={styles.iconStyle} infoLabelStyle={styles.infoLabelStyle} infoTxtStyle={styles.infoTxtStyle} style={{marginHorizontal: 8}}/>
                        <SCSessionDetailView type='time' name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg} iconStyle={styles.iconStyle} infoLabelStyle={styles.infoLabelStyle} infoTxtStyle={styles.infoTxtStyle} style={{marginHorizontal: 8}}/>
                        <SCSessionDetailView type='top' name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg} iconStyle={styles.iconStyle} infoLabelStyle={styles.infoLabelStyle} infoTxtStyle={styles.infoTxtStyle} style={{marginHorizontal: 8}}/>
                    </View>        
                    <SCGradientButton buttonTitle={"Stop the session"} style={styles.startButton} onClick={this.props.onClick}/>
                </View>                
            </View>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'column',
        flex: 1,
        height: 323,
        left: 0,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 46,
        borderTopRightRadius: 46,
        backgroundColor: 'transparent',
    },
    chums: {
        flexDirection: 'row',
        height: 56,
        marginHorizontal: 16
    },
    bottomContainer: {
        position: 'absolute',
        flexDirection: 'column',
        flex: 1,
        height: 257,
        left: 0,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 46,
        borderTopRightRadius: 46,
        backgroundColor: 'white',
    },

    speedContainer: {
        flexDirection: 'column',
        paddingHorizontal: 30,
    },
    speedTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    speedTimeTitle: {
        color: '#8B8989',
        fontSize: 13,
        textAlign: 'center'
    },
    speedTxtContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    speed: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black'
    },
    kmh: {
        fontSize: 10,
        color: 'black',
        paddingBottom: 8,
        paddingLeft: 3
    },
    time: {
        fontSize: 30,
        color: 'black',
        paddingTop: 6
    },
    line: {
        backgroundColor: '#D9D9D9',
        height: 0.25,
        marginHorizontal: 26,
        marginTop: 7
    },
    detailContainer: {
        marginTop: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      iconStyle: {
        width: 25,
        height: undefined,
        aspectRatio: 1,
      },
      infoLabelStyle: {
        color: '#8B8989',
        fontSize: 10,
        marginTop: 7,
      },
      infoTxtStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 10,
        marginTop: 4
      },
      startButton: {
        height: 39,
        marginHorizontal: 29,
        marginTop: 20
      }

})