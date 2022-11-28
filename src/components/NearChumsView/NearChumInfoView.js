import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import StarRating from "react-native-star-rating";
import ChumLangList from "./ChumLangList";

export default class NearChumInfoView extends Component {
    render() {
        let name = this.props.name;
        let distance = this.props.distance;

        return (
            <>
            {
                <View style={styles.container}>
                    <View style={styles.profileImageContainer}>
                        <Image source={require('../../assets/icons/sample-chum-profile.png')} style={styles.profileImage}/>
                    </View>
                    <Text style={styles.chumName}>
                        {name}
                    </Text>
                    <Text style={styles.level}>
                        Beginner
                    </Text>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        starSize={7}
                        fullStarColor={'#035BF8'}
                        rating={3.5}/>
                    <ChumLangList style={styles.lang}/>
                    <Text style={styles.distance}>
                        {distance} away
                    </Text>
                </View>
                
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    profileImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'stretch'
    },
    profileImage: {
        flex: 1,
        width: null,
        height: null
    }, 
    chumName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 11,
        paddingTop: 10
    },
    level: {
        color: 'black',
        fontSize: 9,
        paddingTop: 2,
        paddingBottom: 4
    },
    lang: {
        paddingTop: 6,
        paddingBottom: 2
    },
    distance: {
        color: 'rgba(0, 0, 0, 0.65)',
        fontSize: 10,
        marginVertical: 3
    }
    

})