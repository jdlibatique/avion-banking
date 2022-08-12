import {auth} from "../../firebase/config";
import {db} from "../../firebase/config";
import './Notes.css'
import {useState, useEffect} from "react";
import {addDoc, collection, doc, getDocs, serverTimestamp, setDoc} from "@firebase/firestore";
import Swal from "sweetalert2";
import {GetDocuments} from "../../hooks/GetDocuments";
import NoteTabs from "./NoteTabs";


export const Notes = () => {
    
    const [noteBody, setNoteBody] = useState("");
    const [noteTitle, setNoteTitle] = useState("");
    const [notes, setNotes] = useState([])
    
    console.log(auth.currentUser)
    
    useEffect( () => {
        const fetchData = async () => {
            let results = [];
            results = (await GetDocuments("notes", "noteOwner"));
            setNotes(results)
        }
        try {
            fetchData();
        } catch(error) {
            Swal.fire("Uh-oh!", "Something went very wrong!", "error")
        }
        
    }, [])
    
    console.log(notes)
    
    
    
    const addNote = async (evt) => {
        evt.preventDefault();
        
        try {
            await addDoc(collection(db, "notes"), {
                noteOwner: auth.currentUser.uid,
                noteTitle: noteTitle,
                noteBody: noteBody,
                createdAt: serverTimestamp(),
            })
            await Swal.fire("Nice!", "Your note was saved and is safe!", "success");
            evt.target.reset();
        } catch (error) {
            await Swal.fire("Oops!", `${error.message}`, "error");
        }
        let results = (await GetDocuments("notes", "noteOwner"));
        setNotes(results)
    }
    
    return (
        <div>
            <div className={"notes-flexbox"}>
                <div className={'notes-grid'}>
                    <div className={'notes-form'}>
                        <h1>Hello, {auth.currentUser.displayName}!</h1>
                        <p>This is a place for you to jot down your thoughts.</p>
                    </div>
                    <form className={'notes-form'} onSubmit={evt => addNote(evt)}>
                        <input type="text" className={'notes-title'} placeholder={"Title"} onChange={(evt) => setNoteTitle(evt.target.value)}/>
                        <textarea className={'notes-body'} placeholder={"Enter your note here :)"} onChange={(evt) => setNoteBody(evt.target.value)}/>
                        <button type={'submit'}>Create new note</button>
                    </form>
                </div>
                {/*Map This*/}
                <div className={"notes-grid"}>
                    {NoteTabs(notes)}
                </div>
                {/*<div className={"note-container"}>*/}
                {/*    <h1>Note Title</h1>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut*/}
                {/*        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco*/}
                {/*        laboris nisi ut aliquip ex ea commodo consequat.</p>*/}
                {/*    <button>Delete</button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}