import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NearChumsFlatList from "./NearChumsFlatList";

export default class NearChumView extends Component {
    render() {
        return (
            <>
            {
                <View style={[this.props.style ?? {}, styles.container]}>
                    <Text style={styles.title}>
                        Chums near you
                    </Text>
                    <NearChumsFlatList style={styles.list}/>
                    <TouchableOpacity style={styles.moreButton}>
                        <Text style={styles.moreButtonTxt}>
                            see more
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
        // flex: 1,
        // flexDirection: 'column',
        height: 232,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#0352F7',
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 15
    },  
    list: {
        paddingHorizontal: 44
    },
    moreButton: {
        width: 88,
        height: 18,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#0352F7',
        justifyContent: 'center',
        marginTop: 10,
    },
    moreButtonTxt: {
        fontWeight: '500',
        fontSize: 10,
        color: '#0352F7',
        textAlign: 'center'
    }
})