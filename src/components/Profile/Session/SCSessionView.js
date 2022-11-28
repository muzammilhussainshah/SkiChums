import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class SCSessionView extends Component {
    render() {
        return (
            <>
            {
                <View style={[this.props.style ?? {}, styles.container]}>
                    <ScrollView style={styles.scrollView}>
                        
                    </ScrollView>

                </View>
                
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        flex: 1,
        
    },
    separator: {
        marginTop: 13,
        backgroundColor: '#CCCCCC',
        height: 0.5
    },
    experience: {
        marginTop: 14,
        marginHorizontal: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    about: {
        marginTop: 12
    }, 
    social: {
        marginTop: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    socialIcon: {
        marginHorizontal: 5,
        width: 29,
        height: 29
    },
    mychums: {
        marginTop: 20,
        color: '#0A63EB',
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center'        
    },
    moreButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    moreTxt: {
        fontSize: 10,
        textAlign: "center",
        borderWidth: 1,
        borderColor: '#0352F7',
        width: 88,
        height: 18,
        borderRadius: 9,
        lineHeight: 14
    }

})