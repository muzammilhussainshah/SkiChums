import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Touchable ,Alert} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthFloatingInput from "../../components/Auth/AuthFloatingInput";
import OrLineView from "../../components/Auth/OrLineView";
import SocialLoginBox from "../../components/Auth/SocialLoginBox";
import auth from '@react-native-firebase/auth'
 import { GoogleSignin } from '@react-native-google-signin/google-signin';
 import firestore from '@react-native-firebase/firestore';

        
        

GoogleSignin.configure({
    // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '1018017946183-2427j2vjprc6m7kgo40b22s72l1vvogi.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    // hostedDomain: '', // specifies a hosted domain restriction
    // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    // accountName: '', // [Android] specifies an account name on the device that should be used
    // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });
export default class LoginScreen extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: '',
          passwordSecure: true,
          isLoading: false,
          errorMessage: ''
        }
      }
      componentDidMount(){
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backgroundContainer}>
                    <Image source={require("../../assets/Auth/auth-bg.png")} style={styles.backgroundImage}/>
                </View>
                
                <View style={styles.logo}>
                <Image source={require("../../assets/icons/white-logo.png")}/>
                </View>
                
                <Text style={styles.registerTxt}>
                    Login
                </Text>

                <SocialLoginBox style={styles.socialBox} 
                handleGoogleLogin={this.handleGoogleLogin}
                handleAppleLogin={this.handleAppleLogin}
                />
                <OrLineView style={styles.orline}/>

                <View style={styles.floatingTxt}>
                    <AuthFloatingInput
                        placeholder={"Email Address"}
                        placeholderTextColor={'#ffffff88'}
                        defaultValue={this.state.email}
                        onChangeText={this.handleEmailChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />
                </View>
                
                <View style={styles.floatingTxt}>
                    <AuthFloatingInput
                        placeholder={"Password"}
                        placeholderTextColor={'#ffffff88'}
                        secureTextEntry={this.state.passwordSecure} 
                        defaultValue={this.state.password}
                        onChangeText={this.handlePasswordChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />
                    <TouchableOpacity style={styles.eye}>
                        <Image source={require("../../assets/Auth/ic_eye_slashed.png")}/>
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={this.onLogin}>
                        <Text style={styles.buttonText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={this.onForgot}>
                    <Text style={styles.forgot}>
                        Forgot Password?
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
    
    handleEmailChange = (text) => {
        console.log('email change: ', text)
        this.state.email = text
    };

    handlePasswordChange = (text) => {
        this.state.password = text
    };

    onFocus = () => {

    }

    onBlur = () => {

    }

    onForgot = () => {
        this.props.navigation.navigate('ForgotPassword')
    }

    onRegister = () => {
        console.log('onclose')
        this.props.navigation.pop()
        
    }

    onLogin = () => { // email login
        console.log('on login');
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Please enter details to sign in!')
        } else if (this.state.password === '') {
            Alert.alert('Please enter your password.')
        } else if (this.state.email === '') {
            Alert.alert('Please enter your email.')
        } else {
            this.setState({
                isLoading: true,
            })

            auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                console.log('User sign in successfully!')
                this.setState({
                    isLoading: false,
                    email: '', 
                    password: '',
                    confirmPassword: ''
                })
            })
            .catch(error => {
                Alert.alert(error.message);
            });
        }
    }

    // apple
    handleAppleLogin = async() => {
        console.log('apple login') 
    }
    handleGoogleLogin = async() => {
        
        const {idToken}    =await GoogleSignin.signIn()
        const googleCredential=auth.GoogleAuthProvider.credential(idToken)

        console.log(googleCredential,'logInUser')
        try {
        let logInUser=await auth().signInWithCredential(googleCredential)
    if(Object.keys(logInUser).length>0){
     const {additionalUserInfo}=logInUser
     if(additionalUserInfo.isNewUser===true){
     firestore()
     .collection('chums')
     .doc(logInUser.user._user.uid)
     .set(logInUser.user._user)
     .then(() => {
       console.log('User added!');
     });
        }
        }
} catch (error) {
                console.log(error,'logInUserlogInUser')
                // console.log(error,'errorerror')
            //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            //     // user cancelled the login flow
            //   } else if (error.code === statusCodes.IN_PROGRESS) {
            //     // operation (e.g. sign in) is in progress already
            //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            //     // play services not available or outdated
            //   } else {
            //     // some other error happened
            //   }
            }
        //   };
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
    terms: {
        marginTop: 15,
        marginHorizontal: 42,
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row'
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
    registerTxt: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 123
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




// if(uid1 > uid2){
//     return uid1+uid2

// }
// else{
//     return uid2 + uid1 
// }