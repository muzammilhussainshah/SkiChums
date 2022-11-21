import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class ChumInviteButton extends Component {
    render() {
        const buttonType = this.props.buttonType;
        return (
            <>
            {
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button}>
                        {/* <View style={[styles.shadowButton, {shadowColor: buttonType}]}> */}
                        <View style={styles.shadowButton}>
                            {buttonType != 'CHUM' ? (<Text style={buttonType == 'ADD' ? styles.addButton : buttonType == 'REQUESTED' ? styles.requestedButton : buttonType == 'ACCEPT' ? styles.requestedButton : buttonType == 'DECLINE' ? styles.declineButton : styles.declineButton}>
                                {buttonType == 'ADD' ? 'ADD' : buttonType == 'REQUESTED' ? 'Requested': buttonType == 'ACCEPT' ? 'Accept' : buttonType == 'DECLINE' ? 'Decline' : 'Rejected'}
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
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5
    },
    addButton: {
        fontWeight: 'bold',
        fontSize: 12,
        width: 89,
        height: 20  ,
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
        height: 20  ,
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
        height: 20  ,
        lineHeight: 20,
        borderRadius: 10,
        backgroundColor: 'red',
        color: 'white',
        textAlign: "center",
        overflow: 'hidden'
    }
    
    

})