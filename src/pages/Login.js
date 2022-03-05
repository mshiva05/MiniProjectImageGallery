import React, { useState } from 'react'
import firebase from '../firebase/firebaseconfig'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'

export default function Login(props) {
  console.log('inside login page')

  const [error, seterror] = useState('')
  const [forminput, setforminput] = useState({ email: '', password: '' })
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const navigate = useNavigate()
  function handleFormChange(e) {
    setforminput({ ...forminput, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const auth = getAuth()
    signInWithEmailAndPassword(auth, forminput.email, forminput.password)
      .then((result) => {
        setisLoggedIn(true)
        navigate('/gallery/loggedin')
        props.customProp(true)
        console.log(props.customProp)
      })
      .catch((error) => {
        seterror(error.message)
      })
  }

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-blue-300">
        <h1
          style={{
            fontWeight: '500',
            width: 200,
            margin: 'auto',
            textAlign: 'center',
          }}
        >
          login to the service
        </h1>
        <form className="m-5 w-10/12" onSubmit={handleSubmit}>
          {error != '' && <p className="text-red-500">{error}</p>}

          <h1>Login</h1>
          <div className="w-full my-6">
            <input
              type="email"
              placeholder="mail@email.com"
              className="p-2 rounded shadow w-full text-black"
              name="email"
              value={forminput.email}
              onChange={handleFormChange}
            ></input>
          </div>
          <div className="w-full my-6">
            <input
              type="password"
              placeholder="password"
              className="p-2 rounded shadow w-full text-black "
              name="password"
              value={forminput.password}
              onChange={handleFormChange}
            ></input>
          </div>
          <div className="w-1/2 m-auto bg-blue-800">
            <button type="submit" className="p-2 rounded shadow w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
