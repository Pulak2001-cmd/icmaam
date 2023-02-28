import React, { Component } from 'react'
import Caraousel from './Caraousel4'
import Menu from './Menu'
import TopBar from './TopBar'
import UniversityDet from './UniversityDet'

export class UniversityAbout extends Component {
  render() {
    return (
      <div>
        <Caraousel />
        <UniversityDet />
      </div>
    )
  }
}

export default UniversityAbout