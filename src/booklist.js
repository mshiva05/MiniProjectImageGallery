import React from 'react'
import ReactDOM from 'react-dom'

function Booklist() {
  return (
    <>
      <Bookname />,
      <Bookname />,
      <Bookname />
    </>
  )
}

let Bookname = () => {
  return (
    <>
      <img
        style={{ borderRadius: '10%' }}
        src="https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UY218_.jpg"
        alt="sisko"
      ></img>
      <name className="bg-gray-200">
        Life's Amazing Secrets: How to Find Balance and Purpose in Your Life |
        Inspirational Zen book on motivation, self-development & healthy living
      </name>
      <br />
      <author>Gaur Gopal Das</author>
    </>
  )
}

export default Booklist
