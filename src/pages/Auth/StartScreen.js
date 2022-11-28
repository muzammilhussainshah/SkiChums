import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Touchable } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

export default class StartScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backgroundContainer}>
                <Image source={require("../../assets/Auth/launch_bg.png")} style={styles.backgroundImage}/>
                </View>
                
                <TouchableOpacity style={styles.startContainer} onPress={this.onStart}>
                    <Text style={styles.startTxt}>
                        get started
                    </Text>
                </TouchableOpacity>

         </View>
          );  
    }
    
    onStart = () => {
        console.log('onclose')
        this.props.navigation.navigate('Register')
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        flexDirection: "row",
        alignItems: "stretch"
    },  
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    startContainer: {
        width: 149,
        height: 33,
        backgroundColor: '#D9D9D9',
        borderRadius: 16.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startTxt: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#0373FB',
        textAlign: 'center'
    }
});
