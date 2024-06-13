import React, { useContext, useState } from "react";
import noteContext from '../../context/notes/NoteContext';

const NoteForm = () => {

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const context = useContext(noteContext)
  const { addNote } = context;

  const handleClick = (e) => {

    let title = note.title;
    let description = note.description;

    if (!title || !description) {
      e.preventDefault();
      return alert("Title or Description cannot be empty");
    } else {
      if (title.length < 3 || description.length < 5) {
        e.preventDefault();
        return alert("Title must be atleast  3 characters and Description must be atleast 5 characters");
    } 
  }

    addNote(title, description, "General");
    setNote({ title: "", description: "", tag: "" });
    e.preventDefault();

  };
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>

      <h3 className="my-3 text-center">Add a Note</h3>
      <form>
        <div className="mb-3 my-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="exampleInputPassword1"
            onChange={handleChange}
            value={note.description}
          />
        </div>
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Add Note
        </button>
      </form>
    </>
  );
};

export default NoteForm;
