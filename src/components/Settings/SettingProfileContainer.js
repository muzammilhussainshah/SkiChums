import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, Platform, Image, Text, ScrollView } from "react-native";
import SCGradientButton from "../SCGradientButton";
import SettingItem from "./SettingItem";
import SettingProfileSocialConnectionVIew from "./SettingProfileSocialConnectionVIew";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SettingProfileTxtField from "./SettingProfileTxtField";
import DatePicker from 'react-native-date-picker'
import { launchImageLibrary } from 'react-native-image-picker';
import SCColors from "../../styles/SCColors";

export default class SettingProfileContainer extends Component {
    // const[imageUriLocal, setimageUriLocal] = useState('');
    constructor(props) {
        super(props);
        this.state = {

            imageUriLocal: '',
            DOBenabled: false,
            date: '',
            open: false,
            TOSenabled: false,
            TOSvalue: '',
            TOSoptions: [{ name: 'Snowboard' }, { name: 'Sky' }, { name: 'Other' }],
            LOSenabled: false,
            LOSvalue: '',
            LOSoptions: [{ name: 'Professional' }, { name: 'Expert' }, { name: 'Intermediate' }, { name: 'Beginner' }],
            // DOBenabled: false,
            //   const [date, setDate] = useState(new Date())
            //   const [open, setOpen] = useState(false)
        }
    }

    render() {
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
                {this.state.TOSenabled == true &&
                    <TouchableOpacity
                        onPress={this.closeDropDown}
                        style={styles.dropDownContainer} >
                        <View style={styles.dropDownContainerWrapper}>
                            {this.state.TOSoptions.map(this.renderItem)}
                        </View>
                    </TouchableOpacity>}
                {this.state.LOSenabled == true &&
                    <TouchableOpacity
                        onPress={this.closeDropDownLOS}
                        style={styles.dropDownContainer} >
                        <View style={styles.dropDownContainerWrapperLOS}>
                            {this.state.LOSoptions.map(this.renderItemLOS)}
                        </View>
                    </TouchableOpacity>}
                {/* <ScrollView style={[this.props.style ?? {}, styles.container]}> */}
                <View style={styles.header}>
                    <View style={styles.photoView}>
                        {this.state.imageUriLocal ?
                            <Image source={{ uri: this.state.imageUriLocal }} style={styles.photo} />
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



                <SettingProfileTxtField type={'first'} />
                <SettingProfileTxtField type={'last'} />
                <SettingProfileTxtField value={this.state.date} callBack={() => this.setState({ DOBenabled: true })} type={'dob'} />


                <SettingProfileTxtField type={'location'} />
                <SettingProfileTxtField value={this.state.TOSvalue} callBack={() => this.setState({ TOSenabled: true })} type={'tos'} />
                <SettingProfileTxtField value={this.state.LOSenabled} callBack={() => this.setState({ LOSenabled: true })} type={'los'} />
                {/* <SettingProfileTxtField type={'los'} /> */}
                <SettingProfileTxtField type={'lang'} />
                <SettingProfileTxtField type={'bio'} />
                <SettingProfileSocialConnectionVIew />
                <SCGradientButton
                    buttonTitle={`Save Changes`}
                    onClick={() => alert()}
                    style={styles.saveChangesStyle} />
                {/* </ScrollView> */}
            </>
        )
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
                    this.setState({ LOSenabled: item.name })
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
                    this.setState({ imageUriLocal: res.assets[0].uri })
                    // this.saveImage(res.assets[0].uri);
                }
            });
        } catch (err) {
            console.log(err);
        }
    };
    saveImage = (src) => {
        // ImgToBase64.getBase64String(src)
        //     .then((base64String) =>
        //         dispatch(
        //             saveData(
        //                 'profilePic',
        //                 `data:image/gif;base64,${base64String}`,
        //                 currentUserProfile
        //             )
        //         )
        //     )
        //     .catch((err) => console.log(err, 'base64String'));
    };
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