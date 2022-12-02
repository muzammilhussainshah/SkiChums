import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, Platform, Image, Text, ScrollView } from "react-native";
import SCGradientButton from "../SCGradientButton";
import SettingItem from "./SettingItem";
import SettingProfileSocialConnectionVIew from "./SettingProfileSocialConnectionVIew";
import SettingProfileTxtField from "./SettingProfileTxtField";

export default class SettingProfileContainer extends Component {
    render() {
        return (
            <>

                <ScrollView style={[this.props.style ?? {}, styles.container]}>

                    <View style={styles.header}>
                        <View style={styles.photoView}>
                            <Image source={require("../../assets/icons/sample-chum-profile.png")} style={styles.photo} />
                            <TouchableOpacity>
                                <Text style={styles.changeButton} change profile picture>
                                    change profile picture
                                </Text>
                            </TouchableOpacity>


                        </View>


                        <TouchableOpacity style={styles.back} onPress={this.props.onBackClicked}>
                            <Image source={require("../../assets/Settings/blue-chevron-left.png")} />
                        </TouchableOpacity>
                    </View>



                    <SettingProfileTxtField type={'first'} />
                    <SettingProfileTxtField type={'last'} />
                    <SettingProfileTxtField type={'dob'} />


                    <SettingProfileTxtField type={'location'} />
                    <SettingProfileTxtField type={'tos'} />
                    <SettingProfileTxtField type={'los'} />
                    <SettingProfileTxtField type={'lang'} />
                    <SettingProfileTxtField type={'bio'} />
                    <SettingProfileSocialConnectionVIew />
                    <SCGradientButton
                        buttonTitle={`Save Changes`}
                        onClick={() => alert()}
                        style={styles.saveChangesStyle} />
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    back: {
        position: 'absolute',
        left: 30,
        top: 5,
        width: 30,
        height: 30,
    },
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    changeButton: {
        color: 'black',
        fontSize: 12,
        textDecorationLine: 'underline',
        marginTop: 12,
    },
    photoView: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    photo: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveChangesStyle: { position: "absolute", zIndex: 2, width: "80%", alignSelf: 'center', bottom: '-25%', }

})