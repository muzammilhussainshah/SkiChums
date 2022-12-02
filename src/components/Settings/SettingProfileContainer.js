import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, Platform, Image, Text, ScrollView } from "react-native";
import SCGradientButton from "../SCGradientButton";
import SettingItem from "./SettingItem";
import SettingProfileSocialConnectionVIew from "./SettingProfileSocialConnectionVIew";
import CountryPicker from 'react-native-country-picker-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SettingProfileTxtField from "./SettingProfileTxtField";
import DatePicker from 'react-native-date-picker'
import ImgToBase64 from 'react-native-image-base64';
import { launchImageLibrary } from 'react-native-image-picker';
import SCColors from "../../styles/SCColors";
import { updateProfile } from "../../store/action/action";
import { connect } from "react-redux";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export class SettingProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

            firstName: '',
            lastName: '',
            bio: '',
            photoUrl: '',
            photoUrlData: '',
            DOBenabled: false,
            date: '',
            open: false,
            TOSenabled: false,
            TOSvalue: '',
            TOSoptions: [{ name: 'Snowboard' }, { name: 'Sky' }, { name: 'Other' }],
            LOSenabled: false,
            LOSvalue: '',
            LOSoptions: [{ name: 'Professional' }, { name: 'Expert' }, { name: 'Intermediate' }, { name: 'Beginner' }],
            LANGenabled: false,
            selectedLanguages: [],
            GooglePlaceInputEnabled: false,
            location: '',
            zin: -2,
        }
    }
    componentDidMount() {
        let currentUser = this.props.currentUser
        console.log(currentUser, 'currentUser')
        if (currentUser?.firstName && currentUser?.lastName) {

        }
        if (currentUser.firstName) this.setState({ firstName: currentUser?.firstName, })
        if (currentUser.lastName) this.setState({ lastName: currentUser?.lastName })
        if (currentUser?.photoURL) this.setState({ firstName: currentUser?.photoURL, })
        if (currentUser.about) this.setState({ bio: currentUser?.about, })
        if (currentUser.TOSvalue) this.setState({ TOSvalue: currentUser?.TOSvalue, })
        if (currentUser.LOSvalue) this.setState({ LOSvalue: currentUser?.LOSvalue, })
        if (currentUser.dob) this.setState({ date: new Date(currentUser?.dob), })
        if (currentUser.location) this.setState({ location: currentUser?.location })
        if (currentUser.languages) this.setState({ selectedLanguages: currentUser?.languages })
        // lastName: currentUser?.lastName,
        // // photoUrl: currentUser?.photoURL,
        // // date: currentUser?.dob,
        // // bio: currentUser?.about,
        // // TOSvalue: currentUser?.TOSvalue,
        // // LOSvalue: currentUser?.LOSvalue,
        // // selectedLanguages: currentUser?.languages,
        // // location: currentUser?.location,
    }
    render() {
        let currentUser = this.props.currentUser
        return (
            <>
                {this.state.DOBenabled == true &&
                    <DatePicker
                        modal
                        open={this.state.DOBenabled}
                        date={this.state.date ? this.state.date : new Date()}
                        mode='date'
                        onConfirm={(date) => this.setState({ DOBenabled: false, date: date })}
                        onCancel={() => this.setState({ DOBenabled: false, })}
                    />}
                {this.state.TOSenabled &&
                    <TouchableOpacity
                        onPress={() => this.closeDropDown()}
                        style={styles.dropDownContainer} >
                        <View style={styles.dropDownContainerWrapper}>
                            {this.state.TOSoptions.map(this.renderItem)}
                        </View>
                    </TouchableOpacity>}
                {this.state.LOSenabled == true &&
                    <TouchableOpacity
                        onPress={() => this.closeDropDownLOS()}
                        style={styles.dropDownContainer} >
                        <View style={styles.dropDownContainerWrapperLOS}>
                            {this.state.LOSoptions.map(this.renderItemLOS)}
                        </View>
                    </TouchableOpacity>}
                <CountryPicker
                    countryCode={'HK'}
                    withFilter
                    withFlagButton={false}
                    onClose={() => this.closePicker()}
                    onSelect={this.selectLanguag}
                    visible={this.state.LANGenabled}
                />
                {/* {this.state.GooglePlaceInputEnabled && */}
                <View style={{ position: 'absolute', zIndex: 2, top: '40.5%', backgroundColor: 'red', width: '68%', right: 20 }}>

                    <GooglePlacesAutocomplete
                        placeholder={this?.state?.location ? this?.state?.location : "Location"}

                        textInputProps={{ placeholderTextColor: this?.state?.location ? 'black' : null }}

                        onPress={(data, details = null) => {
                            this.setState({ location: data.description })
                        }}
                        query={{ key: 'AIzaSyBQHKZTwhPJX_9IevM5jKC8kmz0NzqAaBk' }}
                        fetchDetails={true}
                        onFail={error => console.log(error)}
                        onNotFound={() => console.log('no results')}
                        styles={{
                            textInputContainer: {
                                backgroundColor: '#ebf2ff',
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                            },
                            textInput: {
                                backgroundColor: '#ebf2ff',
                                marginLeft: 0,
                                marginRight: 0,
                                paddingTop: 20,
                                paddingLeft: 0,
                                color: '#5d5d5d',
                                fontSize: 16,
                                borderBottomColor: '#0A63EB',
                                borderBottomWidth: 0.3,
                            },
                            predefinedPlacesDescription: {
                                color: '#1faadb',
                            },
                        }}
                        currentLocation={true}
                        currentLocationLabel="Your location!" // add a simple label
                    />
                </View>
                {/* } */}


                {/* <ScrollView style={[this.props.style ?? {}, styles.container]}> */}
                <View style={styles.header}>
                    <View style={styles.photoView}>
                        {this.state.photoUrl ?
                            <Image source={{ uri: this.state.photoUrl }} style={styles.photo} />
                            :
                            <FontAwesome name="user-circle-o" color={SCColors.main} size={70} />
                        }
                        <TouchableOpacity onPress={this.getImg}>
                            <Text style={styles.changeButton}>change profile picture</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.back} onPress={this.props.onBackClicked}>
                        <Image source={require("../../assets/Settings/blue-chevron-left.png")} />
                    </TouchableOpacity>
                </View>



                <SettingProfileTxtField type={'first'}
                    value={this.state.firstName}
                    callBack={(val) => this.setState({ firstName: val })} />
                <SettingProfileTxtField
                    value={this.state.lastName}

                    type={'last'} callBack={(val) => this.setState({ lastName: val })} />
                <SettingProfileTxtField value={this.state.date} callBack={() => this.setState({ DOBenabled: true })} type={'dob'} />


                {/* GooglePlaceInputEnabled<SettingProfileTxtField type={'location'} /> */}
                <SettingProfileTxtField
                    callBack={() => this.setState({ GooglePlaceInputEnabled: true })} type={'location'} />
                <SettingProfileTxtField value={this.state.TOSvalue} callBack={() => this.setState({ TOSenabled: true })} type={'tos'} />
                <SettingProfileTxtField value={this.state.LOSvalue} callBack={() => this.setState({ LOSenabled: true })} type={'los'} />
                {/* <SettingProfileTxtField type={'los'} /> */}
                <SettingProfileTxtField
                    removeLanguage={(lang) => this.removeLanguage(lang)}
                    value={this.state.selectedLanguages}
                    type={'lang'}
                    callBack={() => this.setState({ LANGenabled: true })} />
                <SettingProfileTxtField
                    type={'bio'}
                    value={this.state.bio}

                    callBack={(val) => this.setState({ bio: val })}
                />
                <SettingProfileSocialConnectionVIew />
                <SCGradientButton
                    buttonTitle={`Save Changes`}
                    onClick={async () => {
                        await this.props.updateProfile(this.state, this.props.currentUser)
                        this.props.onClose()
                    }}
                    style={styles.saveChangesStyle} />
                {/* </ScrollView> */}
            </>
        )
    }
    selectLanguag = (country) => {
        this.closePicker()
        let languageCLone = JSON.parse(JSON.stringify(this.state.selectedLanguages))
        let index = languageCLone.findIndex((val) => val == country.cca2)
        if (index == -1) languageCLone.push(country.cca2)
        this.setState({ selectedLanguages: languageCLone })
    }

    closePicker() {
        this.setState({ LANGenabled: false })
    }
    removeLanguage(item) {
        let languageCLone = JSON.parse(JSON.stringify(this.state.selectedLanguages))
        let index = languageCLone.findIndex((val) => val == item)
        if (index !== -1) languageCLone.splice(index, 1)
        this.setState({ selectedLanguages: languageCLone })
    }
    renderItem = (item) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.closeDropDown()
                    this.setState({ TOSvalue: item.name })
                }}
                style={styles.dropValue}>
                <Text style={{}}>{item.name}</Text>
            </TouchableOpacity>

        )
    }
    renderItemLOS = (item) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.closeDropDownLOS()
                    this.setState({ LOSvalue: item.name })
                }}
                style={styles.dropValue}>
                <Text style={{}}>{item.name}</Text>
            </TouchableOpacity>

        )
    }
    closeDropDown() { this.setState({ TOSenabled: false, }) }
    closeDropDownLOS() { this.setState({ LOSenabled: false, }) }
    getImg = async () => {
        try {
            let options = {
                title: 'Select Image',
                includeBase64: true,
                customButtons: [
                    {
                        name: 'customOptionKey',
                        title: 'Choose Photo from Custom Option'
                    }
                ],
                storageOptions: {
                    skipBackup: true,
                    path: 'images'
                }
            };
            launchImageLibrary(options, async (res) => {
                if (res.didCancel) {
                } else if (res.error) {
                } else {
                    this.setState({ photoUrlData: res.assets[0], photoUrl: res.assets[0].uri })
                    // this.saveImage(res.assets[0].uri);
                }
            });
        } catch (err) {
            console.log(err);
        }
    };
    saveImage = (src) => {
        ImgToBase64.getBase64String(src)
            .then((base64String) => this.setState({ photoUrl: `data:image/png;base64,${base64String}` }))
            .catch((err) => console.log(err, 'base64String'));
    };
}






function mapStateToProps(states) {
    return ({
        currentUser: states.root.currentUser

    })
}

function mapDispatchToProps(dispatch) {
    return {
        updateProfile: (profileData, currentUser) => {
            dispatch(updateProfile(profileData, currentUser));
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SettingProfileContainer);

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
    saveChangesStyle: { position: "absolute", zIndex: 2, width: "80%", alignSelf: 'center', bottom: '10%', },
    dropDownContainer: { position: "absolute", zIndex: 2, height: '100%', width: '100%', alignItems: "flex-end" },
    dropValue: { padding: 5, borderBottomColor: 'black' },
    dropDownContainerWrapper: {
        width: '67%',
        right: 20,
        top: '54.5%', backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderColor: 'black',
        borderWidth: .3,
        borderTopWidth: .6

    },
    dropDownContainerWrapperLOS: {
        width: '67%',
        right: 20,
        top: '60.5%', backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderColor: 'black',
        borderWidth: .3,
        borderTopWidth: .6

    }

})