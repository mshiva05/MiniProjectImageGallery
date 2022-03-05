import React, { Component } from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date(), title: 'Show time using React component ' }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({ date: new Date() })
  }
  render() {
    return (
      <div style={{ textAlign: 'center', fontWeight: '900' }}>
        <h1>Hello React</h1>
        <h2>{this.state.title} </h2>
        <img
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Horlo%C4%9Do_001.svg/300px-Horlo%C4%9Do_001.svg.png"
          alt=""
        ></img>
        <h2> current time is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
