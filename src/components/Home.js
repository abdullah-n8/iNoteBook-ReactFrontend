import React from 'react'
import NoteForm from './Notes Components/NoteForm'
import NotesContainer from './Notes Components/Notes'


const Home = () => {
  return (
    <div className='container'>
    <NoteForm />
    <NotesContainer />
    </div>
  )
}

export default Home