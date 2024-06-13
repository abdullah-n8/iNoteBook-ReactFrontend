import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Notes from './Notes Components/Notes';
import Navbar from './Navbar';





const Home = () => {

  let navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('token')) {
      navigate('/login')
    } else {
      navigate('/')
    }
  }, [])

  return (
    <>

    <div className='container'>
    <Notes />
    </div>
    </>
  )
}

export default Home