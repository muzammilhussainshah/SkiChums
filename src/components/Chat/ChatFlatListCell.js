import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image
} from "react-native";

export default class ChatFlatListCell extends Component {
    render() {
        let name = this.props.name;
        let last_msg = this.props.last_msg;
        let time = this.props.time;
        let id = this.props.id;

        return (
            <View style={styles.container}>
                <View style={styles.profileImage}>
                    {this.props.profilePic ?
                        <Image source={
                            { uri: this.props.profilePic }
                        } style={styles.profileImage} />
                        :
                        <Image source={require('../../assets/icons/sample-chum-profile2.png')} style={styles.profileImage} />
                    }
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.chumName}>
                        {name}
                    </Text>
                    <Text style={styles.message}>
                        {last_msg}
                    </Text>
                </View>
                <Text style={styles.message}>
                    {time}
                </Text>
            </View>
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
    message: {
        color: 'black',
        fontSize: 10,
        paddingTop: 3
    }


})