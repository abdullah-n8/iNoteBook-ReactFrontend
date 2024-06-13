import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";


const Navbar = (props) => {

  let navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("token")
    navigate("/login")
  }
  let navLinkDisplay;

  if(props.disabled === true) {
    navLinkDisplay = "disabled"
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">iNoteBook</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={`nav-link ${navLinkDisplay}`} aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${navLinkDisplay}`} to="/about">About</NavLink>
              </li>
            </ul>

          </div>
          <div className='d-flex'>
            {!localStorage.getItem("token") ? <><NavLink className="btn btn-primary mx-2" to="/login" role="button">Login</NavLink>
          <NavLink className="btn btn-primary mx-2" to="/signup" role="button">Signup</NavLink>
          </>
              : <button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar