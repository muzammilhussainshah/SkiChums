import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import auth from '@react-native-firebase/auth'
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';

import AuthFloatingInput from "../../components/Auth/AuthFloatingInput";
import OrLineView from "../../components/Auth/OrLineView";
import SocialLoginBox from "../../components/Auth/SocialLoginBox";
import {
    handleGoogleLogin,
    handleMetaLogin,
    handleAppleLogin
} from './LoginScreen'

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            passwordSecure: true,
            confirmPasswordSecure: true,
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
                    Register
                </Text>

                <SocialLoginBox style={styles.socialBox}
                    handleGoogleLogin={
                        async () => {
                            this.setState({ isLoading: true })
                            handleGoogleLogin()
                            this.setState({ isLoading: false })
                        }}
                    handleAppleLogin={async () => {
                        this.setState({ isLoading: true })
                        handleAppleLogin()
                        this.setState({ isLoading: false })
                    }}
                    handleMetaLogin={async () => {
                        this.setState({ isLoading: true })
                        handleMetaLogin()
                        this.setState({ isLoading: false })
                    }}
                // handleGoogleLogin={handleGoogleLogin}
                // handleMetaLogin={handleMetaLogin}
                // handleAppleLogin={handleAppleLogin}
                />
                <OrLineView style={styles.orline} />

                <View style={styles.floatingTxt}>
                    <AuthFloatingInput
                        placeholder={"Email Address"}
                        placeholderTextColor={'#ffffff88'}
                        defaultValue={this.state.email}
                        value={this.state.email}

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
                        value={this.state.password}
                        onChangeText={this.handlePasswordChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />
                    <TouchableOpacity style={styles.eye} onPress={this.togglePasswordVisibility}>
                        <Image source={require("../../assets/Auth/ic_eye_slashed.png")} />
                    </TouchableOpacity>

                </View>

                <View style={styles.floatingTxt}>
                    <AuthFloatingInput
                        placeholder={"Confirm Password"}
                        placeholderTextColor={'#ffffff88'}
                        secureTextEntry={this.state.confirmPasswordSecure}
                        defaultValue={this.state.confirmPassword}
                        value={this.state.confirmPassword}
                        onChangeText={this.handleConfirmPasswordChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />
                    <TouchableOpacity style={{ zIndex: 999 }} onPress={this.toggleConfirmPasswordVisibility}>
                        <Image source={require("../../assets/Auth/ic_eye_slashed.png")} style={styles.eye} />
                    </TouchableOpacity>
                </View>

                <View style={styles.terms}>
                    <TouchableOpacity style={styles.termsTick}>
                        <Image source={require("../../assets/Auth/ic_unticked.png")} />
                    </TouchableOpacity>

                    <Text style={styles.termsTxt}>
                        I agree to
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.tac}>
                            Terms and Conditions
                        </Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={this.handleSubmit}>
                        <Text style={styles.buttonText}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.alreadyBox}>
                    <Text style={styles.already}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={this.onLogin}>
                        <Text style={styles.login}>
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
        console.log('onlogin')
        this.props.navigation.navigate('Login')
    }

    emailValidate = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        return expression.test(String(email).toLowerCase())
    }

    togglePasswordVisibility = () => {
        if (this.state.passwordSecure == true) {
            this.setState({ passwordSecure: false });
        } else {
            this.setState({ passwordSecure: true })
        }
    };

    toggleConfirmPasswordVisibility = () => {
        if (this.state.confirmPasswordSecure == true) {
            this.setState({ confirmPasswordSecure: false });
        } else {
            this.setState({ confirmPasswordSecure: true })
        }
    };

    handleEmailChange = (text) => {
        console.log('email change: ', text)
        this.state.email = text
    };

    handlePasswordChange = (text) => {
        this.state.password = text
    };

    handleConfirmPasswordChange = (text) => {
        this.state.confirmPassword = text
    };

    handleSubmit = async () => {
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Please enter details to sign up!')
        } else if (this.state.password !== this.state.confirmPassword) {
            Alert.alert('Invalid confirm password.')
        } else if (this.state.password === '') {
            Alert.alert('Please enter your password.')
        } else if (this.state.email === '') {
            Alert.alert('Please enter your email.')
        } else {
            this.setState({
                isLoading: true,
            })

            auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
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
                                            // fcmToken: firestore.FieldValue.arrayUnion(fcmToken),
                                            isOnline: true,
                                        });
                                });
                        } else {
                            firestore()
                                .collection('chums')
                                .doc(userDatClone.uid)
                                .update({
                                    // fcmToken: firestore.FieldValue.arrayUnion(fcmToken),
                                    isOnline: true,
                                });

                        }
                    }
                    this.setState({
                        isLoading: false,
                        email: '',
                        password: '',
                        confirmPassword: ''
                    })
                })
                .catch(error => {
                    this.setState({ isLoading: false, })
                    if (error.code === 'auth/email-already-in-use') {
                        Alert.alert('That email address is already in use!');
                    } else if (error.code === 'auth/invalid-email') {
                        Alert.alert('That email address is invalid!');
                    } else {
                        Alert.alert(error.message);
                    }

                });
        }
        console.log("user signed up!");
    };
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
    alreadyBox: {
        flexDirection: 'row',
        marginHorizontal: 42,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    already: {
        color: '#B9B9B9',
        fontSize: 13
    },
    login: {
        paddingLeft: 5,
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
    termsTxt: {
        paddingLeft: 8,
        color: 'white',
        fontSize: 11
    },
    tac: {
        color: 'white',
        fontSize: 11,
        textDecorationLine: 'underline'
    },
    termsTick: {
        width: 10,
        height: 10
    },
    eye: {
        position: 'absolute',
        right: 44,
        width: 18,
        height: 18,
        bottom: 7,
        zIndex: 999
    },
    floatingTxt: {
        justifyContent: 'center',
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
