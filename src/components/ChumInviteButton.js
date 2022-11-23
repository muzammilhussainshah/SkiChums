import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from '@react-native-firebase/auth'

export default class ChumInviteButton extends Component {
    render() {
        const buttonType = this.props.buttonType;
        return (
            <>
                {
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button}
                            activeOpacity={.8}
                            onPress={ async() => {
                                // console.log(this.props.item.uid,'asadadsdss')
                                const user = firebase.auth().currentUser
                                if (buttonType === 'ADD' || buttonType === 'REQUESTED') {
                                    await firestore()
                                        .collection('chums')
                                        .doc(user.uid)
                                        .update({
                                            chumpsRequest: buttonType === 'REQUESTED' ? firestore.FieldValue.arrayRemove(this.props.item.uid) : firestore.FieldValue.arrayUnion(this.props.item.uid),

                                        });
                                    await firestore()
                                        .collection('chums')
                                        .doc(this.props.item.uid)
                                        .update({
                                            myChams:  buttonType === 'REQUESTED' ? firestore.FieldValue.arrayRemove(user.uid) :firestore.FieldValue.arrayUnion(user.uid),
                                        });
                                }
                                //     else if (buttonType==='REQUESTED'){
                                //     firestore()
                                //         .collection('chums')
                                //         .doc(user.uid)
                                //         .update({
                                //             chumpsRequest:  firestore.FieldValue.arrayUnion(this.props.item.uid),

                                //         });
                                //     firestore()
                                //         .collection('chums')
                                //         .doc(this.props.item.uid)
                                //         .update({
                                //             myChams: firestore.FieldValue.arrayUnion( user.uid) ,
                                //         });


                                // }

                            }}
                        >
                            <View style={styles.shadowButton}>
                                {buttonType != 'CHUM' ? (<Text style={buttonType == 'ADD' ? styles.addButton : buttonType == 'REQUESTED' ? styles.requestedButton : buttonType == 'ACCEPT' ? styles.requestedButton : buttonType == 'DECLINE' ? styles.declineButton : styles.declineButton}>
                                    {buttonType == 'ADD' ? 'ADD' : buttonType == 'REQUESTED' ? 'Requested' : buttonType == 'ACCEPT' ? 'Accept' : buttonType == 'DECLINE' ? 'Decline' : 'Rejected'}
                                </Text>) : (null)}
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
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10

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
    addButton: {
        fontWeight: 'bold',
        fontSize: 12,
        width: 89,
        height: 20,
        lineHeight: 18,
        backgroundColor: '#0A63EB',
        color: 'white',
        textAlign: "center",
        borderRadius: 10,
        overflow: 'hidden'

    },
    requestedButton: {
        fontWeight: '500',
        fontSize: 12,
        width: 89,
        height: 20,
        lineHeight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        color: 'black',
        textAlign: "center",

    },
    declineButton: {
        fontWeight: 'bold',
        fontSize: 12,
        width: 89,
        height: 20,
        lineHeight: 20,
        borderRadius: 10,
        backgroundColor: 'red',
        color: 'white',
        textAlign: "center",
        overflow: 'hidden'
    }



})