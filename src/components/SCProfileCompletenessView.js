import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import * as Progress from 'react-native-progress';

export default class SCProfileCompletenessView extends Component {
    render() {
        return (
            <>
            {
                <View style={[this.props.style ?? {}, styles.container]}>
                    <Text style={styles.title}>
                        Profile 70% complete
                    </Text>
                    <Progress.Bar progress={0.7} width={300} style={styles.proressBar}></Progress.Bar>
                </View>
                
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    proressBar: {
      marginTop: 9,  
    },
    title: {
        fontWeight: '500',
        fontSize: 10,
        color: 'black'
        
    }
})