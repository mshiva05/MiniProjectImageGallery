import React, { Component, useState, useEffect } from 'react'

// class Image extends Component {
//   constructor() {
//     super()
//     console.log('Images constructor')
//   }
//   componentDidUpdate() {
//     console.log('Images updated')
//   }
//   componentDidMount() {
//     console.log('Images mounted')
//   }
//   componentWillUnmount() {
//     console.log('Images unmounted')
//   }
//   render() {
//     console.log('Images rendered')
//     return (
//       <div>
//         <img src="https://images.pexels.com/photos/57901/pexels-photo-57901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
//       </div>
//     )
//   }
// }

Image = () => {
  const [images, setImages] = useState([
    'https://images.pexels.com/photos/3255543/pexels-photo-3255543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

    'https://images.pexels.com/photos/11158413/pexels-photo-11158413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

    'https://images.pexels.com/photos/9786969/pexels-photo-9786969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

    'https://images.pexels.com/photos/9724071/pexels-photo-9724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

    'https://images.pexels.com/photos/57901/pexels-photo-57901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  ])

  // useEffect(() => {
  //   console.log('Images mounted')
  //   const setmyInterval = setInterval(() => {
  //     console.log('hello')
  //   }, 1000)
  //   // unmount using react -useEffectHook
  //   return () => {
  //     console.log('Images unmounted')
  //     clearInterval(setmyInterval)
  //   }
  // }, [])

  const [newImageURL, setnewImageURL] = useState('')
  function ShowImages() {
    return images.map((image) => {
      return (
        <div className="w-1/3">
          <img src={image} style={{ width: 150, height: '100px' }}></img>
        </div>
      )
    })
  }

  function handleAdd() {
    if (newImageURL != '') {
      setImages([newImageURL, ...images])
      setnewImageURL('')
    }
  }

  function handleChange(event) {
    setnewImageURL(event.target.value)
  }
  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImages />
      </div>
      <div className="flex justify-around my-5">
        <input
          type="input"
          value={newImageURL}
          onChange={handleChange}
          className="p-2 border border-gray-800 shadow rounded"
        ></input>
        <button className="p-2 bg-green-600 tetx-white" onClick={handleAdd}>
          add new{' '}
        </button>
      </div>
    </section>
  )
}
export default Image
