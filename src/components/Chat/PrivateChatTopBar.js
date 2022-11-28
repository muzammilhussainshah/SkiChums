import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput } from "react-native";

export default class PrivateChatTopBar extends Component {
    render() {
        return (
            <View style={[this.props.style ?? {}, styles.container]}>
                <View style={styles.groupNameContainer}>
                    <Text style={styles.opponentNameTxt}>
                        Jane Doe
                    </Text>
                    <View style={styles.status}/>
                </View>                
                <TouchableOpacity style={styles.profileIcon} onPress={this.props.onProfile}>
                    <Image source={require("../../assets/icons/sample-chum-profile.png")} style={styles.profileIcon}/>
                </TouchableOpacity>      
            </View>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: 10
    },
    
    groupNameContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    status: {
        width: 7,
        height: 7,
        marginLeft: 8,
        borderRadius: 3.5,
        backgroundColor: '#10CD00'
    },
    opponentNameTxt: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
    },   
    profileIcon: {
        width: 30,
        height: 30
    },
})