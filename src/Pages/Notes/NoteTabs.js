import React from 'react'
import './Notes.css'
import {auth} from "../../firebase/config";

export const NoteTabs = (notes) => {
    return (
        <>
            {/*Map This*/}
            {notes.map((note) => (
            <div className={"note-container"} key={note.id}>
                <h1>{note.noteTitle}</h1>
                <p>{note.noteBody}</p>
                <button>Delete</button>
            </div>))}
        </>
    )
}

export default NoteTabs