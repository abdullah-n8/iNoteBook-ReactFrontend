import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "6665ac832eda14fa61866bc9",
            "userID": "6665a07eca7cec36a3319c92",
            "title": "Updated Note",
            "description": "Successfuly updated the note1",
            "tag": "Work",
            "date": "2024-06-09T13:22:11.569Z",
            "__v": 0
          },
          {
            "_id": "6665ac842eda14fa61866bcb",
            "userID": "6665a07eca7cec36a3319c92",
            "title": "My Note",
            "description": "wake up.",
            "tag": "personal",
            "date": "2024-06-09T13:22:12.264Z",
            "__v": 0
          },
          {
            "_id": "6665ac842eda14fa61866bcd",
            "userID": "6665a07eca7cec36a3319c92",
            "title": "Shitty Note",
            "description": "Successfuly updated the note1",
            "tag": "Work",
            "date": "2024-06-09T13:22:12.419Z",
            "__v": 0
          },
        {
            "_id": "6665ac832eda14fa61866bc9",
            "userID": "6665a07eca7cec36a3319c92",
            "title": "Updated Note",
            "description": "Successfuly updated the note1",
            "tag": "Work",
            "date": "2024-06-09T13:22:11.569Z",
            "__v": 0
          },
          {
            "_id": "6665ac842eda14fa61866bcb",
            "userID": "6665a07eca7cec36a3319c92",
            "title": "My Note",
            "description": "wake up.",
            "tag": "personal",
            "date": "2024-06-09T13:22:12.264Z",
            "__v": 0
          },
          {
            "_id": "6665ac842eda14fa61866bcd",
            "userID": "6665a07eca7cec36a3319c92",
            "title": "Shitty Note",
            "description": "Successfuly updated the note1",
            "tag": "Work",
            "date": "2024-06-09T13:22:12.419Z",
            "__v": 0
          },
        {
            "_id": "6665ac832eda14fa61866bc9",
            "userID": "6665a07eca7cec36a3319c92",
            "title": "Updated Note",
            "description": "Successfuly updated the note1",
            "tag": "Work",
            "date": "2024-06-09T13:22:11.569Z",
            "__v": 0
          },
          {
            "_id": "6665ac842eda14fa61866bcb",
            "userID": "6665a07eca7cec36a3319c92",
            "title": "My Note",
            "description": "wake up.",
            "tag": "personal",
            "date": "2024-06-09T13:22:12.264Z",
            "__v": 0
          },
          {
            "_id": "6665ac842eda14fa61866bcd",
            "userID": "6665a07eca7cec36a3319c92",
            "title": "Shitty Note",
            "description": "Successfuly updated the note1",
            "tag": "Work",
            "date": "2024-06-09T13:22:12.419Z",
            "__v": 0
          }
      ];

      const [notes, setNotes] = useState(initialNotes);

  return (
    <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
