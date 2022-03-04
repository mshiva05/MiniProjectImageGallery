import React, { useRef, useState, useEffect } from 'react'
import Image from './image'
import axios, * as others from 'axios'
import useScroll from '../utilities/hooks/useScroll'
import useFetchImages from '../utilities/hooks/usefetchImages'
import InfiniteScroll from 'react-infinite-scroll-component'

const url = process.env.REACT_APP_UNSPLASH_URL
const secret = process.env.REACT_APP_UNSPLASH_KEY

function ImageGallery() {
  const [page, setPage] = useState(1)
  const [searchString, setsearchString] = useState(null)
  const [imageData, setImageData, error, isLoading] = useFetchImages(
    page,
    searchString,
  )
  const [newImageURL, setnewImageURL] = useState('')
  const scrollposition = useScroll()

  // to remove selected image from array using filter method
  function handleRemove(index) {
    setImageData(imageData.filter((image, i) => i != index))
  }

  function setPageData() {
    setInterval(() => {
      setPage(page + 1)
    }, 1000)
  }

  //component within component- to render image and font awesoem icon
  function ShowImages() {
    return (
      <InfiniteScroll
        dataLength={imageData.length}
        scrollThreshold={`1100px`}
        
        hasMore={true}
        use
      >
        {console.log(`page value in infinye csroll ${page}`)}
        {imageData.map((img, index) => (
          <Image
            image={img.urls.regular}
            index={index}
            handleRemove={handleRemove}
          />
        ))}
      </InfiniteScroll>
    )
  }
  //after clicking button, destructure array and add new url
  function handleAdd() {
    if (newImageURL != '') {
      setImageData([newImageURL, ...imageData])
      setnewImageURL('')
    }
  }
  //trigger after url is added in input and get url to state
  function handleChange(event) {
    setnewImageURL(event.target.value)
  }

  //to focus on input type after mounting
  const inputRef = useRef()

  // infinite scroll using custom hook
  // useEffect(() => {
  //   if (scrollposition >= document.body.offsetHeight - window.innerHeight) {
  //     setPage(page + 1)
  //   }
  // }, [scrollposition])

  const [typingTimeout, setTypingTimeout] = useState('')
  function handleInput(e) {
    const text = e.target.value
    clearTimeout(typingTimeout)
    const timeout = setTimeout(() => {
      setsearchString(text)
    }, 1000)
    setTypingTimeout(timeout)
  }
  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <section>
          <div>
            <input
              type="text"
              onChange={handleInput}
              className="w-full border rounded shadow"
              placeholder="enter keyword for pics"
            ></input>
          </div>
          {scrollposition}
          <div className="" style={{ columnCount: '3' }}>
            <ShowImages />
          </div>

          <button
            className="border-gray-800 black-900 text-black"
            onClick={() => setPage(page + 1)}
          >
            load more
          </button>

          <div className="flex justify-around my-5 ">
            <input
              type="input"
              ref={inputRef}
              value={newImageURL}
              onChange={handleChange}
              className="p-2 border border-gray-800 shadow rounded w-full"
            ></input>
            <button
              className="p-2 bg-green-600 text-white "
              onClick={handleAdd}
            >
              add new{' '}
            </button>
          </div>
        </section>
      )}
    </>
  )
}
export default ImageGallery
