import React, { useState, useEffect } from 'react'
import ImageGallery from './imageGallery'
import '../assests/style.css'

function Gallery(props) {
  const [title, setTitle] = useState(props.title)
  const [color, setColor] = useState(props.color)

  return (
    <section className="flex  justify-center">
      <div className="w-100%">
        <div className="text-center">
          <h1
            style={{
              backgroundColor: color,
              fontWeight: 900,
              fontSize: '2rem',
            }}
          >
            "Hello ppl react and hooks"
          </h1>
          <div className="my-4"> {title}</div>
          <ImageGallery />
        </div>
      </div>
    </section>
  )
}

export default Gallery
