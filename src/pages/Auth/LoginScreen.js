import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert
} from 'react-native';

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { TouchableOpacity } from "react-native-gesture-handler";
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { appleAuth } from "@invertase/react-native-apple-authentication";

import AuthFloatingInput from "../../components/Auth/AuthFloatingInput";
import OrLineView from "../../components/Auth/OrLineView";
import SocialLoginBox from "../../components/Auth/SocialLoginBox";
import { ActivityIndicator } from "react-native";

GoogleSignin.configure({ webClientId: '1018017946183-jn3phjtqbtg4cularvofhf6k9337mk7g.apps.googleusercontent.com', });
// META LOGIN
export async function handleMetaLogin(startloading, endLoading) {
    try {

        startloading()
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) throw 'User cancelled the login process';
        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) throw 'Something went wrong obtaining access token';
        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        // Sign-in the user with the credential
        let logInUser = await auth().signInWithCredential(facebookCredential);
        console.log(logInUser, 'logInUserlogInUserlogInUserlogInUser')
        if (Object.keys(logInUser).length > 0) {
            const { additionalUserInfo } = logInUser
            // let fcmToken = await messaging().getToken()
            if (additionalUserInfo.isNewUser === true) {
                let userDatClone = JSON.parse(JSON.stringify(logInUser.user._user));
                firestore()
                    .collection('chums')
                    .doc(userDatClone.uid)
                    .set(userDatClone)
                    .then(() => {
                        endLoading()

                        // firestore().collection('chums').doc(logInUser.user._user.uid).update({ fcmToken: firestore.FieldValue.arrayUnion(fcmToken), });
                    });
            } else {
                endLoading()
                // firestore().collection('chums').doc(logInUser.user._user.uid).update({ fcmToken: firestore.FieldValue.arrayUnion(fcmToken), });
            }
        }
        endLoading()
    } catch (error) {
        endLoading()

    }
}

// GOOGLE LOGIN
export async function handleGoogleLogin(startloading, endLoading) {
    const { idToken } = await GoogleSignin.signIn()
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    try {
        startloading()
        let logInUser = await auth().signInWithCredential(googleCredential)
        if (Object.keys(logInUser).length > 0) {
            const { additionalUserInfo } = logInUser
            // let fcmToken = await messaging().getToken()
            if (additionalUserInfo.isNewUser === true) {
                let userDatClone = JSON.parse(JSON.stringify(logInUser.user._user));
                firestore()
                    .collection('chums')
                    .doc(userDatClone.uid)
                    .set(userDatClone)
                    .then(() => {
                        firestore().collection('chums').doc(logInUser.user._user.uid).update({
                            //  fcmToken: firestore.FieldValue.arrayUnion(fcmToken), 
                            isOnline: true

                        });
                        endLoading()
                    });
            } else {
                firestore().collection('chums').doc(logInUser.user._user.uid).update({
                    // fcmToken: firestore.FieldValue.arrayUnion(fcmToken),
                    isOnline: true
                });
                endLoading()
            }
        }
        endLoading()
    } catch (error) {
        Alert.alert(error.message);
        endLoading()

    }
}

// APPLE LOGIN
export async function handleAppleLogin(startloading, endLoading) {
    try {

        startloading()
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });

        const { identityToken, nonce } = appleAuthRequestResponse;
        const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce,);

        // Sign the user in with the credential
        const logInUser = await auth().signInWithCredential(appleCredential);
        if (Object.keys(logInUser).length > 0) {
            const { additionalUserInfo } = logInUser
            // let fcmToken = await messaging().getToken()
            if (additionalUserInfo.isNewUser === true) {
                let userDatClone = JSON.parse(JSON.stringify(logInUser.user._user));
                firestore()
                    .collection('chums')
                    .doc(userDatClone.uid)
                    .set(userDatClone)
                    .then(() => {
                        firestore().collection('chums').doc(logInUser.user._user.uid).update({
                            isOnline: true
                            // fcmToken: firestore.FieldValue.arrayUnion(fcmToken), 
                        });
                    });
                endLoading()
            } else {
                firestore().collection('chums').doc(logInUser.user._user.uid).update({
                    //  fcmToken: firestore.FieldValue.arrayUnion(fcmToken),
                    isOnline: true

                });
                endLoading()
            }
            endLoading()
        }
    } catch (error) {
        endLoading()

    }
}
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
    render() {
        return (
            <View style={styles.container}>
                {this.state.isLoading &&
                    <View style={{ position: "absolute", zIndex: 2, height: '100%', width: '100%', backgroundColor: 'rgba(10,10,10,0.5)', justifyContent: "center", alignItems: 'center' }}>
                        <ActivityIndicator size="large" />
                    </View>
                }
                <View style={styles.backgroundContainer}>
                    <Image source={require("../../assets/Auth/auth-bg.png")} style={styles.backgroundImage} />
                </View>

                <View style={styles.logo}>
                    <Image source={require("../../assets/icons/white-logo.png")} />
                </View>

                <Text style={styles.registerTxt}>
                    Login
                </Text>

                <SocialLoginBox style={styles.socialBox}
                    handleGoogleLogin={
                        async () => {
                            // this.setState({ isLoading: true })
                            // await handleGoogleLogin()
                            await handleGoogleLogin(() => this.setState({ isLoading: true }), () => this.setState({ isLoading: false }))

                            // this.setState({ isLoading: false })
                        }}
                    handleAppleLogin={async () => {
                        // this.setState({ isLoading: true })
                        // await handleAppleLogin()
                        await handleAppleLogin(() => this.setState({ isLoading: true }), () => this.setState({ isLoading: false }))

                        // this.setState({ isLoading: false })
                    }}
                    handleMetaLogin={async () => {
                        // this.setState({ isLoading: true })
                        await handleMetaLogin(() => this.setState({ isLoading: true }), () => this.setState({ isLoading: false }))
                        // this.setState({ isLoading: false })
                    }}
                />
                <OrLineView style={styles.orline} />

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
                        <Image source={require("../../assets/Auth/ic_eye_slashed.png")} />
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
            this.setState({ isLoading: true, })
            auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(async (logInUser) => {
                    if (Object.keys(logInUser).length > 0) {
                        const { additionalUserInfo } = logInUser

                        // let fcmToken = await messaging().getToken()
                        let userDatClone = JSON.parse(JSON.stringify(logInUser.user._user));
                        if (additionalUserInfo.isNewUser === true) {
                            firestore()
                                .collection('chums')
                                .doc(userDatClone.uid)
                                .set(userDatClone)
                                .then(() => {
                                    firestore()
                                        .collection('chums')
                                        .doc(logInUser.user._user.uid)
                                        .update({
                                            isOnline: true
                                            // fcmToken: firestore.FieldValue.arrayUnion(fcmToken),
                                        });
                                });
                        } else {
                            firestore()
                                .collection('chums')
                                .doc(userDatClone.uid)
                                .update({
                                    isOnline: true
                                    // fcmToken: firestore.FieldValue.arrayUnion(fcmToken),
                                });
                        }
                    }
                    this.setState({
                        isLoading: false,
                        email: '',
                        password: '',
                        confirmPassword: ''
                    })
                    console.log('User sign in successfully!',)
                })
                .catch(error => {
                    Alert.alert(error.message);
                });
        }
    }
    checkToken = async () => {
        // const fcmToken = await messaging().getToken();
        // if (fcmToken) {
        //     console.log(fcmToken);
        // }
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
    terms: {
        marginTop: 15,
        marginHorizontal: 42,
        alignItems: 'center',
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
    floatingTxt: { justifyContent: 'center' },
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


