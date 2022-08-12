import React, {useState} from 'react'
import './SearchAccount.css'
import {useNavigate} from 'react-router-dom'
import {useLogout} from "../../hooks/useLogout";
import {collection, getDoc, getDocs, limit, onSnapshot, orderBy, query} from "@firebase/firestore";
import {db} from "../../firebase/config";
import Swal from "sweetalert2";


function SearchAccount() {

  const navigate = useNavigate();
  const { logout } = useLogout();

  const [result, setResult] = useState(false);
  
  // const [lastAccountNumber, setLastAccountNumber] = useState();
  
  // const getLastAccountNumber = async () => {
  //
  //     const useFindDocByField = async (field) => {
  //         const fieldQuery = query(collection(db, "users"), orderBy(field, "desc"), limit(1));
  //         const fieldSnapshot = await getDocs(fieldQuery);
  //         let snapshotObject;
  //         fieldSnapshot.forEach((doc) => {
  //             console.log(doc.id, " => ", doc.data());
  //             snapshotObject = doc.data().accountNumber;
  //         })
  //         return snapshotObject;
  //     }
  //     console.log("Test")
  //     console.log("Field snapshot", await useFindDocByField("createdAt"))
  //
  // }

  return (
    <div className='withdraw-container'>
        <div className='head-container'>
            <span>Avion Banking</span>
            <div className='home-out'>
                <button className='button-home' onClick={() => navigate('/Homepage')}>Home</button>
                <button className='button-logout' onClick={logout}>Logout</button>
            </div>
        </div>
        <div className='search-body'>
            <input className='button-account' type="number" name="name" placeholder="Account #"></input>
            {/*<button className='button-search' onClick={() => {setResult(true)}}> Search <i className="fa-solid fa-magnifying-glass"></i> </button>*/}
            {/*<button className='button-search' onClick={getLastAccountNumber}> Search <i className="fa-solid fa-magnifying-glass"></i> </button>*/}
        </div>
         {/*{result && <UserResult closeResult={setResult} />}*/}
    </div>
  )
}

export default SearchAccount