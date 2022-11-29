import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class ChatGroupTagItem extends Component {
    render() {
        let profilePic = this?.props?.profilePic;
        return (
            <View style={styles.container}>
                <View style={styles.profileImage}>
                    {profilePic ?
                        <Image source={{ uri: profilePic }} style={styles.profileImage} />
                        :
                        <FontAwesome name="user-circle-o" size={35} color={'gray'} />
                    }
                </View>
                <TouchableOpacity
                    onPress={() => alert()}
                    style={styles.close}>
                    <Image source={require('../../assets/icons/ic_close_black.png')} style={styles.closeImage} />
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