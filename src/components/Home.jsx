import React, { Component } from 'react'
import Caraousel from './Caraousel'
import Footer from './Footer'
import HomeItems from './HomeItems'
import Menu from './Menu'
import TopBar from './TopBar'

export class Home extends Component {
  render() {
    return (
      <div>
        <Caraousel />
        <HomeItems />
      </div>
    )
  }
}

export default Home