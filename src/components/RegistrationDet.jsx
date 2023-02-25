import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class RegistrationDet extends Component {
  render() {
    return (
      <div className="text-center m-5 d-flex flex-column flex-lg-row flex-md-row justify-content-around" style={{backgroundImage: "url('https://static.wixstatic.com/media/9060071fa0ea43ba92de11348b5a9c4f.jpg/v1/fill/w_977,h_501,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9060071fa0ea43ba92de11348b5a9c4f.jpg')"}}>
        <div className="col-4 bg-primary p-5 rounded m-3">
            <h2 style={{color: 'white'}}>Registration Fees:</h2>
            <p style={{color: 'white'}}>Faculty/ Academician: Rs. 4,000/-(Indian)</p>
            <p style={{color: 'white'}}>Research Scholar: Rs. 3,000/-(Indian)</p>
            <p style={{color: 'white'}}>Accompanying Person: Rs. 3,000/-(Indian)</p>
            <p style={{color: 'white'}}>Faculty/ Academician: $ 300 (Foreign)</p>
            <p style={{color: 'white'}}>Research Scholar: $ 200 (Foreign)</p>
            <p style={{color: 'white'}}>Accompanying Person: $ 200 (Foreign)</p>
        </div>
        <div className="col-4"></div>
        <div className="col-4">
            <div className="bg-warning p-3 rounded m-3">
                <h2>Instructions:</h2>
                <p>Step 1: Click below and download the registration form.</p>
                <p>Step 2: Fill the form carefully.</p>
                <p>Step 3: Scan the filled form and send it through mail.</p>
                <p>(E-mail: icmaam2023@gmail.com)</p>
            </div>
            <Link target="_blank" to="https://f034d5c1-0863-42ee-9de7-2b1c3a8fe020.filesusr.com/ugd/485cee_4ae972cd221948d49cc45459e92996e5.pdf"><button className="btn btn-success m-2">Download</button></Link>
        </div>
      </div>
    )
  }
}

export default RegistrationDet