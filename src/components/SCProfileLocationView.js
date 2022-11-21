import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default class SCProfileLocationView extends Component {
    render() {
        const type = this.props.type;
        return (
            <>
            {
                <View style={[this.props.style ?? {}, styles.container]}>
                    <Text style={styles.location}>
                        {type == 'Location' ? 'Location' : type == 'Level' ? 'Ski Levels' : 'Speaks'}
                    </Text>
                    <View style={styles.address}>
                        <View style={styles.flag}>
                            <Image source={require('../assets/icons/sample-switzerland-flag.png')}/>
                        </View>
                        <Text style={styles.addressTxt}>
                            address0
                        </Text>
                    </View>
                </View>
                
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
    },
    location: {
        textAlign: 'center',
        color: '#0245F5',
        fontWeight: '500',
        fontSize: 12        
    },
    address: {
        marginTop: 4,
        flex: 1,
        flexDirection: 'row'
    },
    flag: {
        width: 15,
        height: 15
    },
    addressTxt: {
        paddingLeft: 6,
        color: 'black',
        fontSize: 11,
        textAlign: 'center'
    }

})