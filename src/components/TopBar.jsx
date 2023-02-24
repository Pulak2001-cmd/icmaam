import React, { Component } from 'react'

export class TopBar extends Component {
  render() {
    return (
      <div className='grid text-center m-4' style={{backgroundColor: '#d2d5d9'}}>
        <div className='g-col-4'>
            <img src="https://static.wixstatic.com/media/485cee_46bfcf61e1fe4cc78cf03373aaef256a~mv2.gif" alt=""/>
            <p style={{fontSize: 20}}>9-11 October, 2023</p>
            <p style={{fontSize: 18}}>Kolkata, India</p>
        </div>
        <div className='g-col-8 m-auto'>
            <p style={{color: 'red', fontSize: 25, fontWeight: 'bold'}}>International Conference on Mathematical Analysis and Application in Modeling</p>
            <p style={{color: 'red', fontSize: 25, fontWeight: 'bold'}}>(ICMAAM 2018)</p>
            <p style={{fontSize: 18}}>Organised By
            Department of Mathematics, Jadavpur University</p>
        </div>
      </div>
    )
  }
}

export default TopBar