import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
 
import BottomTabNavigator from './SCBottomTabNavigator';

export default function Navigation() {
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
       <Stack.Screen name="Root" component={BottomTabNavigator} />
     </Stack.Navigator>
   );
}
 