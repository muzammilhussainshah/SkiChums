import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class SocialLoginBox extends Component {
    render() {
        let name = this.props.name;
        let distance = this.props.distance;

        return (
            <>
            {
                <View style={[this.props.style ?? [], styles.container]}>
                    <View style={styles.socialContainer}>
                        <TouchableOpacity style={styles.meta}>
                            <Image source={require('../../assets/Auth/ic_meta.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.apple} onPress={this.props.handleAppleLogin}>
                            <Image source={require('../../assets/Auth/ic_apple.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.google}>
                            <Image source={require('../../assets/Auth/ic_google.png')}/>
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
        flexDirection: 'row',
    },
    socialContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center'
    },
    meta: {
        backgroundColor: '#337FFF',
        width: 100,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2
    }, 
    apple: {
        backgroundColor: '#A2AAAD',
        width: 100,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2
    }, 
    google: {
        backgroundColor: '#FF3D00',
        width: 100,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2
    }, 
    chumName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    },
    distance: {
        color: 'rgba(0, 0, 0, 0.65)',
        fontSize: 10
    }
    

})