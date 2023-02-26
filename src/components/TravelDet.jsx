import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class TravelDet extends Component {
  render() {
    return (
      <div className="m-4">
        <div className="text-center mx-5 d-flex flex-column flex-lg-row flex-md-row justify-content-around">
            <div className="col-lg-3 btn btn-success mx-3 my-2"><Link className="nav-link" to="/dumdum">From Dumdum Airport</Link></div>
            <div className="col-lg-3 btn btn-success mx-3 my-2"><Link className="nav-link" to="/howrah">From Howrah Railway Station</Link></div>
            <div className="col-lg-3 btn btn-success mx-3 my-2"><Link className="nav-link" to="/sealdah">From Sealdah Railway Station</Link></div>
            <div className="col-lg-3 btn btn-success mx-3 my-2"><Link className="nav-link" to="/kolkata">From Kolkata Railway Station</Link></div>
        </div>
        <h3>Travel Information</h3>
        <p style={{textAlign: 'justify'}}>
One can enter the Jadavpur University campus through four gates: Gate No. 1 (3 minutes walking distance from Jadavpur Rail Station), Gate No. 2 (opposite to Jadavpur 8B Bus Stand, 2 minutes walking distance from Gate No. 1), Gate No. 3 (near to Jadavpur University Post Office, 2 minutes walking distance from Gate No. 2), Gate No. 4 (at Bengal Lamp Bus Stop, 2 minutes walking distance from Gate No. 3 and 4 minutes walking distance from Jadavpur Police Station). Car and Taxi will pass only through Gate No. 4 which remains open 24 hours. Other gates remain open only during working hours (9 a.m. to 9 p.m. except Saturday, Sunday and holidays). One can reach the venue (Department of Mathematics) from Gate No. 1, Gate No. 2, Gate No. 3 and Gate No. 4 by walking about 7 minutes, 7 minutes, 5 minutes and 3 minutes respectively.</p>
        
      </div>
    )
  }
}

export default TravelDet