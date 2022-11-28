import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import StartScreen from '../../pages/Auth/StartScreen';
import RegisterScreen from '../../pages/Auth/RegisterScreen';
import LoginScreen from '../../pages/Auth/LoginScreen';
import ForgotPasswordScreen from '../../pages/Auth/ForgotPasswordScreen';
import NewPasswordScreen from '../../pages/Auth/NewPasswordScreen';
import NewPasswordLogin from '../../pages/Auth/NewPasswordLogin';

export default function AuthNavigation() {
   return (
     <NavigationContainer>
       <RootNavigator />
     </NavigationContainer>
   );
}
 
const Stack = createStackNavigator();
 
function RootNavigator() {
   return (
     <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Root" component={StartScreen} />
       <Stack.Screen name="Register" component={RegisterScreen} />
       <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
       <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
       <Stack.Screen name="NewPasswordLogin" component={NewPasswordLogin} />       
     </Stack.Navigator>
   );
}