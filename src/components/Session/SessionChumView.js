import React, { Component } from "react";
import { View, StyleSheet, Image, Text} from "react-native";
import SCSessionDetailView from "../Profile/Session/SCSessionDetailView";
import SCGradientButton from "../SCGradientButton";

export default class SessionChumView extends Component {
    render() {        
        let name = this.props.name
        let me = this.props.me ?? true
        let id = this.props.id
        return (
            <View style={[this.props.style ?? {}, styles.container]}>
                {me ? (<Text style={styles.name}>
                    You
                </Text>) : (<View style={styles.profile}>
                    {id == 0 ? (<Image source={require("../../assets/icons/sample-chum-profile1.png")} style={styles.profile}/>) : (<Image source={require("../../assets/icons/sample-chum-profile2.png")} style={styles.profile}/>)}
                    
                </View>)}
                

                {me ? (null) : (<Text style={styles.name}>
                    {name}
                </Text>)}
                
                {me ? (<Image source={require("../../assets/icons/map_pin_green.png")} style={[styles.pin, {tintColor: '#0245F5'}]}/>) : id == 0 ? (<Image source={require("../../assets/icons/map_pin_green.png")} style={[styles.pin]}/>) : (<Image source={require("../../assets/icons/map_pin_green.png")} style={[styles.pin, {tintColor: 'black'}]}/>)}
                
            </View>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        marginHorizontal: 4,
    },
    profile: {
        width: 40,
        height: 40,
        marginLeft: 5,
        borderRadius: 20
    },
    name: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
        marginLeft: 10,
        textAlign: 'center',
    },
    pin: {
        width: 20,
        height: 20,
        marginLeft: 5,
        marginRight: 5
    }

})