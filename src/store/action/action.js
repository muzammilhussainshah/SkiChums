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


export function sendMessageToDb(docId, msgObj) {
    return dispatch => {
        firestore().collection('message').doc(docId).set({ 'message': "message" })
        firestore().collection('message').doc(docId).collection('messages').add(msgObj)
    }
}
export function getMessagesFromDb(docId,) {
    return dispatch => {
        let messages = []
        // firestore().collection(`message/${docId}/messages`).get()
        firestore().collection(`message/${docId}/messages`)
            .orderBy('sendAt', 'desc')
            .limit(10).onSnapshot((querySnapshot) => {
                let chums = []
                querySnapshot.forEach(documentSnapshot => {
                    messages.push(documentSnapshot.data())
                });
                dispatch({ type: ActionTypes.MESSAGES, payload: messages })
            }
                , onError);

    }
}

export function getChatroom(mychums) {
    return dispatch => {
        let chatroomArray = []
        const user = firebase.auth().currentUser
        mychums.map(async (item) => {
            let docId;
            if (user.uid.length > item.uid.length) docId = item.uid + user.uid
            else docId = user.uid + item.uid
            console.log(docId, 'docIddocIddocIddocId', item)
            await firestore()
                .collection('message')
                .where(firebase.firestore.FieldPath.documentId(), '==', docId)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(documentSnapshot => {
                        chatroomArray.push(item)
                        console.log(documentSnapshot.id, 'aaaaa', chatroomArray)
                        dispatch({ type: ActionTypes.MYCHATROOM, payload: chatroomArray })

                        // alert(documentSnapshot.id)
                    });
                });
        })
    }
}
