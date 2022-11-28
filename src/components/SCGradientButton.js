import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import SCColors from "../styles/SCColors";

export default class SCGradientButton extends Component {
    render() {
        let buttonTitle = this.props.buttonTitle ?? "Unlock all premium features"
        return (
            <View style={[this.props.style ?? {}, styles.container]}>
                <View style={styles.gradientContainer}>
                    <TouchableOpacity style={styles.buttonView} onPress={this.props.onClick}>
                        <LinearGradient start={{x: 1.0, y: 0.5}} end={{x: 0.0, y: 0.5}} colors={[SCColors.gradientRight, SCColors.gradientLeft]} style={styles.linearGradient}>
                            <Text style={styles.buttonTitle}>
                                {buttonTitle}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>             
                </View>

            </View>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 32,
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 5},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    gradientContainer: {
        flex: 32,
        overflow: 'hidden'
    },
    linearGradient: {
        width: '100%',
        borderRadius: 16,
        height: 32,
        overflow: 'hidden',
        justifyContent: 'center'
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0
    },
    buttonTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    }

})