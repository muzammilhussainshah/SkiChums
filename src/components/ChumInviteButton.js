import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from '@react-native-firebase/auth'

export default class ChumInviteButton extends Component {
    render() {
        const buttonType = this.props.buttonType;
        const handeRequest = async () => {
            if (buttonType === 'ADD' || buttonType === 'REQUESTED') {
                const user = this.props.user
                if (!user?.chumpsRequest) user.chumpsRequest = []
                let index = user?.chumpsRequest?.findIndex((val) => val.id === this.props.item.uid)
                if (buttonType === 'ADD' || buttonType === 'REQUESTED') {
                    if (index !== -1) user?.chumpsRequest?.splice(index, 1)
                    else user?.chumpsRequest?.push({ status: 'REQUESTED', id: this.props.item.uid })
                }
                if (!this?.props?.item?.myChams) this.props.item.myChams = []
                let indexForMyChums = this?.props?.item?.myChams?.findIndex((val) => val.id === user.uid)
                if (indexForMyChums !== -1) this?.props?.item?.myChams?.splice(indexForMyChums, 1)
                else this?.props?.item?.myChams?.push({ status: 'REQUESTED', id: user.uid })
                firestore().collection('chums').doc(user.uid).update({ chumpsRequest: user.chumpsRequest });
                firestore().collection('chums').doc(this.props.item.uid).update({ myChams: this?.props?.item?.myChams });
            }

        }
        return (
            <>
                {
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button}
                            activeOpacity={.8}
                            onPress={handeRequest}
                        >
                            <View style={styles.shadowButton}>
                                {buttonType != 'CHUMS' ? (<Text style={buttonType == 'ADD' ? styles.addButton : buttonType == 'REQUESTED' ? styles.requestedButton : buttonType == 'ACCEPT' ? styles.requestedButton : buttonType == 'DECLINE' ? styles.declineButton : styles.declineButton}>
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