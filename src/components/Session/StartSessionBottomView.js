import React, { Component } from "react";
import { View, StyleSheet, Platform} from "react-native";
import SCSessionDetailView from "../Profile/Session/SCSessionDetailView";
import SCGradientButton from "../SCGradientButton";

export default class StartSessionBottomView extends Component {
    render() {
        let distance = '1000 m'
        let elevation = '400 m'
        let time = '1:20:15'
        let top = '60 km/h'
        let avg = '30 km/h'
        let name = ''
        return (
            <View style={[this.props.style ?? {}, styles.container]}>
                <View style={styles.detailContainer}>
                    <SCSessionDetailView type='distance' name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg} iconStyle={styles.iconStyle} infoLabelStyle={styles.infoLabelStyle} infoTxtStyle={styles.infoTxtStyle} style={{marginHorizontal: 8}}/>
                    <SCSessionDetailView type='elevation' name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg} iconStyle={styles.iconStyle} infoLabelStyle={styles.infoLabelStyle} infoTxtStyle={styles.infoTxtStyle} style={{marginHorizontal: 8}}/>
                    <SCSessionDetailView type='time' name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg} iconStyle={styles.iconStyle} infoLabelStyle={styles.infoLabelStyle} infoTxtStyle={styles.infoTxtStyle} style={{marginHorizontal: 8}}/>
                    <SCSessionDetailView type='top' name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg} iconStyle={styles.iconStyle} infoLabelStyle={styles.infoLabelStyle} infoTxtStyle={styles.infoTxtStyle} style={{marginHorizontal: 8}}/>
                    <SCSessionDetailView type='avg' name={name} distance={distance} elevation={elevation} time={time} top={top} avg={avg} iconStyle={styles.iconStyle} infoLabelStyle={styles.infoLabelStyle} infoTxtStyle={styles.infoTxtStyle} style={{marginHorizontal: 8}}/>
                </View>        
                <SCGradientButton buttonTitle={"Start this session"} style={styles.startButton} onClick={this.props.onClick}/>
            </View>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'column',
        flex: 1,
        height: 166,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
    },
    detailContainer: {
        marginTop: 16,
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
        marginTop: 26
      }

})