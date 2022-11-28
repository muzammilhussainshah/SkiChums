import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default class BlueLogoAndSettingsBar extends Component {
    render() {
        return (
            <>
            {
                <View style={styles.container}>
                    <Image source={require("../assets/icons/blue-logo.png")} resizeMode="cover" style={styles.whiteLogoer}/>
                </View>
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 44
    },
    whiteLogoer: {
        width: 59,
        aspectRatio: 1,
        marginLeft: 28
    }
})