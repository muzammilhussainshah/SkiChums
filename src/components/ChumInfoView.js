import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class ChumInfoView extends Component {
    render() {
        let name = this.props.name;
        let distance = this.props.distance;
        let id = this.props.id;
        return (
            <>
            {
                <View style={styles.container}>
                    <View style={styles.profileImage}>
                        {id == 1 ? (<Image source={require('../assets/icons/sample-chum-profile.png')} style={styles.profileImage}/>) : id == 2 ? (<Image source={require('../assets/icons/sample-chum-profile1.png')} style={styles.profileImage}/>) : (<Image source={require('../assets/icons/sample-chum-profile2.png')} style={styles.profileImage}/>) }
                        
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.chumName}>
                            {name}
                        </Text>
                        <Text style={styles.distance}>
                            {distance} away
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
        flex: 1,
        flexDirection: 'row',
    },
    infoContainer: {
        paddingLeft: 13,
        flex: 1,
        flexDirection: 'column'
    },
    profileImage: {
        width: 35,
        height: 35,
        borderRadius: 17.5
    },
    chumName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    },
    distance: {
        color: 'rgba(0, 0, 0, 0.65)',
        fontSize: 10
    }
    

})