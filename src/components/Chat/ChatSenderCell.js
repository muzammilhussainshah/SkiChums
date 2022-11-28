import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class ChatSenderCell extends Component {
    render() {
        let name = this.props.name;
        let message = this.props.message;
        let time = this.props.time;

        return (
                <View style={styles.container}>
                    <Text style={styles.time}>
                        {time}
                    </Text>
                    <View style={styles.space}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.message}>
                            {message}
                        </Text>
                    </View>
                </View>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    space: {
        flex: 1
    },
    textContainer: {
        backgroundColor: 'rgba(3, 115, 251, 0.3)',
        maxWidth: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    time: {
        fontSize: 10,
        color: 'black'
    },
    message: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        fontSize: 10,
        color: 'black'
    }
    

})