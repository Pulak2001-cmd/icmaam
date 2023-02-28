import React, { Component } from 'react'
import Caraousel from './Caraousel'
import HomeItems from './HomeItems'

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