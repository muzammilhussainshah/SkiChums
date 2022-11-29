import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default class ChumInfoView extends Component {
    render() {
        let name = this.props.name;
        let distance = this.props.distance;
        let profilePic = this.props.profilePic;
        return (
            <>
                {
                    <View style={styles.container}>
                        <View style={styles.profileImage}>
                            {profilePic ?
                                <Image source={{ uri: profilePic }} style={styles.profileImage} />
                                :
                                <FontAwesome name="user-circle-o" size={35} color={'gray'} />
                            }
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.chumName}>
                                {name}
                            </Text>
                            <Text style={styles.distance}>
                                {distance ? distance : '37Km'} away
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