import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SCReviewItem from "./SCReviewItem";

export default class SCProfileRatingView extends Component {
    render() {
        return (
            <>
            {
                <View style={[this.props.style ?? {}, styles.container]}>
                    <ScrollView style={styles.scrollView}>
                        <SCReviewItem type={'accurate'} rating={4.9}/>
                        <View style={styles.separator}/>
                        <SCReviewItem type={'fun'} rating={3.4}/>
                        <View style={styles.separator}/>
                        <SCReviewItem type={'time'} rating={4.4}/>
                        <View style={styles.separator}/>
                        <SCReviewItem type={'overall'} rating={2.6}/>

                    </ScrollView>

                </View>
                
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    separator: {
        marginTop: 11,
        flex: 1,
        backgroundColor: '#CCCCCC',
        height: 0.5
    }

})