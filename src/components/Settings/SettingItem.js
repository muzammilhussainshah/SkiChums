import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class SettingItem extends Component {
    render() {
        let type = this.props.type;
        return (
            <>
            {
                <View style={styles.container}>
                    <View style={styles.hContainer}>
                        {type == 'profile' ? (<Image source={require("../../assets/Settings/setting-profile.png")} style={styles.logger}/>) : type == 'session' ? (<Image source={require("../../assets/Settings/settings-session.png")} style={styles.logger}/>  ) : type == 'terms' ? (<Image source={require("../../assets/Settings/settings-terms.png")} style={styles.logger}/>  ) : (<Image source={require("../../assets/Settings/settings-privacy.png")} style={styles.logger}/>)}
                                              
                        <Text style={styles.title}> {type == 'profile' ? 'My profile' : type == 'session' ? 'Sessions' : type == 'terms' ? 'Terms and Conditions' : type == 'privacy' ? 'Privacy' : 'Logout'} </Text>
                        <Image source={require("../../assets/Settings/blue-chevron-right.png")} style={styles.chevron}/>
                    </View>
                    <View style={styles.separator}/>
                </View>
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 42,
        height: 52
    },
    hContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    logger: {
        width: 13,
        height: 13,
    },
    chevron: {
        width: 7.5,
        height: 15,
    },
    title: {
        paddingLeft: 9,
        color: 'black',
        fontSize: 15,
        flex: 1,
    },
    separator: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#035BF8',
        marginTop: 8
    }
})