import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: ""
  });
  let navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),

      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("token", json.authToken);
        navigate("/");
        // props.showAlert("Logged in successfully", "success")
      } else {
        alert("Invalid Credentials");
      }

    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className='container'>
      <h3 className="my-3 text-center">Sign Up</h3>
      <form onSubmit={handleClick}>
        <div className="mb-3 my-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={credentials.name}
            required
            min={5}
          />
        </div>
        <div className="mb-3 my-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={credentials.email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="exampleInputPassword1"
            onChange={handleChange}
            value={credentials.password}
            required
            min={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="cPassword"
            id="cPassword"
            required
            min={5}
          />
        </div>
        <button
          type="submit"
          className="text-center btn btn-primary"
        >
          Sign Up
        </button>
      </form>
      </div>
    </>
  );
};

export default Signup;
