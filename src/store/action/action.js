import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import ActionTypes from '../constant/constant';

function onError(error) { Alert.alert(error) }

export function getAllChums(bolean) {
    return dispatch => {
        const user = firebase.auth().currentUser
        firestore().collection('chums').onSnapshot((querySnapshot) => {
            let chums = []
            querySnapshot.forEach(documentSnapshot => {
                chums.push(documentSnapshot.data())
            });
            let myChumsIdsAndStatus = chums?.filter((val) => val.uid == user.uid)[0].myChams
            let myChumsArr = []
            myChumsIdsAndStatus.map((item) => {
                let myChums = chums.filter((val) => val.uid == item.id)
                if (myChums.length > 0) { myChumsArr.push(myChums[0]) }
            })
            dispatch({ type: ActionTypes.CHUMS, payload: chums })
            dispatch({ type: ActionTypes.MYCHUMS, payload: myChumsArr })
        }
            , onError);

    }
}


export function sendMessage(docId, msgObj) {
    return dispatch => {
        console.log(docId, msgObj, 'docId, msgObj')
        // alert('send ')
        // db
        firestore().collection('message').doc(docId).collection('messages').add(msgObj)
        // firestore()
        //     .collection('message')
        //     .doc(docId)
        //     .set(msgObj)
        //     .then(() => {
        //         console.log('User added!');
        //     });
        // const user = firebase.auth().currentUser


    }
}


