import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class LangIconView extends Component {
    render() {
        let name = this.props.name;
        let distance = this.props.distance;

        return (
            <>
            {
                <View style={styles.container}>
                    <Image source={require('../../assets/icons/ic_sample_lang.png')} style={styles.lang}/>
                </View>
                
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        width: 10,
        height: 10,
        borderRadius: 5,
        alignItems: 'stretch'
    },
    lang: {
        flex: 1,
        width: null,
        height: null
    }
    

})