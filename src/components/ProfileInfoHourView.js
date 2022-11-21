import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class ProfileInfoHourView extends Component {
    render() {
        let type = this.props.type;
        let value = this.props.value;

        return (
            <>
            {
                <View style={styles.container}>
                    <Text style={styles.numberTxt}>
                        {value}
                    </Text>
                    <Text style={styles.stringTxt}>
                        {type == 'session'? 'sessions' : type == 'kilos' ? 'kilometers' : 'hours' }
                    </Text>
                </View>
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    numberTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    stringTxt: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
        color: 'white'
    }

})