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
            let myChumsIdsAndStatus = chums?.filter((val) => val?.uid == user?.uid)[0]?.myChams
            let myChumsArr = []
            if (myChumsIdsAndStatus?.length > 0) {

                myChumsIdsAndStatus.map((item) => {
                    let myChums = chums.filter((val) => val.uid == item.id)
                    if (myChums.length > 0) { myChumsArr.push(myChums[0]) }
                })
                // console.log()
                dispatch({ type: ActionTypes.MYCHUMS, payload: myChumsArr })
            }
            dispatch({ type: ActionTypes.CHUMS, payload: chums })
        }
            , onError);

    }
}


export function sendMessageToDb(docId, msgObj, messageType) {
    return dispatch => {
        firestore().collection('message').doc(docId).set({ 'type': "message" })
        if (messageType == 'group') {
            firestore().collection('group').doc(docId).update({ messageText: msgObj.messageText, sendAt: msgObj.sendAt, sendBy: msgObj.sendBy });
        } else {
            firestore().collection('message').doc(docId).set(msgObj)
        }
        firestore().collection('message').doc(docId).collection('messages').add(msgObj)

    }
}
export function getMessagesFromDb(docId,) {
    return dispatch => {
        firestore().collection(`message/${docId}/messages`)
            .orderBy('sendAt', 'desc')
            .limit(15).onSnapshot((querySnapshot) => {
                let messages = []
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
        const user = firebase.auth().currentUser
        // let chatroomArray = []
        let listOfDocIDs = mychums.map((item) => {
            let docId;
            if (user.uid > item.uid) docId = item.uid + user.uid
            else docId = user.uid + item.uid
            return docId
        })
        let remainingVal = listOfDocIDs % 10

        for (let limit = 0; limit < listOfDocIDs.length; limit = limit + 10 < listOfDocIDs.length ? limit + 10 : remainingVal) {
            // const element = array[limit];
            console.log(listOfDocIDs[limit], 'array[limit]array[limit]')
            firestore()
                .collection('message')
                .where(firebase.firestore.FieldPath.documentId(), 'in', listOfDocIDs.slice(limit, limit + 10))
                .onSnapshot((querySnapshot) => {
                    let chatroomArray = []
                    querySnapshot.forEach(documentSnapshot => {
                        let result = mychums.filter((val) => val?.uid == documentSnapshot.data()?.recieveAt || val?.uid == documentSnapshot.data()?.sendBy)
                        if (result?.length > 0) chatroomArray.push({ ...documentSnapshot.data(), ...result[0] })
                        else chatroomArray.push({ ...documentSnapshot.data() })
                    });
                    dispatch({ type: ActionTypes.MYCHATROOM, payload: chatroomArray })

                }
                    , onError);
        }
        firestore()
            .collection('group')
            .where(
                "members",
                "array-contains",
                user.uid
            )
            .onSnapshot(querySnapshot => {
                let groupchatroomArray = []
                querySnapshot.forEach(documentSnapshot => {
                    groupchatroomArray.push(documentSnapshot.data())
                    console.log(groupchatroomArray, 'groupchatroomArray')
                });
                dispatch({ type: ActionTypes.MYGROUPCHATROOM, payload: groupchatroomArray })
            });
        // while (listOfDocIDs.length) {
        //     const res = await firestore()
        //         .collection('users')
        //         .where('uid', 'in', listOfDocIDs.slice(0, limit))
        //         .get()
        //     const _users = res.docs.map((doc) => {
        //         const _data = doc.data() as UserModel
        //         _data.docId = doc.id
        //         return _data
        //     })

        //     users.push(..._users)
        //     listOfDocIDs.splice(0, limit)
        // }

        // return users

        // firestore()
        //     .collection('message')
        //     .where(firebase.firestore.FieldPath.documentId(), 'in', listOfDocIDs.slice(0, listOfDocIDs.length - 1))
        //     .get()
        //     .then(querySnapshot => {
        //         let chatroomArray = []

        //         querySnapshot.forEach(documentSnapshot => {
        //             // chatroomArray.push({ ...documentSnapshot.data(), 'chatroomchatroomchatroom' })
        //             console.log(documentSnapshot.data(), 'chatroomchatroomchatroom')
        //             chatroomArray.push({ ...documentSnapshot.data() })

        //             dispatch({ type: ActionTypes.MYCHATROOM, payload: chatroomArray })
        //         });
        //     });
        // firestore()
        //     .collection('group')
        //     .where(
        //         "members",
        //         "array-contains",
        //         user.uid
        //     )
        //     .get()
        //     .then(querySnapshot => {
        //         querySnapshot.forEach(documentSnapshot => {
        //             chatroomArray.push(documentSnapshot.data())
        //             dispatch({ type: ActionTypes.MYCHATROOM, payload: chatroomArray })
        //         });

        //     });
    }
}
export function createGroup(groupObj, groupId) {
    return dispatch => {

        firestore().collection('group').doc(groupId).set(groupObj)
        firestore().collection('message').doc(groupId).set({ 'type': "group" })

    }
}
export function resetReducer() {
    return dispatch => {
        dispatch({ type: ActionTypes.RESETREDUCER })

    }
}
export function deleteGroup(docId) {
    return dispatch => {
        // alert()
        firestore().collection('group').doc(docId).delete()
            .then(() => {
                console.log('group deleted!');
            });
        firestore().collection('message').doc(docId).delete()
            .then(() => {
                console.log('group deleted!');
            });

    }
}
export function updateGroupName(recipientData, updatedname, myChatRoom) {
    return dispatch => {
        if (Object.keys(recipientData).length > 0) {
            let docId;
            if (recipientData.type === 1) {
                docId = recipientData.id
                firestore().collection('group').doc(docId).update({ displayName: updatedname });
                let selectedGroup = myChatRoom.filter(({ id }) => id == recipientData.id)
                if (selectedGroup.length > 0) {
                    selectedGroup[0].displayName = updatedname
                }
            }
        }
    }
}
export function addGroupMember(recipientData, updatedname, myChatRoom) {
    return dispatch => {
        if (Object.keys(recipientData).length > 0) {
            let docId;
            if (recipientData.type === 1) {
                docId = recipientData?.id
                let array = updatedname?.map(({ uid }) => uid)
                let array3 = array?.concat(recipientData?.members);
                array3 = array3?.filter((item, index) => {
                    return (array3.indexOf(item) == index)
                })
                firestore().collection('group').doc(docId).update({ members: array3 });
                let selectedGroup = myChatRoom?.filter(({ id }) => id == recipientData?.id)
                if (selectedGroup.length > 0) selectedGroup[0].members = array3
            }
        }
    }
}
export function sendMessageGroup() {
    return dispatch => {
    }
}