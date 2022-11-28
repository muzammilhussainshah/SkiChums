import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput } from "react-native";

export default class GroupChatTopBar extends Component {
    render() {
        return (
            <View style={[this.props.style ?? {}, styles.container]}>
                <View style={styles.groupNameContainer}>
                    <Text style={styles.groupNameTxt}>
                        Val d'lsere
                    </Text>
                    <Text style={styles.groupMemberTxt}>
                        Michael, Sarah, me
                    </Text>
                </View>
                <TouchableOpacity style={styles.settingIcon} onPress={this.props.onSettings}>
                    <Image source={require("../../assets/icons/ic_settings_blue.png")} style={styles.settingIcon}/>
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    groupNameTxt: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
    },
    groupMemberTxt: {
        fontSize: 10,
        color: 'black',
        textAlign: 'center',
    },
    settingIcon: {
        width: 20,
        height: 20
    },
})