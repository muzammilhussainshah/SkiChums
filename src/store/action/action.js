import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

import ActionTypes from '../constant/constant';



function onError(error) {
    Alert.alert(error)
    // console.error(error);
}
export function getAllChums(bolean) {
    return dispatch => {
        firestore().collection('chums').onSnapshot((querySnapshot) => {
            let chums = []
            querySnapshot.forEach(documentSnapshot => {
                chums.push(documentSnapshot.data())
            });
            dispatch({ type: ActionTypes.CHUMS, payload: chums })
        }
            , onError);

    }
}


