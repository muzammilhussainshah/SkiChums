import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class TabButton extends Component {
    render() {
        const selectedStatus = this.props.selectedStatus;
        const buttonTitle = this.props.buttonTitle;

        return (
            <>
            {
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={this.props.onTabBtnClick} 
                        style={styles.button}>
                        <Text style={selectedStatus == true ? styles.selectedButton : styles.normalButton}>
                            {buttonTitle}
                        </Text>
                    </TouchableOpacity>   
                </View>
                
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',    
        alignItems: 'center',
        justifyContent: 'center'  
        
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedButton: {
        borderColor: '#0A63EB',
        borderWidth: 1,        
        fontWeight: 'bold',
        fontSize: 14,
        paddingLeft: 14,
        paddingRight: 14,
        height: 27  ,
        lineHeight: 24,
        borderRadius: 13.5,
        color: '#0A63EB'
    },
    normalButton: {
        borderColor: 'transparent',
        borderWidth: 1,
        fontWeight: 'bold',
        fontSize: 14,
        height: 27,
        lineHeight: 24,
        borderRadius: 13.5,
        color: '#0A63EB'
    }
    

})