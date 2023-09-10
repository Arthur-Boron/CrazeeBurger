import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebase-config";

export const syncBothMenus = (userId, menu) => {
    const docRef = doc(db, "users", userId);
    const newDoc = {
        menu: menu
    }
    updateDoc(docRef, newDoc)
}

export const getMenu = async (userId) => {
    const docRef = doc(db, "users", userId)
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
        return docSnapshot.data().menu;
    } else {
        return null;
    }
}