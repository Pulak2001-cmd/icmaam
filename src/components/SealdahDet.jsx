import React, { Component } from 'react'
import Map from './Map'

export class SealdahDet extends Component {
  render() {
    return (
      <div className="m-5">
        <h3>From Sealdah Railway Station to Venue</h3>
        <ul>
            <li>There are many buses at Sealdah which reach you Jadavpur University Gate No. 4 (Bengal Lamp) (45 minutes approximately). For convenience, we would like to mention some buses like: Bus No. 45 (very frequent), K8 (get down at Gate 4/Bengal Lamp, or Jadavpur 8B Bus Stand).</li>
            <li>From Sealdah, Taxi may directly reach you the venue Department of Mathematics (Approx. 30 minutes) through Gate No. 4 at Bengal Lamp.</li>
            <li>There are many trains from Sealdha Station (south section) which reach you Jadavpur Railway Station (20 minutes approximately). Jadavpur University 1 No. gate is 3 minutes walking distance from Jadavpur Railway Station.</li>            
        </ul>
        <div className="text-center mx-5 d-flex flex-column flex-lg-row flex-md-row justify-content-around my-2">
            <div className="col-lg-3 m-2">
                <Map Lat={22.567764} Lng={88.370946} Name="Sealdah station, BB Ganguly Street, Raja Bazar, Kolkata, West Bengal 700014, India" />
            </div>
            <div className="col-lg-3 m-2">
                <Map Lat={22.50082029467077} Lng={88.37143577635288} Name="Jadavpur, Kolkata, West Bengal 700032, India" />
            </div>
        </div>
      </div>
    )
  }
}

export default SealdahDet