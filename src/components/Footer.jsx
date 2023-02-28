import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';

export class Footer extends Component {
  render() {
    return (
      <div className='d-flex my-2 flex-column flex-lg-row flex-md-row mx-4 bg-secondary-subtle justify-content-around text-center'>
        <div className='col-lg-6 my-auto'>
            {/* <img src="https://static.wixstatic.com/media/485cee_46bfcf61e1fe4cc78cf03373aaef256a~mv2.gif" alt="" /> */}
            <p className='m-3'>&copy; 2023 Jadavpur University</p>
        </div>
        <div className="col-lg-4 m-2">
            <ul class="list-unstyled d-flex flex-row justify-content-center text-center">
                <li><SocialIcon url='https://www.facebook.com' bgColor='#fff' fgColor='gray' className='m-3'/></li>
                <li><SocialIcon url='https://www.twitter.com' bgColor='#fff' fgColor='gray' className='m-3'/></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Footer