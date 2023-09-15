import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class RegistrationDet extends Component {
  render() {
    return (
      <div className="m-5 d-flex flex-column flex-lg-row flex-md-row justify-content-around align-items-center" style={{backgroundImage: "url('https://static.wixstatic.com/media/9060071fa0ea43ba92de11348b5a9c4f.jpg/v1/fill/w_977,h_501,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9060071fa0ea43ba92de11348b5a9c4f.jpg')",  backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="g-col-4 bg-primary p-1 p-lg-3 p-md-3 rounded m-3">
            <h2 style={{color: 'white'}}>Registration Fees:</h2>
            <ol style={{color: 'white', fontSize: 16}}>
              <li>
                  Foreign Participants: (Without Accomodation)
                  <ul>
                    <li>Faculty members - US $200</li>
                    <li>Faculty members Third-World Countries - US $150</li>
                    <li>Students/Research Scholars - US $100</li>
                    <li>Students/Research Scholars (Third-World countries) - US $75</li>
                  </ul>
              </li>
              <li>
                  Indian Participants (Including 18% GST):
                  <ul>
                    <li>Faculty members with accomodation (Double Sharing) - Rs. 7000</li>
                    <li>Faculty members without accomodation - Rs. 4000</li>
                    <li>Students with accomodation (Double Sharing) - Rs. 5000</li>
                    <li>Students without accomodation - Rs. 3000</li>
                  </ul>
              </li>
              <li>
                  JU Participants:
                  <ul>
                    <li>Scholars/students - Rs. 2500</li>
                    <li>Faculty - Rs. 3500</li>
                  </ul>
              </li>
            </ol>
            <ul style={{color: 'white'}}>
              <li>Registration fees are not required especially for plenary and invited speakers.</li>
              <li>Participants are requested to kindly note that the registration fees can be paid in offline mode also but submitting the duly filled Google form is mandatory for confirmation of the participation.</li>
              <li>Registration fees can be paid in the registration desk on the Conference day.</li>
            </ul>
            {/* <p style={{color: 'white'}}>Faculty/ Academician (Without accomodation): Rs. 4,000/-(Indian)</p>
            <p style={{color: 'white'}}>Research Scholar: Rs. 3,000/-(Indian)</p>
            <p style={{color: 'white'}}>Accompanying Person: Rs. 3,000/-(Indian)</p>
            <p style={{color: 'white'}}>Faculty/ Academician: $ 300 (Foreign)</p>
            <p style={{color: 'white'}}>Research Scholar: $ 200 (Foreign)</p>
            <p style={{color: 'white'}}>Accompanying Person: $ 200 (Foreign)</p> */}
        </div>
        <div className="g-col-4"></div>
        <div className="g-col-4">
            <div className="bg-warning p-3 rounded m-3 justify-content-around">
                <h2>Instructions:</h2>
                <p>Step 1: Check registration fee for your category</p>
                <p>Step 2: Payment of Registration fees will be accepted only in cash . we are requested to everyone, avoid paying registration fees  in online mode</p>
                <p>Step 3: Due to the huge demand from the Participants from diferent region,the last date of registration is extended upto 24th of Septembar 2023. </p>
            </div>
            <Link target="_blank" to="https://docs.google.com/forms/d/e/1FAIpQLSfQw8wHPuiUZpQWRb_yMwYyuuuh7KIi4p2df-_sy7BQk467SQ/viewform?usp=pp_url "><button className="btn btn-success m-2">Go To Form</button></Link>
        </div>
      </div>
    )
  }
}

export default RegistrationDet
