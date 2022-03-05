import React from 'react'
import { getAuth, signOut } from 'firebase/auth'

export default function Logout() {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    })
  // { width: '100vw', marginRight: 'auto', marginLeft: 'auto' }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontWeight: '900', color: 'red' }}> Logout successful </h1>
    </div>
  )
}
