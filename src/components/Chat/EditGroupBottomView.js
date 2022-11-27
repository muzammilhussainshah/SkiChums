import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class EditGroupBottomView extends Component {
    render() {
        return (
            <>
                {
                    <View style={[this.props.style ?? {}, styles.container]}>
                        <TouchableOpacity onPress={this.props.onEditName}>
                            <Text style={styles.groupTitle}>
                                GROUP NAME HERE
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.line} />
                        <View style={styles.messageButtonContainer}>
                            <TouchableOpacity onPress={this.props.onNewMessage}>
                                <Text style={styles.text}>
                                    Add members
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.props.onNewMessage} style={styles.image}>
                                <Image style={styles.image} source={require("../../assets/icons/ic_blue_plus.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line} />
                        {this.props.isIAmAdmin &&
                            <>
                                <View style={styles.groupButtonContainer}>
                                    <TouchableOpacity onPress={() => this.props.onDeleteGroup()}>
                                        <Text style={styles.text}>
                                            Delete this group
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.props.onNewGroup}>
                                        <Image style={styles.close} source={require("../../assets/icons/ic_close_blue.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.line} />
                            </>}
                    </View>

                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    groupTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 30
    },
    messageButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 42,
        marginTop: 42,
    },

    groupButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 42,
        marginTop: 25,
    },
    text: {
        color: 'black',
        fontSize: 15,

    },
    image: {
        width: 13,
        height: 13
    },
    close: {
        width: 10,
        height: 10
    },
    line: {
        backgroundColor: '#035BF8',
        height: 0.5,
        marginHorizontal: 42,
        marginTop: 8
    },

})