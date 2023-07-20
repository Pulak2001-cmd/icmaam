import React, { Component } from 'react'

export class TopBar extends Component {
  render() {
    return (
      <div className='d-flex flex-lg-row flex-md-row flex-sm-row flex-column text-center m-4' style={{backgroundColor: '#d2d5d9'}}>
        <div className='g-col-4 m-2'>
            <img src="https://static.wixstatic.com/media/485cee_46bfcf61e1fe4cc78cf03373aaef256a~mv2.gif" alt=""/>
            <p style={{fontSize: 20}}>9-11 October, 2023</p>
            <p style={{fontSize: 18}}>Kolkata, India</p>
        </div>
        <div className='g-col-8 m-auto p-2'>
            <p style={{color: 'red', fontSize: 25, fontWeight: 'bold'}}>2nd International Conference on Mathematical Analysis and Applications in Modeling</p>
            <p style={{color: 'red', fontSize: 25, fontWeight: 'bold'}}>(ICMAAM 2023)</p>
            <p style={{fontSize: 18}}>Organised By
            Department of Mathematics, Jadavpur University & Center for Mathematical Biology and Ecology</p>
        </div>
      </div>
    )
  }
}

export default TopBar
