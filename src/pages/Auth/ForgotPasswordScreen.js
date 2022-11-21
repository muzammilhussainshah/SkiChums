import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Touchable } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthFloatingInput from "../../components/Auth/AuthFloatingInput";
import OrLineView from "../../components/Auth/OrLineView";
import SocialLoginBox from "../../components/Auth/SocialLoginBox";

export default class ForgotPasswordScreen extends Component {
   

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
                        Forgot Password
                    </Text>
                    
                    <TouchableOpacity style={styles.back} onPress={this.onLogin}>
                        <Image source={require("../../assets/Auth/ic_chevron_white.png")}/>
                    </TouchableOpacity>
                    
                </View>
                

                <Text style={styles.enterLabel}>
                    Enter your email address
                </Text>
                

                <View style={styles.floatingTxt}>
                    <AuthFloatingInput
                        placeholder={"Email Address"}
                        placeholderTextColor={'#ffffff88'}
                        value={""}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={this.onReset}>
                        <Text style={styles.buttonText}>
                            Reset Password
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={this.onLogin}>
                    <Text style={styles.forgot}>
                        Back to Login
                    </Text>
                </TouchableOpacity>

                <View style={styles.dontHave}>
                    <Text style={styles.already}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={this.onRegister}>
                        <Text style={styles.login}>
                            Register
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

    onReset = () => {
        this.props.navigation.navigate('NewPasswordScreen')
    }

    onLogin = () => {
        this.props.navigation.pop()
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
        // position: 'absolute',
        left: 28,
        top: 44
    }, 
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 123,
        width: '100%',
        // justifyContent: 'center'
    },
    enterLabel: {
        color: '#FFFFFFAA',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 56
    },
    back: {
        // position: 'absolute',
        width: 30,
        height: 30,
        marginLeft: 38,
        // left: 41,
        justifyContent: 'center',
        alignItems: 'center'
    },    
    buttonText: {
        color: '#0249F5',
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center'
    },
    dontHave: {
        flexDirection: 'column',
        marginHorizontal: 42,
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    already: {
        color: '#B9B9B9',
        fontSize: 13
    },
    login: {
        marginTop: 13,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13
    },
    button: {
        backgroundColor: '#D9D9D9',
        // flex: 1,
        marginTop: 20,
        height: 36,
        borderRadius: 18,
        marginHorizontal: 42,
        justifyContent: 'center'
    },  
    forgot: {
        color: 'white',
        fontSize: 13,
        marginTop: 17,
        textAlign: 'center'
    },   
    eye: {
        position: 'absolute',
        right: 44,
        width: 18,
        height: 18,
        bottom: 7,
    },  
    floatingTxt: {
        // height: 73,
        justifyContent: 'center'
        // flex: 1,
        // flexDirection: 'row'
    },
    titleLabel: {
        position: 'absolute',
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        width: '100%'
    }, 
    socialBox: {
        width: '100%',
        height: 40,
        marginTop: 60
    },
    orline: {
        marginTop: 23,
        marginHorizontal: 44
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
