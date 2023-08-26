import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu"

const getIdByUserName = async (username) => {
    const docRef = collection(db, "users")
    const querySnapshot = await getDocs(query(docRef, where("username", "==", username)));
    if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        return userDoc.id;
    } else {
        return null;
    }
}

const getDataByUserName = async (username) => {
    const docRef = collection(db, "users")
    const querySnapshot = await getDocs(query(docRef, where("username", "==", username)));
    if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        return userDoc.data();
    } else {
        return null;
    }
}

export const getUser = async(username) => {
    return getDataByUserName(username)
}

export const createUser = async(username) => {
    let userId = await getIdByUserName(username)
    if (userId == undefined) {
        const docRef = doc(db, "users", crypto.randomUUID());
        const newDoc = {
            username: username,
            menu: fakeMenu.LARGE
        }
        setDoc(docRef, newDoc);
    } else {
        const docRef = doc(db, "users", userId);
        const newDoc = {
            username: username,
            menu: fakeMenu.LARGE
        }
        setDoc(docRef, newDoc);
    }
}