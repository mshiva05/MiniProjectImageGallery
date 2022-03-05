import React, { useState } from 'react'
import '../assests/style.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Galary from '../pages/Galary'
import Logout from '../pages/Logout'

function Gallery(props) {
  const [isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <Router>
      <nav className="py-5 bg-gray-900 text-white flex justify-between">
        <span>
          <Link to="/home" className="mx-5">
            home
          </Link>
          {isLoggedIn ? (
            <Link to="/gallery/loggedin" className="mx-5">
              gallery
            </Link>
          ) : (
            <Link to="/gallery" className="mx-5">
              gallery
            </Link>
          )}
        </span>
        {isLoggedIn ? (
          <Link to="/logout" className="mx-5">
            logout
          </Link>
        ) : (
          <Link to="/login" className="mx-5">
            login
          </Link>
        )}
      </nav>
      <Routes>
        <Route path={'/home'} element={<Home></Home>}></Route>
        <Route path={'/gallery/loggedin'} element={<Galary></Galary>}></Route>
        <Route
          path={'/logout'}
          element={<Logout customProp={handleData}></Logout>}
        ></Route>
        <Route
          path={'/login'}
          element={<Login customProp={handleData}></Login>}
        ></Route>
        <Route
          path={'/gallery'}
          element={
            <Login>
              <Galary></Galary>
            </Login>
          }
        ></Route>
      </Routes>
    </Router>
  )

  function handleData(value) {
    setisLoggedIn(value)
  }
}

export default Gallery
