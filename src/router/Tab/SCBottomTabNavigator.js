import TabIcon from './TabIcon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import { Image } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';

import React, { Component } from "react";

import MyProfile from '../../pages/MyProfile';
import SkiResorts from '../../pages/SkiResorts';
import Chums from '../../pages/Chums';

import SCColors from '../../styles/SCColors';
import Settings from '../../pages/Settings';
import Chatlist from '../../pages/Chat/Chatlist';
import NewChatGroup from '../../pages/Chat/NewChatGroup';
import ChatScreen from '../../pages/Chat/ChatScreen';
import LiveSession from '../../pages/LiveSession';

  const BottomTab = createBottomTabNavigator();

  export default class BottomTabNavigator extends Component { 
    constructor(props) {
      super(props);
  
      this.state = {
        index: 0
      }
    }

    render() {
      return (
      <BottomTab.Navigator
        initialRouteName="My Profile"
        tabBarOptions={
          {          
          activeTintColor:  this.state.index == 0 ? SCColors.main : SCColors.white,
          inactiveTintColor: SCColors.tabInactive,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          // backgroundColor: 'white',
          showLabel: true,  
          // position: 'absolute',
          style: {
            // position: 'absolute',
            bottom: 0, 
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 10,
            ...style.shadow,
          },          
          tabStyle: {
            height: 107,
            paddingVertical: 40,
            paddingTop: 15,
          }
        }}
        
        tabBar={(props) => {          
          if (props.state.index != this.state.index) {this.onChanged(props.state.index)}
          return props.state.index == 0 ? (
            <View
              style={
                {height: 107,
                  paddingLeft: 0,
                  paddingRight: 0,
                  borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
              backgroundColor: 'white'}
              }                            
            >              
               <BottomTabBar
                {...props}

                style={{ backgroundColor: 'transparent' }}
              />
            </View>
          ) : (
            <LinearGradient
              start={{x: 1.0, y: 0.5}} end={{x: 0.0, y: 0.5}}
              colors={[SCColors.gradientRight, SCColors.gradientLeft]}  
              style={
                {height: 107,
                  paddingLeft: 0,
                  paddingRight: 0,
                  borderTopLeftRadius: 40,
                borderTopRightRadius: 40}
              }                            
            >
              <BottomTabBar
                {...props}

                style={{ backgroundColor: 'transparent' }}
              />
            </LinearGradient>
          )
        }}
        >
        <BottomTab.Screen
          name="My Profile"
          component={MyProfileScreenNavigator}
          options={{
            // tabBarIcon: ({ color }) => <TabIcon name="profile"/>
            tabBarIcon: ({ color, size }) => (
              <Image
              source = {require('../../assets/icons/tab-profile.png')}
                style = {{ width: 30, height: 30, tintColor: color}}
              />
            )
          }}
        />
        <BottomTab.Screen
          name="Ski resorts"
          component={SkiResortsScreenNavigator}
          options={{
            // tabBarIcon: ({ color }) => <TabIcon name="resorts"/>,
            tabBarIcon: ({ color, size }) => (
              <Image
                source = {require('../../assets/icons/tab-ski.png')}
                style = {{ width: 21, height: 30, tintColor: color}}
              />
            )
          }}
        /> 
        <BottomTab.Screen
          name="Chums"
          component={ChumsScreenNavigator}
          options={{
            // tabBarIcon: ({ color }) => <TabIcon name="chums"/>,
            tabBarIcon: ({ color, size }) => (
              <Image
                source = {require('../../assets/icons/tab-chums.png')}
                style = {{ width: 38, height: 30, tintColor: color}}
              />
            )
          }}
        />
      </BottomTab.Navigator>
    );
    }    

    onChanged(currentIndex) {
      this.setState({index: currentIndex});
    }
  }

  const MyProfileScreenStack = createStackNavigator();
  function MyProfileScreenNavigator() {
    return (
      <MyProfileScreenStack.Navigator>
        <MyProfileScreenStack.Screen
          name="My Profile"
          component={MyProfile}
          options={{ headerShown: false }}
        />
        <MyProfileScreenStack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}/>
        
      </MyProfileScreenStack.Navigator>
    );
  }
  
  const SkiResortsScreenStack = createStackNavigator();
  function SkiResortsScreenNavigator() {
    return (
      <SkiResortsScreenStack.Navigator>
        <SkiResortsScreenStack.Screen
          name="Ski resorts"
          component={SkiResorts}
          options={{ headerShown: false }}
        />
        <SkiResortsScreenStack.Screen
        name="LiveSession"
        component={LiveSession}
        options={{headerShown: false}}/>
      </SkiResortsScreenStack.Navigator>
    );
  }

  const ChumsScreenStack = createStackNavigator();
  function ChumsScreenNavigator() {
    return (
      <ChumsScreenStack.Navigator>
        <ChumsScreenStack.Screen
          name="Chums"
          component={Chums}
          options={{ headerShown: false }}
        />
        <ChumsScreenStack.Screen
          name='Chatlist'
          component={Chatlist}
          options={{headerShown: false}}
        />
        <ChumsScreenStack.Screen
          name='NewChatGroup'
          component={NewChatGroup}
          options={{headerShown: false}}
        />
        <ChumsScreenStack.Screen
          name='ChatScreen'
          component={ChatScreen}
          options={{headerShown: false}}
        />
      </ChumsScreenStack.Navigator>
    );
  }
  
  const AddScreenComponent = () => {
    return null;
  }
  
  const style = StyleSheet.create({
    shadow: {
      shadowColor: 'red',
      shadowOffset: {
        width: 0, 
        height: 10
      },
      shadowOpacity: 0.5,
      shadowRadius: 3.5,
      elevation: 5,
    }
  });
  