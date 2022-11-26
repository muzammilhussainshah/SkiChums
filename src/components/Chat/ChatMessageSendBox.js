import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from "react-native";

export default class ChatMessageSendBox extends Component {
    render() {
        let keyboardOffset = this.props.keyboardOffset ?? 0
        let offset = keyboardOffset == 0 ? 36 : keyboardOffset - 70
        return (
            <View style={[styles.container, { marginBottom: offset }]}>
                <TextInput
                    value={this.props.messageValue}
                    onChangeText={(text) => this.props.getMessage(text)}
                    style={styles.chatInput} placeholder={"Type your message..."} placeholderTextColor='#0362F9' />
                <TouchableOpacity style={styles.emoji}>
                    <Image source={require('../../assets/icons/ic_emoji.png')} style={styles.emoji} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.sendMessage} style={styles.send}>
                    <Image source={require('../../assets/icons/ic_send.png')} style={styles.send} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 36,

        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        borderRadius: 18,
        elevation: 5,
        marginHorizontal: 21,
        marginBottom: 36,
        alignItems: 'center'
    },
    chatInput: {
        flex: 1,
        paddingHorizontal: 24,
    },
    send: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    emoji: {
        width: 18,
        height: 18,
        marginRight: 8
    },


})