import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class MyChumAcceptContainer extends Component {
    render() {
        return (
            <>
                {
                    <View style={styles.container}>
                        <TouchableOpacity
                            onPress={this.props.accept}
                            style={styles.button}>

                            <View style={styles.shadowButton}>
                                <Text style={styles.requestedButton}>
                                    Accept
                                </Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}
                            onPress={this.props.decline}>

                            <View style={styles.shadowButton}>
                                <Text style={styles.declineButton}>
                                    Decline
                                </Text>

                            </View>

                        </TouchableOpacity>



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
        justifyContent: 'center',
        borderRadius: 10,

    },
    button: {

    },
    shadowButton: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5
    },
    requestedButton: {
        fontWeight: '500',
        fontSize: 12,
        width: 60,
        height: 20,
        lineHeight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        color: 'black',
        textAlign: "center",
        marginVertical: 5
    },
    declineButton: {
        fontWeight: 'bold',
        fontSize: 12,
        width: 60,
        height: 20,
        lineHeight: 20,
        borderRadius: 10,
        backgroundColor: 'red',
        color: 'white',
        textAlign: "center",
        overflow: 'hidden',
        marginHorizontal: 5
    }



})