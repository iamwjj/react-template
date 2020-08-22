import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id='app'>
        <h1>React App</h1>
      </div>
    )
  }
}

export default hot(App)