import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class RegistrationDet extends Component {
  render() {
    return (
      <div className="text-center m-5 d-flex flex-column flex-lg-row flex-md-row justify-content-around align-items-center" style={{backgroundImage: "url('https://static.wixstatic.com/media/9060071fa0ea43ba92de11348b5a9c4f.jpg/v1/fill/w_977,h_501,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9060071fa0ea43ba92de11348b5a9c4f.jpg')"}}>
        <div className="g-col-4 bg-primary p-5 rounded m-3">
            <h2 style={{color: 'white'}}>Registration Fees:</h2>
            <p style={{color: 'white'}}>Faculty/ Academician: Rs. 4,000/-(Indian)</p>
            <p style={{color: 'white'}}>Research Scholar: Rs. 3,000/-(Indian)</p>
            <p style={{color: 'white'}}>Accompanying Person: Rs. 3,000/-(Indian)</p>
            <p style={{color: 'white'}}>Faculty/ Academician: $ 300 (Foreign)</p>
            <p style={{color: 'white'}}>Research Scholar: $ 200 (Foreign)</p>
            <p style={{color: 'white'}}>Accompanying Person: $ 200 (Foreign)</p>
        </div>
        <div className="g-col-4"></div>
        <div className="g-col-4">
            <div className="bg-warning p-3 rounded m-3 justify-content-around">
                <h2>Instructions:</h2>
                <p>Step: Open the link and submit the form.</p>
            </div>
            <Link target="_blank" to="https://docs.google.com/forms/d/e/1FAIpQLSfQw8wHPuiUZpQWRb_yMwYyuuuh7KIi4p2df-_sy7BQk467SQ/viewform?usp=pp_url "><button className="btn btn-success m-2">Go To Form</button></Link>
        </div>
      </div>
    )
  }
}

export default RegistrationDet