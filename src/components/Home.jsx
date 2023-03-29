import React, { Component } from 'react'
import Caraousel from './Caraousel'
import ConferenceDet from './ConferenceDet'
import HomeItems from './HomeItems'

export class Home extends Component {
  render() {
    return (
      <div>
        <Caraousel />
        <ConferenceDet />
      </div>
    )
  }
}

export default Home