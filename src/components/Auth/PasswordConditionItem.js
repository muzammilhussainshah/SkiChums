import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class PasswordConditionItem extends Component {
    render() {
        let name = this.props.name;
        let distance = this.props.distance;

        return (
            <>
            {
                <View style={[this.props.style ?? [], styles.container]}>
                    <View style={styles.image}>
                        <Image source={require('../../assets/Auth/ic_condition_checked.png')}/>
                    </View>
                    
                    <Text style={styles.text}>
                        Contain 1 number
                    </Text>
                </View>
                
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 13,
        height: 13
    },
   text: {
        paddingHorizontal: 7,
        fontSize: 11,
        color: '#B9B9B9'
   }
    

})