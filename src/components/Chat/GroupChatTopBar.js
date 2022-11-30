import { firebase } from "@react-native-firebase/auth";
import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

export default class GroupChatTopBar extends Component {
    render() {
        const user = firebase.auth().currentUser
        return (
            <View style={[this.props.style ?? {}, styles.container]}>
                <View style={styles.groupNameContainer}>
                    <Text style={styles.groupNameTxt}>
                        {this.props.name ? this.props.name : `Group Chat`}
                    </Text>
                    <FlatList
                        data={this.props.member}
                        horizontal
                        renderItem={({ item, index }) => {
                            let name = item.displayName ? item.displayName : item.email.split('@')[0]
                            if (item.uid == user.uid) name = 'You'
                            return (
                                <Text style={styles.groupMemberTxt}>{name}{index + 1 !== this.props.member.length && ','}</Text>
                            )
                        }
                        }
                        keyExtractor={item => item.uid}
                    />
                </View>
                <TouchableOpacity style={styles.settingIcon} onPress={this.props.onSettings}>
                    <Image source={require("../../assets/icons/ic_settings_blue.png")} style={styles.settingIcon} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: 10
    },

    groupNameContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    groupNameTxt: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
    },
    groupMemberTxt: {
        fontSize: 10,
        color: 'black',
        textAlign: 'center',
    },
    settingIcon: {
        width: 20,
        height: 20
    },
})