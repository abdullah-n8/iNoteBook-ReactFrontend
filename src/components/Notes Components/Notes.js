import React, {useContext} from 'react'
import noteContext from '../../context/notes/NoteContext';
import NoteItem from './NoteItem';



const NoteContainer = () => {
  
  const context = useContext(noteContext)
  const {notes, setNotes} = context;

  return (
    <div className='container'>
        <h3 className='text-center my-3'>Your Notes</h3>
        <div className='text-center container row'>
        {notes.map( note => <NoteItem note={note} /> )}
        </div>
    </div>
  )
}

export default NoteContainer