import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class InviteChumButton extends Component {
    render() {
        return (
            <View style={[this.props.style ?? {}, styles.container]}>
                <TouchableOpacity style={styles.buttonView}>
                    <View style={styles.shareIcon}>
                        <Image source={require('../assets/icons/ci_share.png')}/>
                    </View>             

                    <Text style={styles.buttonTitle}>
                        Invite Chums
                    </Text>
                </TouchableOpacity>                    
            </View>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 36,
        backgroundColor: 'white',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#0362F9',
        borderWidth: 1,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 5},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5
    },
    buttonView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shareIcon: {
        position: 'absolute',
        width: 16,
        height: 16,
        paddingRight: 30,
        marginLeft: 17,
        left: 0
    },
    buttonTitle: {
        color: '#0362F9',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }

})