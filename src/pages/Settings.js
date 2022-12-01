import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import SettingsHeader from "../components/Settings/SettingsHeader";
import ResortSearchBox from '../components/ResortSearchBox';
import SettingsRoundContainer from "../components/Settings/SettingsRoundContainer";

export default class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>

                <SettingsHeader onClose={this.onClose} />
                <SettingsRoundContainer style={styles.roundContainer} />
            </View>
        );
    }

    onClose = () => {
        console.log('onclose', this.props)
        this.props.navigation.pop()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    roundContainer: {
        flex: 1,
        marginTop: 16,
    }
});
