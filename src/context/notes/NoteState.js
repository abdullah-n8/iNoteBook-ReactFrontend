import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
        
        const host = "http://localhost:5000"

      const [notes, setNotes] = useState([]);

        const getAllNotes = async () => {

          try {
            const response = await fetch(`${host}/api/notes/getall`, {
                method: 'GET',
                headers: {
                    "auth-token": localStorage.getItem("token")
                }
            })
            const json = await response.json()
            setNotes(json)
          } catch (error) {
            console.log(error)
        }
      }

  const addNote = async (title, description, tag) => {  
    
    // API Call

    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({title, description, tag})
      })

      const note = await response.json();
      setNotes(notes.concat(note));
    } catch (error) {
      console.log(error)
    }


    // const note = {
    //     "_id": "6665ac832eda14fa61866bc94",
    //     "userID": "6665a07eca7cec36a3319c92",
    //     "title": title,
    //     "description": description,
    //     "tag": tag,
    //     "date": "2024-06-09T13:22:11.569Z",
    //     "__v": 0
    //   };
    //   setNotes(notes.concat(note));
  }

  const deleteNote = async (id) => {

    // API Call
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          "auth-token": localStorage.getItem("token")
        }
      });
    } catch (error)  {
      console.log(error)
    }



    setNotes(notes.filter((note) => note._id !== id));
  }

  const editNote = async (id, title, description, tag) => {

    // API Call
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({title, description, tag})
      }) 
    } catch (error)  {
      console.log(error)
    }


    // Logic to edit in client


    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }  
    setNotes(newNotes); 
  }

  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getAllNotes}}>
        {props.children}
    </NoteContext.Provider>
  )
}



export default NoteState