import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SCGradientButton from "../SCGradientButton";
import SettingSocialConnectButton from "./SettingSocialConnectButton";

export default class SettingProfileSocialConnectionVIew extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Social Media
                </Text>
                <View style={styles.rightContainer}>
                    <View style={styles.socialContainer}>
                        <Image source={require("../../assets/icons/ic_facebook.png")} style={styles.socialIcon} />
                        <Text style={styles.socialTxt}>
                            Facebook
                        </Text>
                        <SettingSocialConnectButton />
                    </View>
                    <View style={styles.socialContainer}>
                        <Image source={require("../../assets/icons/ic_instagram.png")} style={styles.socialIcon} />
                        <Text style={styles.socialTxt}>
                            Instagram
                        </Text>
                        <SettingSocialConnectButton />
                    </View>
                </View>
                {/* <View style={{ flex: 1 }}> */}

                {/* </View> */}
                <SCGradientButton
                    buttonTitle={`Save Changes`}
                    onClick={async () => {
                        await this.props.updateProfile()
                        this.props.onClose()
                    }}
                    style={styles.saveChangesStyle} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        // alignItems: 'center',
        marginLeft: 26,
        marginRight: 21,

    },

    title: {
        color: 'black',
        fontSize: 12,
        marginTop: 5
    },
    socialIcon: {
        width: 29,
        height: 29
    },
    socialTxt: {
        paddingLeft: 11,
        flex: 1,
        color: 'black',
        fontWeight: '500',
        fontSize: 15
    },
    rightContainer: {
        top: 0,
        position: 'absolute',
        flexDirection: 'column',
        right: 0,
        left: 91,
    },
    socialContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4
    },
    saveChangesStyle: {
        //  position: "absolute", zIndex: 2,
        width: "90%",
        marginTop: '20%',
        alignSelf: 'center',
        // bottom: '10%', 
    },

})