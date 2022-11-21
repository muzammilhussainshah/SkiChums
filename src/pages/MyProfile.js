import React, { Component } from "react";
import { Image, Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import ProfileInfoHourView from '../components/ProfileInfoHourView';
import LogoAndSettingsBar from '../components/LogoAndSettingsBar';
import TabButton from '../components/TabButton';
import SCProfileInfoView from '../components/SCProfileInfoView';
import SCProfileRatingView from "../components/Profile/Reviews/SCProfileRatingView";
import SCSessionFlatList from "../components/Profile/Session/SCSessionFlatList";
import Settings from "./Settings";
import SCNoSessionView from "../components/Profile/Session/SCNoSessionView";
import SCGradientButton from "../components/SCGradientButton";
import { EventRegister } from 'react-native-event-listeners'

export default class MyProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileType: 'mine', //mine or chum
      profileView: 'profile' // profile, session, reviews
    }
  }
  render() {
    const settingsScreen = () => {
      return (
        <Settings/>
      );
    };

    return (
      <View style={styles.container}>
          <View style={styles.headerContainer}>
            <ImageBackground source={require("../assets/icons/profile-header.png")} resizeMode="cover" style={styles.headerImage}/>

            <LogoAndSettingsBar onSettingsBtnClick={this.goToSettings}/>

            <View style={styles.profileImageContainer}>
              <Image source={require("../assets/profile/profile_sample_me.jpeg")} resizeMode="stretch" style={styles.profileImage}/>
            </View>

            <View style={styles.profileInfoContainer}>
              <Text style={styles.profileName}>
                Josh Brown
              </Text>

              <Text style={styles.profileExpTxt}>
                  30 y.o  |  Expert
              </Text>

              <View style={styles.profileHeaderSeparator}></View>
              <View style={styles.profileExperienceContainer}>
                <ProfileInfoHourView type = 'session' value = {2000}/>
                <ProfileInfoHourView type = 'kilos' value = {13000}/>
                <ProfileInfoHourView type = 'hours' value = {120}/>
              </View>

            </View>
          </View>

          <View style={styles.tabView}>          
            <TabButton selectedStatus={this.state.profileView == 'profile' ? true : false} buttonTitle={'PROFILE'} onTabBtnClick={() => this.setState({profileView: 'profile'})}/>
            <TabButton selectedStatus={this.state.profileView == 'session' ? true : false} buttonTitle={'SESSIONS'} onTabBtnClick={() => this.setState({profileView: 'session'})}/>
            <TabButton selectedStatus={this.state.profileView == 'reviews' ? true : false} buttonTitle={'REVIEWS'} onTabBtnClick={() => this.setState({profileView: 'reviews'})}/>
          </View>

          {/* {this.state.profileView == 'profile' ? (<SCProfileInfoView style={styles.profileTabInfoContainer}></SCProfileInfoView>) : this.state.profileView == 'session' ? (<SCSessionFlatList style={styles.sessionTabInfoContainer}></SCSessionFlatList>) : (<SCProfileRatingView style={styles.profileTabInfoContainer}></SCProfileRatingView>)} */}
          {this.state.profileView == 'profile' ? (<SCProfileInfoView style={styles.profileTabInfoContainer}></SCProfileInfoView>) : this.state.profileView == 'session' ? (<SCNoSessionView style={styles.sessionTabInfoContainer} isSession={true} onStart={this.onStart}></SCNoSessionView>) : (<SCNoSessionView style={styles.sessionTabInfoContainer} isSession={false} onStart={this.onStart}></SCNoSessionView>)}

          {this.state.profileView == 'profile' ? (<SCGradientButton buttonTitle="Unlock all premium features" style={styles.premiumButton}/>) : (null)}
      </View>
    );  
  }
  goToSettings = () => {
      console.log('navigate to settings')
      this.props.navigation.navigate('Settings')
  }
  onStart = () => {
    console.log('onStart')
    this.props.navigation.navigate('Ski resorts')
    EventRegister.emit('startSession', true)  
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,   
      flexDirection: 'column',
      backgroundColor: 'white'
    },
    tabView: {
      paddingTop: 24,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 50,
    },
    sessionTabInfoContainer: {
      flex: 1,
      marginVertical: 15,
      marginHorizontal: 20,
      // paddingHorizontal: 5
    },
    profileTabInfoContainer: {
      flex: 1,
      marginVertical: 15,
      marginHorizontal: 35
    },
    premiumButton: {
      marginBottom: 22,
      height: 36,
      marginHorizontal: 38
    },
    headerContainer: {
      width: '100%',
      height: 279,
      justifyContent: 'center',
      alignItems: 'center'
    },
    whiteLogoerAndSettings: {
      marginTop: 44
    },
    whiteLogoer: {
      width: '15%',
      aspectRatio: 1,
      marginLeft: 28
    },
    settingsIcon: {
      width: 25,
      aspectRatio: 1,
      marginRight: 28,
      marginTop: 10
    }, 
    headerImage: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    },
    profileImageContainer: {
      width: 70,
      aspectRatio: 1,
      alignContent: 'center',
      justifyContent: 'center'
    },
    profileImage: {
      width: 70,
      height: 70,
      borderRadius: 35
    },
    profileInfoContainer: {
      position: 'absolute',
      flexDirection: 'column',
      alignItems: 'center',
      width: '78%',
      height: 88,
      bottom: 10
    },
    profileName: {
      width: '100%',
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16
    },
    profileExperienceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      width: '80%',
      marginTop: 4
    },
    profileExpTxt: {
      paddingTop: 3,
      color: 'white',
      fontWeight: '500',
      fontSize: 12,
      textAlign: 'center'
    },
    profileHeaderSeparator: {
      marginTop: 13,
      backgroundColor: 'white',
      width: '100%',
      height: 1
    }
});