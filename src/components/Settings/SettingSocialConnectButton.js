import React, { Component } from "react";
import { View, StyleSheet, Text, Image, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class SettingSocialConnectButton extends Component {
    render() {
        let connected = this.props.connected;
        return (
            <>
            {
                <View style={styles.container}>
                    <View style={styles.hContainer}>
                        {connected == true ? (<Image source={require("../../assets/icons/ic_tick.png")} style={styles.logger}/>) : (<Image source={require("../../assets/icons/ic_plus.png")} style={styles.logger}/>)}

                        <TouchableOpacity>
                            <Text style={styles.title}> {connected == true ? 'Connected' : 'Connect'} </Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    hContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logger: {
        width: 15,
        height: 15,
    },
    title: {
        paddingLeft: 9,
        color: 'black',
        fontSize: 15,
        // flex: 1,
    },
})