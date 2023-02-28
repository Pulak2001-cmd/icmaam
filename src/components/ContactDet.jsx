import React, { Component } from 'react'

export class ContactDet extends Component {
  render() {
    return (
      <div className="m-4 text-center d-flex flex-lg-row flex-column">
        <div className="g-col-3">
            <h2>Academic and Administrative Support</h2>
            <p className='text-danger fs-4 fw-bold'>
            Prof. Priti Kumar Roy
            </p>
            <p>Organizing secretary
            Department of Mathematics,
            Jadavpur University,
            Kolkata-700032,
            India
            Mob: +91 9432095603
            Phone: +9133 24572736
            E-mail: ptritiju@gmail.com
            </p>
            <p className='text-danger fs-4 fw-bold'>
            Prof. Nandadulal Bairagi
            </p>
            <p>
            Executive secretary
            Department of Mathematics,
            Jadavpur University,
            Kolkata-700032,
            India
            Mobile: +918240618018
            E-mail: pratulananda@yahoo.co.in 
            </p>
        </div>
        <div className="g-col-3">
            <h2>Any Local Assistance or Query About Conference</h2>
            <p className='text-danger fs-4 fw-bold'>
            Mr. Salil Ghosh
            </p>
            <p>
            Research Fellow
            Department of Mathematics,
            Jadavpur University,
            Kolkata-700032,
            India
            Mob: +91 9874642115
            E-mail: sudip2205@gmail.com
            </p>
            <p className='text-danger fs-4 fw-bold'>
            Mr. Satyajit Mukherjee
            </p>
            <p>
            Research Fellow
            Department of Mathematics,
            Jadavpur University,
            Kolkata-700032,
            India
            Mob: +91 6295732821
            E-mail: amit.jumath@gmail.com
            </p>
        </div>
        <div className="g-col-6">
            <div className="bg-primary rounded p-4 m-4">
            <h4>You may Contact with Organizing Team of ICMAAM 2023 Using the Message Box</h4>
            <form className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row">
              <div className="d-flex flex-column mx-auto">
                <input type="text" placeholder="Name" className="bg-dark" style={{height: 30, borderRadius: 5, width: 200}} />
                <input type="email" placeholder="Email" className="bg-dark"  style={{height: 30, borderRadius: 5, width: 200}}/>
                <input type="Subject" placeholder="Subject" className="bg-dark"  style={{height: 30, borderRadius: 5, width: 200}}/>
              </div>
              <div className='my-auto'>
                <textarea placeholder="Message" className="bg-dark"  style={{height: 90, borderRadius: 5, width: 200}}/>
              </div>
            </form>
            <div className="d-flex justify-content-lg-end justify-content-center">
            <button className="btn btn-warning">Send</button>
            </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ContactDet