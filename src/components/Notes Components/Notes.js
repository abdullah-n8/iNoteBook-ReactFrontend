import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getAllNotes, editNote } = context;

  useEffect(() => {
    getAllNotes();
  }, []);

  const [note, setNote] = useState({id: "", etitle: "", edescription: "" });

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description
    });
    
    ref.current.click();
  };

  const handleClick = (e) => {
   
    editNote(note.id, note.etitle, note.edescription, "General");
    e.preventDefault();
   refClose.current.click();
 };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />

      <button
        ref={ref}
        type="button"
        className="d-none btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    value={note.etitle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="edescription"
                    id="edescription"
                    onChange={handleChange}
                    value={note.edescription}
                  />
                </div>
              </div>
            </form>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div >

      <div className="container">
        <h3 className="text-center my-3">Your Notes</h3>
        <div className="container row">
      
          {notes.length === 0 ? 
            <div
              style={{ color: "gray" }}
              className="my-4 text-center container"
            >
              <h4>No notes to display</h4>
              <h5>Try to add a note!!</h5>
            </div> : notes.map((note) => (
            <NoteItem key={note._id} note={note} updateNote={updateNote} />
          ))}
        </div>
      </div>
    </>
  )
};

export default Notes;
