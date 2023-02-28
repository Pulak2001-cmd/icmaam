import React, { Component } from 'react'
import Caraousel from './Caraousel6'
import ContactDet from './ContactDet'
import Menu from './Menu'
import TopBar from './TopBar'

export class Contact extends Component {
  render() {
    return (
      <div>
        <Caraousel />
        <ContactDet />
      </div>
    )
  }
}

export default Contact