import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Touchable } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthFloatingInput from "../../components/Auth/AuthFloatingInput";
import OrLineView from "../../components/Auth/OrLineView";
import PasswordConditionItem from "../../components/Auth/PasswordConditionItem";
import SocialLoginBox from "../../components/Auth/SocialLoginBox";

export default class NewPasswordLogin extends Component {
   

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backgroundContainer}>
                    <Image source={require("../../assets/Auth/auth-bg.png")} style={styles.backgroundImage}/>
                </View>
                
                <View style={styles.logo}>
                    <Image source={require("../../assets/icons/white-logo.png")}/>
                </View>
                
                <View style={styles.title}>
                    
                    <Text style={styles.titleLabel}>
                        New Password
                    </Text>
                    
                    <TouchableOpacity style={styles.back} onPress={this.onLogin}>
                        <Image source={require("../../assets/Auth/ic_chevron_white.png")}/>
                    </TouchableOpacity>
                    
                </View>
                

                <Text style={styles.enterLabel}>
                    Your new password has been confirmed.{"\n"}Please login using your new credentials
                </Text>
                

                <View style={styles.button}>
                    <TouchableOpacity onPress={this.onLogin}>
                        <Text style={styles.buttonText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>

         </View>
          );  
    }
    
    onFocus = () => {

    }

    onBlur = () => {

    }

    onLogin = () => {
        this.props.navigation.pop(3)
    }

    onRegister = () => {
        console.log('onclose')
        this.props.navigation.pop()
        
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    logo: {
        width: 59,
        height: 59,
        left: 28,
        top: 44
    }, 
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 123,
        width: '100%',
    },
    enterLabel: {
        color: '#FFFFFFAA',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 56
    },
    back: {
        width: 30,
        height: 30,
        marginLeft: 38,
        justifyContent: 'center',
        alignItems: 'center'
    },    
    buttonText: {
        color: '#0249F5',
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center'
    }, 
    button: {
        backgroundColor: '#D9D9D9',
        // flex: 1,
        marginTop: 34,
        height: 36,
        borderRadius: 18,
        marginHorizontal: 42,
        justifyContent: 'center'
    },  
       
    titleLabel: {
        position: 'absolute',
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        width: '100%'
    },    
    backgroundContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        flexDirection: "row",
        alignItems: "stretch"
    },  
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    startContainer: {
        width: 149,
        height: 33,
        backgroundColor: '#D9D9D9',
        borderRadius: 16.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startTxt: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#0373FB',
        textAlign: 'center'
    }
});
