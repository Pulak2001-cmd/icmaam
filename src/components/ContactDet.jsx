import React, { Component } from 'react'

export class ContactDet extends Component {
  render() {
    return (
      <div className="m-4 text-left d-flex flex-lg-row flex-column" style={{backgroundImage: 'url("https://static.wixstatic.com/media/485cee_ec2b29068e994960bf00262f09cd64e5~mv2.jpg/v1/fill/w_980,h_214,al_c,lg_1,q_80,enc_auto/485cee_ec2b29068e994960bf00262f09cd64e5~mv2.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
        <div className="g-col-12 p-4">
          <h4>Organizing Secretary</h4>
          <p style={{margin: 0, fontWeight: 'bold'}}>Prof. Priti Kumar Roy</p>
          <p style={{margin: 0}}>Email ID: pritik.roy@jadavpuruniversity.in</p>
          <p >Phone: +91 9432095603</p>
          <h4>Joint Organizing Secretary</h4>
          <p style={{margin: 0, fontWeight: 'bold'}}>Prof. Kallol Paul </p>
          <p style={{margin: 0}}>  Email ID: kalloldada@gmail.com, <br/>  kallol.paul@jadavpuruniversity.in </p>
          <p style={{margin: 0}}>Phone: +91 9433207354</p>
          <h4>primary contact person</h4>
          <p style={{margin: 0, fontWeight: 'bold'}}>Satyajit Mukherjee </p>
          <p style={{margin: 0}}>  Email ID: satya.jumath@gmail.com</p>
          <p style={{margin: 0, }}>Phone: +91 6295732821</p>
          <ul style={{color: 'Red'}}>
              <li>Note:Contact to oraganising secretary only for some special issue.otherwise contact to primary contact person.</li>
            </ul>
          
        </div>
        
      </div>
    )
  }
}

export default ContactDet
