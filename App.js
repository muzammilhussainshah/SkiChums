/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect } from 'react';
 import { SafeAreaProvider } from 'react-native-safe-area-context';
 import auth from '@react-native-firebase/auth'
//  import auth from '@react-native-firebase/auth'
 import { GoogleSignin } from '@react-native-google-signin/google-signin';

 import Navigation from './src/router/Tab';
 import { PortalProvider } from '@gorhom/portal';
 import AuthNavigation from './src/router/Auth';

 function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect( () => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  
  // if (initializing) return null;

  if (!user) {
    return (
      <SafeAreaProvider>
      <PortalProvider>
        <AuthNavigation/>
      </PortalProvider>
     </SafeAreaProvider>
    );    
  } else {
    return (
      <SafeAreaProvider>
      <PortalProvider>
        <Navigation />
      </PortalProvider>
     </SafeAreaProvider>
    );    
  }
 }

 export default App;