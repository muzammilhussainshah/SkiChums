import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class LogoAndSettingsBar extends Component {
    render() {
        return (
            <>
            {
                <View style={styles.container}>
                    <Image source={require("../assets/icons/white-logo.png")} resizeMode="cover" style={styles.whiteLogoer}/>
                    <TouchableOpacity style={styles.settingsIcon} onPress={this.props.onSettingsBtnClick} >
                        <Image source={require("../assets/icons/settings.png")}/>
                    </TouchableOpacity>
                    
                </View>
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 44
    },
    whiteLogoer: {
        width: 59,
        aspectRatio: 1,
        marginLeft: 28
    },
    settingsIcon: {
        width: 25,
        aspectRatio: 1,
        marginRight: 28,
        marginTop: 10
    }
})