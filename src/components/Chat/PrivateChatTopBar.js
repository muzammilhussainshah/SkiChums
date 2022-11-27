import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class PrivateChatTopBar extends Component {
    render() {
        return (
            <View style={[this.props.style ?? {}, styles.container]}>
                <View style={styles.groupNameContainer}>
                    <Text style={styles.opponentNameTxt}>
                        {this.props.name}
                    </Text>
                    <View style={styles.status} />
                </View>
                <TouchableOpacity style={styles.profileIcon} onPress={this.props.onProfile}>
                    {this.props.profilePic ?
                        <Image source={{ uri: this.props.profilePic }} style={styles.profileIcon} />
                        :
                        <FontAwesome name="user-circle-o" size={25} color={'gray'} style={{ alignSelf: 'center' }} />
                    }
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
        height: 30,
        borderRadius: 15,
        overflow: 'hidden'
    },
})