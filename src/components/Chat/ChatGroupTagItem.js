import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class ChatGroupTagItem extends Component {
    render() {
        let name = this.props.name;
        let last_msg = this.props.last_msg;
        let time = this.props.time;
        let id = this.props.id;
        return (
                <View style={styles.container}>
                    <View style={styles.profileImage}>
                    {id == 0 ? (<Image source={require('../../assets/icons/sample-chum-profile2.png')} style={styles.profileImage}/>) : id == 1 ? (<Image source={require('../../assets/icons/sample-chum-profile.png')} style={styles.profileImage}/>) : (<Image source={require('../../assets/profile/profile_sample_me.jpeg')} style={styles.profileImage}/>)}
                    </View>
                    <TouchableOpacity style={styles.close}>
                        <Image source={require('../../assets/icons/ic_close_black.png')} style={styles.closeImage}/>
                    </TouchableOpacity>
                </View>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    infoContainer: {
        paddingLeft: 13,
        flex: 1,
        flexDirection: 'column'
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 17.5
    },
    close: {
        position: 'absolute',
        width: 10,
        height: 10,
        right: -5,
        top: -5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeImage: {
        width: 8,
        height: 8
    }
    

})