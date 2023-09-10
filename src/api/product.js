import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebase-config";

export const syncBothMenus = (userId, menu) => {
    const docRef = doc(db, "users", userId);
    const newDoc = {
        menu: menu
    }
    updateDoc(docRef, newDoc)
}

export const syncBothBaskets = (userId, basket) => {
    const docRef = doc(db, "users", userId);
    const newDoc = {
        basket: basket
    }
    updateDoc(docRef, newDoc)
}

export const getMenuAndBasket = async (userId) => {
    const docRef = doc(db, "users", userId)
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
        const {menu, basket} = docSnapshot.data();
        return {menu, basket}
    } else {
        return null;
    }
}