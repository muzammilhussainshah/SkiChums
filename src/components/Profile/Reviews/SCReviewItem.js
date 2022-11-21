import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import StarRating from "react-native-star-rating";

export default class SCReviewItem extends Component {
    render() {
        const type = this.props.type;
        let rating = this.props.rating;
        return (
            <>
            {
                <View style={[this.props.style ?? {}, styles.container]}>
                    <Text style={styles.ratingTitle}>
                        {type == 'accurate' ? 'Accurate Skill level' : type == 'fun' ? 'Fun' : type == 'time' ? 'On time' : 'Overall'}                        
                    </Text>
                    <View style={styles.ratingContainer}>
                        <StarRating
                        disabled={true}
                        maxStars={5}
                        starSize={15}
                        fullStarColor={'#035BF8'}
                        rating={rating}/>
                        <Text style={styles.ratingTxt}>
                            (99%)
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
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    ratingTitle: {
        color: 'black',
        fontSize: 14
    },
    ratingContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12
    },
    ratingTxt: {
        color: '#000',
        fontWeight: '400',
        fontSize: 10,
    },
    

})