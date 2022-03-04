import React, { useState } from 'react'

export default function Image({ image, index, handleRemove }) {
  const [inhover, setHover] = useState(false)

  return (
    <div className="p-2 border my-4 flex justify-center " key={index}>
      <div className="relative">
        {
          <i
            className="fas fa-times absolute right-0 cursor-pointer"
            onClick={() => handleRemove(index)}
          ></i>
        }
        <img
          src={image}
          key={index}
          style={{ width: '100%', height: 'auto' }}
        ></img>
      </div>
    </div>
  )
}
