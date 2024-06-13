import React, { useContext, useState } from "react"
import noteContext from "../../context/notes/NoteContext";

const NoteItem = (props) => {

    const { note, updateNote } = props;
    const [currentNote, setCurrentNote] = useState({title: "", description: "", tag: ""})

    const context = useContext(noteContext)
    const {deleteNote} = context;

    return (
        <div className=" card my-2 mx-5 col-md-3">
            <div className="card-body">
                <div className="my-2 d-flex align-items-center justify-content-between">
                    <h5 className="card-title">{note.title}</h5>
                    <div>
                    <i className="fa-solid fa-trash mx-2" onClick={() => {deleteNote(note._id)}}></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={() => {
                        updateNote(note)
                    }}></i>
                    </div>
                </div>
                <p className="card-text">{note.description}  </p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>

    )
}

export default NoteItem