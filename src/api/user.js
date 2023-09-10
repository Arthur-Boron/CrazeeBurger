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

export const getUser = async(username) => {
    return getIdByUserName(username)
}

export const createUser = async(username) => {
    const userId = crypto.randomUUID();
    const docRef = doc(db, "users", userId);
    
    const newDoc = {
        username: username,
        menu: fakeMenu.LARGE
    }
    
    try {
        await setDoc(docRef, newDoc);
        return userId;  // retourne l'ID du nouvel utilisateur créé
    } catch (error) {
        console.error("Erreur lors de l'enregistrement des données :", error);
    }
}

export const authenticateUser = async(username) => {
    //1- get user to see if it exists
    const userId = await getUser(username)

    if (!userId) {
        const newUser = await createUser(username);
        return newUser;
    }

    return userId;
}