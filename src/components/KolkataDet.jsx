import React, { Component } from 'react'
import Map from './Map'

export class KolkataDet extends Component {
  render() {
    return (
        <div className="m-5">
        <h3>From Sealdah Kolkata Station to Venue</h3>
        <p>From Kolkata Station, Taxi may directly reach you the venue Department of Mathematics (Approx. 80 minutes) through Gate No. 4 at Bengal Lamp.</p>
        <div className="text-center mx-5 d-flex flex-column flex-lg-row flex-md-row justify-content-around my-2">
            <div className="col-lg-3 m-2">
                <Map Lat={22.60129783798892} Lng={88.37946130174645} Name="Sealdah station, BB Ganguly Street, Raja Bazar, Kolkata, West Bengal 700014, India" />
            </div>
            <div className="col-lg-3 m-2">
                <Map Lat={22.499313} Lng={88.371849} Name="Jadavpur, Kolkata, West Bengal 700032, India" />
            </div>
        </div>
      </div>
    )
  }
}

export default KolkataDet