import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class OrLineView extends Component {
    render() {
        let name = this.props.name;
        let distance = this.props.distance;

        return (
            <>
            {
                <View style={[this.props.style ?? [], styles.container]}>
                    <View style={styles.line}/>
                    <Text style={styles.text}>
                        or
                    </Text>
                    <View style={styles.line}/>
                </View>
                
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    line: {
        flex: 1,
        backgroundColor: '#FFFFFF88',
        height: 0.5,        
    },
   text: {
    paddingHorizontal: 16,
    fontSize: 13,
    color: '#FFFFFF88'
   }
    

})