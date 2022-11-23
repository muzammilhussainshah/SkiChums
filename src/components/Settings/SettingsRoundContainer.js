import React, { Component } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SettingContainer from "./SettingContainer";
import SettingItem from "./SettingItem";
import SettingProfileContainer from "./SettingProfileContainer";
import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from '@react-native-firebase/auth'
import messaging from '@react-native-firebase/messaging';

export default class SettingsRoundContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            viewMode: 'setting'
        }
    }

    render() {
        let viewMode = this.props.viewMode;
        return (
            <View style={[this.props.style ?? {}, styles.container]}>
                {this.state.viewMode == 'setting' ? (<SettingContainer onProfileClicked={this.onProfileClicked} onLogout={this.onLogout} onSessionClicked={this.onSessionClicked} />) : (<SettingProfileContainer onBackClicked={this.onProfileBackClicked} />)}

            </View>
        )
    }

    onProfileClicked = () => {
        this.setState({ viewMode: 'profile' })
    }

    onProfileBackClicked = () => {
        console.log('back clicked')
        this.setState({ viewMode: 'setting' })
    }

    onSessionClicked = () => {
        this.setState({ viewMode: 'session' })
    }

    onLogout = async () => {
        const user = firebase.auth().currentUser
        let fcmToken = await messaging().getToken()
        // await
         firestore()
            .collection('chums')
            .doc(user.uid)
            .update({
                fcmToken: firestore.FieldValue.arrayRemove(fcmToken),
            });
        auth().signOut()
            .then(() => console.log('User signed out!'));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        borderTopLeftRadius: 46,
        borderTopRightRadius: 46, shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 2,
        backgroundColor: Platform.OS == 'android' ? '#0000' : '#EBF2FF',
        paddingTop: 44

    },
    item: {
        height: 52,
        flex: 1,
        backgroundColor: 'blue'
    }

})