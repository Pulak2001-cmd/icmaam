import React, { Component } from 'react'
import Menu from './Menu'
import TopBar from './TopBar'

export class Speakers extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Menu />
      </div>
    )
  }
}

export default Speakers