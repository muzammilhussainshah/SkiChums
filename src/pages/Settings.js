import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import SettingsHeader from "../components/Settings/SettingsHeader";
import ResortSearchBox from '../components/ResortSearchBox';
import SettingsRoundContainer from "../components/Settings/SettingsRoundContainer";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const flex1 = windowHeight / 10
export default class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>

                <SettingsHeader onClose={this.onClose} />
                <View style={{ height: 650, width: '100%'  }}>
                    <SettingsRoundContainer onClose={this.onClose} style={styles.roundContainer} />
                </View>
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
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    roundContainer: {
        flex: 1,
        marginTop: 16,
    }
});
