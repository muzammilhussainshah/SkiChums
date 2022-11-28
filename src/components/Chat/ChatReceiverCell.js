import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class ChatReceiverCell extends Component {
    render() {
        let name = this.props.name;
        let message = this.props.message;
        let time = this.props.time;
        let isPrivate = this.props.isPrivate;
        return (
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={styles.name}>
                            {name}
                        </Text>
                        <Text style={styles.message}>
                            {message}
                        </Text>
                    </View>
                    <View style={styles.space}/>
                    <Text style={styles.time}>
                        {time}
                    </Text>
                    
                    
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
    name: {
        width: '100%',
        paddingLeft: 8,
        paddingTop: 5,
        textAlign: 'left',
        fontWeight: "bold",
        fontSize: 10,
        color: 'black'
    },
    message: {
        paddingHorizontal: 8,
        paddingBottom: 8,
        paddingTop: 2,
        fontSize: 10,
        color: 'black'
    }
    

})