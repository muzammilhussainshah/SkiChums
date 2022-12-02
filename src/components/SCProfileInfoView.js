import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SCProfileAboutView from "./SCProfileAboutView";
import SCProfileChumList from "./SCProfileChumList";
import SCProfileCompletenessView from "./SCProfileCompletenessView";
import SCProfileLocationView from "./SCProfileLocationView";

export default class SCProfileInfoView extends Component {
    render() {
        return (
            <>
                {
                    <View style={[this.props.style ?? {}, styles.container]}>
                        <ScrollView style={styles.scrollView}>
                            <SCProfileCompletenessView></SCProfileCompletenessView>
                            <View style={styles.separator} />
                            <SCProfileAboutView style={styles.about}></SCProfileAboutView>
                            <View style={styles.experience}>
                                <SCProfileLocationView currentUser={this.props.currentUser} type={'Location'}></SCProfileLocationView>
                                <SCProfileLocationView currentUser={this.props.currentUser} type={'Level'}></SCProfileLocationView>
                                <SCProfileLocationView currentUser={this.props.currentUser} type={'Speaks'}></SCProfileLocationView>
                            </View>
                            <View style={styles.social}>
                                <TouchableOpacity style={styles.socialIcon}>
                                    <Image source={require('../assets/icons/ic_facebook.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.socialIcon}>
                                    <Image source={require('../assets/icons/ic_instagram.png')} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.mychums}>
                                My Chums
                            </Text>
                            <SCProfileChumList></SCProfileChumList>
                            <TouchableOpacity style={styles.moreButton}
                                onPress={() => {
                                    // Chums
                                    this.props.navigate.navigate('Chums')
                                }}
                            >
                                <Text style={styles.moreTxt}>
                                    see more
                                </Text>
                            </TouchableOpacity>
                        </ScrollView>

                    </View>

                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        flex: 1,

    },
    separator: {
        marginTop: 13,
        backgroundColor: '#CCCCCC',
        height: 0.5
    },
    experience: {
        marginTop: 14,
        marginHorizontal: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    about: {
        marginTop: 12
    },
    social: {
        marginTop: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    socialIcon: {
        marginHorizontal: 5,
        width: 29,
        height: 29
    },
    mychums: {
        marginTop: 20,
        color: '#0A63EB',
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center'
    },
    moreButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    moreTxt: {
        fontSize: 10,
        textAlign: "center",
        borderWidth: 1,
        borderColor: '#0352F7',
        width: 88,
        height: 18,
        borderRadius: 9,
        lineHeight: 14
    }

})