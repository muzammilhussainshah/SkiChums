
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import auth, { firebase } from '@react-native-firebase/auth'

import Navigation from './src/router/Tab';
import { PortalProvider } from '@gorhom/portal';
import store from './src/store';

import AuthNavigation from './src/router/Auth';
import { Provider } from 'react-redux';
import { AppState } from 'react-native';
import firestore from '@react-native-firebase/firestore';

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [appState, setappState] = useState('');

  function onAuthStateChanged(user) {
    if (user?._user) {
      firestore()
        .collection('chums')
        .doc(user._user.uid)
        .update({ isOnline: true });
    }
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(async () => {

    const subscriber = await auth().onAuthStateChanged(onAuthStateChanged);
    const subscription = AppState.addEventListener('change',
      (nextAppState) => {
        const user = firebase.auth().currentUser
        // setappState('active')
        console.log(user, 'useruseruser')
        if (nextAppState === 'active') {
          if (user?._user) {

            firestore()
              .collection('chums')
              .doc(user?._user?.uid)
              .update({ isOnline: true });
          }
          // setappState('active')
        }
        else {
          // setappState('inActive')
          if (user?._user) {

            firestore()
              .collection('chums')
              .doc(user._user.uid)
              .update({ isOnline: false });
          }
        }
        console.log('AppState', nextAppState);
      }
    );
    // console.log(subscriber, 'subscribersubscribersubscriber')
    return () => {
      subscriber()
      subscription.remove()

    }
  }, []);


  if (!user) {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <PortalProvider>
            <AuthNavigation />
          </PortalProvider>
        </SafeAreaProvider>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <PortalProvider>
            <Navigation />
          </PortalProvider>
        </SafeAreaProvider>
      </Provider>
    );
  }
}

export default App;
