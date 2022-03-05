import React, { useState, useEffect } from 'react'
import Image from './components/images'
import './index.css'

// class based component using state and lifecyel methods
// class Sisko extends React.Component {
//   constructor(props) {
//     console.log('App constructor')
//     super(props)
//     this.state = { title: 'hello react world', isshowing: false }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   componentDidMount() {
//     console.log('App mounted')
//     this.setState({ title: 'Hello sisko react using mount' })
//   }
//   componentDidUpdate() {
//     console.log('App updated')
//   }

//   handleClick() {
//     console.log('App handle click')
//     this.setState({ isshowing: !this.state.isshowing })
//   }

//   render() {
//     console.log('App render')
//     return (
//       <section className="flex  justify-center">
//         <div className="w-1/2">
//           <div className="text-center">
//             <div className="my-4"> {this.state.title}</div>
//             <button
//               className="p-1 bg-blue-600 text-white my-2"
//               onClick={this.handleClick}
//             >
//               Toggle Image
//             </button>
//             {this.state.isshowing ? <Image /> : null}
//           </div>
//         </div>
//       </section>
//     )
//   }
// }

function Sisko(props) {
  const [title, setTitle] = useState(props.title)
  const [color, setColor] = useState(props.color)
  const [isShowing, setIsShowing] = useState(false)

  function handleClick() {
    // this.setState({ isshowing: !this.state.isshowing })
    setIsShowing(!isShowing)
  }

  // useEffect(() => {
  //   console.log('Sisko mounted')
  // }, [])

  // useEffect(() => {
  //   console.log('Sisko updated')
  // }, [isShowing])

  return (
    <section className="flex  justify-center">
      <div className="w-1/2">
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
          <button
            className="p-1 bg-blue-600 text-white my-2"
            onClick={handleClick}
          >
            Toggle Image
          </button>
          {isShowing ? <Image /> : null}
        </div>
      </div>
    </section>
  )
}

export default Sisko
