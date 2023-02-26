import React, { Component } from 'react'
import Map from './Map'

export class HowrahDet extends Component {
  render() {
    return (
        <div className="m-5">
        <h3>From Howrah Railway Station to Venue</h3>
        <ul>
            <li>There are many buses at Station which reach you Jadavpur University (Gate No. 4) at Bengal Lamp or Jadavpur 8B Bus Stand (45 minutes approximately). For convenience, we would like to mention some buses like: E1 (get down at Gate 4/Bengal Lamp), AC1 (get down at Gate 4/Bengal Lamp).</li>
            <li>From Station, Taxi may directly reach you the venue Department of Mathematics (Approx. 35 minutes) through Gate No. 4 at Bengal Lamp.</li>
        </ul>
        <div className="text-center mx-5 d-flex flex-column flex-lg-row flex-md-row justify-content-around my-2">
            <div className="col-lg-3 m-2">
                <Map Lat={22.595770} Lng={88.263641} Name="Howrah Railway Station, Howrah, West Bengal, India" />
            </div>
            <div className="col-lg-3 m-2">
                <Map Lat={22.499313} Lng={88.371849} Name="Jadavpur, Kolkata, West Bengal 700032, India" />
            </div>
        </div>
      </div>
    )
  }
}

export default HowrahDet