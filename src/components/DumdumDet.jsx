import React, { Component } from 'react'
import Map from './Map'

export class DumdumDet extends Component {
  render() {
    return (
      <div className="m-5">
        <h3>From Netaji Subhas Chandra Bose International Airport (Dumdum International Airport) to Venue</h3>
        <ul>
            <li>There are many buses at Airport which reach you Jadavpur Police Station or Jadavpur 8B Bus Stand (100 minutes approximately). For convenience, we would like to mention some buses like: Jadavpur-Airport minibus (get down at Gate 4/Bengal Lamp), Jadavpur-Tollygunge (get down at Jadavpur Police Station).</li>
            <li>Cabs are also available there, just book and come to venue (40 minutes approximately).</li>
        </ul>
        <div className="text-center mx-5 d-flex flex-column flex-lg-row flex-md-row justify-content-around my-2">
            <div className="col-lg-3 m-2">
                <Map Lat={22.65312864370238} Lng={88.44487391552143} Name="Netaji Subhash Chandra Bose International Airport (CCU), Jessore Rd, Dum Dum, Kolkata, West Bengal 700052, India" />
            </div>
            <div className="col-lg-3 m-2">
                <Map Lat={22.50082029467077} Lng={88.37143577635288} Name="Jadavpur, Kolkata, West Bengal 700032, India" />
            </div>
        </div>
      </div>
    )
  }
}

export default DumdumDet