import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

export default class SettingsHeader extends Component {
    render() {
        return (
            <>
                {
                    <View style={styles.container}>
                        <Image source={require("../../assets/icons/blue-logo.png")} resizeMode="cover" style={styles.logger} />
                        <Text style={styles.title}> Settings </Text>
                        <View style={styles.space} />
                        <TouchableOpacity style={styles.close} onPress={this.props.onClose}>
                            <Image source={require("../../assets/Settings/blue-close.png")} />
                        </TouchableOpacity>
                    </View>
                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        top: 0,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        marginTop: 44
    },
    logger: {
        width: 59,
        aspectRatio: 1,
        marginLeft: 28
    },
    close: {
        width: 15,
        height: 15,
        right: 40,
    },
    space: {
        flex: 1,
    },
    title: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    }
})