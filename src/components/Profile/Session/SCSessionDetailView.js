import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default class SCSessionDetailView extends Component {
    render() {
        let distance = this.props.distance;
        let elevation = this.props.elevation;
        let time = this.props.time;
        let top = this.props.top;
        let avg = this.props.avg;
        let type = this.props.type;

        return (
            <>
            {
                <View style={[this.props.style ?? {}, styles.container]}>
                    <View style={this.props.iconStyle ?? styles.icon}>
                        {type == 'distance' ? (<Image source={require('../../../assets/profile/profile-session-distance.png')} style={this.props.iconStyle ?? styles.icon}/>) : type == 'elevation' ? (<Image source={require('../../../assets/profile/profile-session-elevation.png')} style={this.props.iconStyle ?? styles.icon}/>) : type == 'time' ? (<Image source={require('../../../assets/profile/profile-session-time.png')} style={this.props.iconStyle ?? styles.icon}/>) : type == 'top' ? (<Image source={require('../../../assets/profile/profile-session-top-speed.png')} style={this.props.iconStyle ?? styles.icon}/>) : (<Image source={require('../../../assets/profile/profile-session-avg-speed.png')} style={this.props.iconStyle ?? styles.icon}/>)}
                    </View>
                    <Text style={this.props.infoLabelStyle ?? styles.infoLabel}>
                        {type == 'distance' ? 'Distance' : type == 'elevation' ? 'Elevation' : type == 'time' ? 'Time' : type == 'top' ? 'Top speed' : type == 'avg' ? 'Av. speed' : '' }
                    </Text>
                    <Text style={this.props.infoTxtStyle ?? styles.infoTxt}>
                        {type == 'distance' ? distance : type == 'elevation' ? elevation : type == 'time' ? time : type == 'top' ? top : type == 'avg' ? avg : '' }
                    </Text>                    
                </View>
                
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoLabel: {
        textAlign: 'center',
        color: '#252430',
        fontSize: 8,
        marginTop: 1
    },    
    icon: {
        width: 15,
        height: undefined,
        aspectRatio: 1,
    },
    infoTxt: {
        marginTop: 3,
        color: '#0A63EB',
        fontSize: 8,
        fontWeight: '400',
        textAlign: 'center'
    }

})