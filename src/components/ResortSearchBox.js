import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class ResortSearchBox extends Component {
    render() {
        return (
            <>
            {
                <View style={[this.props.style ?? {}, styles.container]}>
                    <View style={styles.searchView}>
                        <TouchableOpacity style={styles.blueSearchIcon}>
                            <Image source={require('../assets/icons/ic_blue_search.png')}/>
                        </TouchableOpacity>                        
                    </View>            

                    <Text style={styles.searchBoxTitle}>
                            Where would you like to go?
                    </Text>
                </View>
                
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 36,
        backgroundColor: 'white',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 5},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5
    },
    searchView: {
        position: 'absolute',
        height: 36,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'red',
        left: 0
    },
    blueSearchIcon: {
        position: 'absolute',
        width: 16,
        height: 16,
        paddingRight: 30,
        marginLeft: 17
    },
    searchBoxTitle: {
        color: '#0362F9',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }

})