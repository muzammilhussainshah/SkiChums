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
        return (
            <View style={[this.props.style ?? {}, styles.container]}>
                <View style={styles.groupNameContainer}>
                    <Text style={styles.groupNameTxt}>
                        Val d'lsere
                    </Text>
                    <FlatList
                        data={this.props.member}
                        horizontal
                        renderItem={({ item, index }) => <Text style={styles.groupMemberTxt}>{item.displayName ? item.displayName : item.email.split('@')[0]}{index + 1 !== this.props.member.length && ','}</Text>}
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