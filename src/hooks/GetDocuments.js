import {collection, getDocs, where, query} from "@firebase/firestore";
import {auth, db} from "../firebase/config";


export const GetDocuments = async (path, field) => {
    let queryArray = [];
    const documentQuery = await query(collection(db, path), where(field, "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(documentQuery);
    querySnapshot.forEach((doc) => {
        queryArray.push(doc.data());
    });
    return queryArray;
}