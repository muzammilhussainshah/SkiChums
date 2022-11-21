import React, { Component } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

export default class SCSearchBar extends Component {
    render() {
        return (
            <>
            {
                <View style={styles.container}>
                    <View style={styles.searchView}>
                        <TextInput style = {styles.input} placeholder="Search...">
                        </TextInput>
                        <TouchableOpacity style={styles.blueSearchIcon}>
                            <Image source={require('../assets/icons/ic_blue_search.png')}/>
                        </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity style={styles.filterButton}>
                        <Image source={require('../assets/icons/ic_filter_filled.png')}/>
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
    },
    searchView: {
        flex: 1,
        height: 27,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        backgroundColor: '#ECF0F7',
        height: 27,  
        borderRadius: 13.5, 
        paddingLeft: 10,
        marginRight: 5
    },
    filterButton: {
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
    },
    blueSearchIcon: {
        position: 'absolute',
        width: 16,
        height: 16,
        paddingRight: 30,
    }

})