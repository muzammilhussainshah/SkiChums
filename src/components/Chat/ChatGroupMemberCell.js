import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class ChatGroupMemberCell extends Component {
    render() {
        let name = this.props.name;
        let last_msg = this.props.last_msg;
        let time = this.props.time;

        return (
                <View style={styles.container}>
                    <View style={styles.profileImage}>
                        <Image source={require('../../assets/icons/sample-chum-profile.png')}/>
                    </View>
                </View>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 17.5
    },
    

})