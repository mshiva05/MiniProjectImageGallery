import React, { useState } from 'react'
import { getAuth, signOut } from 'firebase/auth'

export default function Logout() {
  const [isLoggedin, setisLoggedin] = useState(true)
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      setisLoggedin(false)
    })
    .catch((error) => {
      setisLoggedin(true)
    })

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontWeight: '900', color: 'red' }}> Logout successful </h1>
    </div>
  )
}
