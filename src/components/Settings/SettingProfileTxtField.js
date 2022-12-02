import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import GooglePlaceInput from '../../components/Settings/GooglePlaceInput';
import CountryFlag from "react-native-country-flag";

import Entypo from 'react-native-vector-icons/Entypo'
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
                                // <View style={{backgroundColor:'red',height:'90%',marginBottom:'5%',left:40,width:'76%'}}></View>
                                :
                                (type === 'dob' || type === 'tos' || type === 'los' || type === 'lang') ?

                                    <View
                                        style={{
                                            width: '75%',
                                            left: type === 'dob' ? 20 : type === 'lang' ? 30 : 15
                                        }}
                                    >
                                        <TouchableOpacity
                                            onPress={this.props.callBack}
                                            style={{ flexDirection: (type === 'tos' || type === 'los') ? 'row' : "column", justifyContent: (type === 'los' || type === 'tos') ? 'space-between' : 'flex-start' }}>

                                            {type === 'lang' ?
                                                this?.props?.value.length > 0 ?
                                                    <FlatList
                                                        data={this?.props?.value}
                                                        horizontal
                                                        renderItem={({ item, index }) => {
                                                            return (
                                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                    <TouchableOpacity
                                                                        onPress={this.props.callBack}
                                                                    >
                                                                        <TouchableOpacity onPress={() => this.props.removeLanguage(item)}>
                                                                            <AntDesign name='close' size={10} color='black' style={{ alignSelf: "flex-end" }} />
                                                                        </TouchableOpacity>
                                                                        <CountryFlag isoCode={item} style={{ borderRadius: 10, height: 20, marginHorizontal: 5, marginBottom: 5, width: 20 }} />
                                                                    </TouchableOpacity>
                                                                    {index + 1 == this?.props?.value?.length &&

                                                                        <TouchableOpacity
                                                                            onPress={this.props.callBack}
                                                                        >
                                                                            < Entypo name='plus' size={20} color={SCColors.gradientRight} />
                                                                        </TouchableOpacity>
                                                                    }
                                                                </View>
                                                            )
                                                        }}
                                                        keyExtractor={item => item.id}
                                                    />
                                                    :
                                                    <Text style={
                                                        { color: '#a9a9a9' }
                                                    }>
                                                        {`Languages`}
                                                    </Text>
                                                :
                                                <Text style={
                                                    { color: this?.props?.value ? 'black' : '#a9a9a9' }
                                                }>
                                                    {
                                                        type === 'lang' ?
                                                            `Languages`
                                                            :
                                                            (type === 'tos' || type === 'los') ?
                                                                this?.props?.value ? this?.props?.value :
                                                                    type === 'los' ?
                                                                        'Level of sport'
                                                                        :
                                                                        'Type of sport'
                                                                :
                                                                this?.props?.value ?
                                                                    this?.props?.value?.toLocaleDateString("en-US") :
                                                                    `Date of birth`
                                                    }
                                                </Text>
                                            }
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

                                            onChangeText={(text) => this?.props?.callBack(text)}
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