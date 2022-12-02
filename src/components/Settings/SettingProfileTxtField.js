import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import GooglePlaceInput from '../../components/Settings/GooglePlaceInput';
import AntDesign from 'react-native-vector-icons/AntDesign'
import SCColors from "../../styles/SCColors";
export default class SettingProfileTxtField extends Component {
    render() {
        // console.log(this?.props?.value.toLocaleDateString("en-US"), 'valuevaluevaluevalue')
        let type = this.props.type;
        return (
            <>
                {
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            {type == 'first' ? 'First name' : type == 'last' ? 'Last name' : type == 'dob' ? 'Date of birth' : type == 'location' ? 'Location' : type == 'tos' ? 'Type of sport' : type == 'los' ? 'Level of sport' : type == 'lang' ? 'Languages' : type == 'bio' ? 'Bio' : ''}
                        </Text>
                        {
                            type === 'location' ?
                                <GooglePlaceInput />
                                :

                                (type === 'dob' || type === 'tos' || type === 'los') ?

                                    <View
                                        style={{
                                            width: '75%',
                                            left: 20
                                        }}
                                    >
                                        <TouchableOpacity onPress={this.props.callBack} style={{ flexDirection: (type === 'tos' || type === 'los') ? 'row' : "column", justifyContent: (type === 'los' || type === 'tos') ? 'space-between' : 'flex-start' }}>
                                            <Text style={
                                                { color: this?.props?.value ? 'black' : '#a9a9a9' }
                                            }>
                                                {
                                                    (type === 'tos' || type === 'los') ?
                                                        this?.props?.value ? this?.props?.value : 'Type of sport'
                                                        :
                                                        this?.props?.value ?
                                                            this?.props?.value?.toLocaleDateString("en-US") :
                                                            `Date of birth`
                                                }
                                            </Text>
                                            {(type === 'tos' || type === 'los') &&
                                                <AntDesign
                                                    name='down'
                                                    size={10}
                                                    color={SCColors.gradientRight} />}
                                        </TouchableOpacity>
                                        <View style={styles.bottomLine}
                                        />
                                    </View>
                                    :
                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            style={styles.input} placeholder={type == 'first' ? 'First name' : type == 'last' ? 'Last name' : type == 'dob' ? 'Date of birth' : type == 'location' ? 'Location' : type == 'tos' ? 'Type of sport' : type == 'los' ? 'Level of sport' : type == 'lang' ? 'Languages' : type == 'bio' ? 'Bio' : ''} />
                                        <View style={styles.bottomLine} />
                                    </View>
                        }

                    </View>
                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 26,
        marginRight: 21,
        height: 46
    },

    title: {
        color: 'black',
        fontSize: 12
    },
    inputContainer: {
        position: 'absolute',
        flexDirection: 'column',
        right: 0,
        left: 91
    },
    bottomLine: {
        backgroundColor: '#0A63EB',
        height: 0.5,
        width: '100%'
    },
    input: {
        flex: 1
    }

})