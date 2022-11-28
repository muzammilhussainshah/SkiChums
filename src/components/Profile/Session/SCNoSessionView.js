import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SCGradientButton from "../../SCGradientButton";

export default class SCNoSessionView extends Component {
    render() {
        let isSession = this.props.isSession ?? true
        return (
            <View style={[this.props.style ?? {}, styles.container]}>
                <Text style={styles.noContent}>
                    {isSession ? "No session start yet" : "No reviews yet"}
                </Text>
                <SCGradientButton style={styles.start} buttonTitle="Start a live session" onClick={this.props.onStart}/>
                {/* <TouchableOpacity style={styles.start} onPress={this.props.onStart}>
                    
                </TouchableOpacity> */}
            </View>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    
    noContent: {
        marginTop: 30,
        fontSize: 13,
        color: 'black',
        textAlign: 'center'
    },
    start: {
        marginHorizontal: 10,
        height: 32,
        borderRadius: 16,
        marginTop: 43
    }

})