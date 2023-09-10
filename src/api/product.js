import { doc, updateDoc } from "firebase/firestore"
import { db } from "./firebase-config";

export const syncBothMenus = (userId, menu) => {
    const docRef = doc(db, "users", userId);
    const newDoc = {
        menu: menu
    }
    updateDoc(docRef, newDoc)
}