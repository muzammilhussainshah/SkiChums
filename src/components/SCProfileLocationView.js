import React, { Component } from "react";
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from "react-native";
import CountryFlag from "react-native-country-flag";

export default class SCProfileLocationView extends Component {
    render() {
        const type = this.props.type;
        let currentUser = this?.props?.currentUser
        return (
            <>
                {
                    <View style={[this.props.style ?? {}, styles.container]}>
                        <Text style={styles.location}>
                            {type == 'Location' ? 'Location' : type == 'Level' ? 'Ski Levels' : 'Speaks'}
                        </Text>
                        <View style={styles.address}>
                            <View style={styles.flag}>
                                <Image source={require('../assets/icons/sample-switzerland-flag.png')} />
                            </View>
                            <Text style={styles.addressTxt}>
                                {type == 'Location' ? currentUser?.location : type == 'Level' ? currentUser?.TOSvalue :
                                    <FlatList
                                        data={currentUser?.languages}
                                        style={{ width: 90 }}
                                        scrollEnabled={false}
                                        horizontal
                                        renderItem={({ item, index }) => {
                                            return (
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <View                                                    >
                                                        <View  >
                                                        </View>
                                                        <CountryFlag isoCode={item} style={{ borderRadius: 10, height: 20, marginHorizontal: 5, marginBottom: 5, width: 20 }} />
                                                    </View>
                                                </View>
                                            )
                                        }}
                                        keyExtractor={item => item.id}
                                    />
                                }

                                {/* //         item + ', '
                                //     ) }
                                //     )
                                // } */}
                                {/* addressa */}
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
        flex: 1
    },
    location: {
        textAlign: 'center',
        color: '#0245F5',
        fontWeight: '500',
        fontSize: 12
    },
    address: {
        // marginVertical: 10,
        flex: 1,
        // alignSelf:'center',
        // backgroundColor:'red',justifyContent:'center',
        alignItems:'center'
        // flexDirection: 'row'
    },
    flag: {
        width: 15,
        height: 15,
        marginVertical: 5,

    },
    addressTxt: {
        paddingLeft: 6,
        color: 'black',
        fontSize: 11,
        textAlign: 'center'
    }

})