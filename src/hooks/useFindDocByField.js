import {collection, getDocs, limit, orderBy, query} from "@firebase/firestore";
import {db} from "../firebase/config";

// Used for getting the last value in a collection. Field would be what you order things by and path is the collection
export const FindDocByField = async (field, path) => {
    const fieldQuery = query(collection(db, path), orderBy(field, "desc"), limit(1));
    const fieldSnapshot = await getDocs(fieldQuery);
    let snapshotObject;
    fieldSnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        snapshotObject = doc.data().accountNumber;
    })
    return snapshotObject;
}