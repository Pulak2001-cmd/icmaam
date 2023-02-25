import React, { Component } from 'react'

export class HomeItems extends Component {
  render() {
    return (
      <div className="text-center mx-5 d-flex flex-column flex-lg-row flex-md-row justify-content-around">
        <div className="g-col-4">
            <div className="d-flex flex-row">
              <img src="https://static.wixstatic.com/media/485cee_b1223458cd414136860b3bd7341639dd~mv2.gif" alt="" />
              <p className="text-primary fw-bold fs-3 my-auto ml-5">Conference Publications:</p>
            </div>
            <ul>
              <li style={{textAlign: 'justify'}}>
              We have a proposal for Springer Book Proceedings, Full length papers presented in  ICMMAM-2023 will undergo a peer review process and selected papers will subsequently be published in Springer Book Proceedings.
              </li>
              <li style={{textAlign: 'justify'}}>
              Full length papers presented in  ICMMAM-2018 will undergo a peer review process and selected papers will subsequently be published in special issues of the following journals:
              <ol>
                <li value="1"><a href="">International Journal of Biomathematics and System Biology</a></li>
                <li><a href="">Bulletin of Calcutta Mathematical Society/Journal of Calcutta Mathematical Society</a></li>
              </ol>
              </li>
            </ul>
            <p style={{textAlign: 'justify'}}>Authors of chosen papers may be required to correct/modify/update their papers according to the feedback received in the peer review. The decision of the reviewers will be final.</p>
        </div>
        <div className="g-col-4"></div>
        <div className="g-col-4">
          <div className="rounded">
            <div className="d-flex flex-row">
              <img src="https://static.wixstatic.com/media/485cee_b1223458cd414136860b3bd7341639dd~mv2.gif" alt="" />
              <p className="text-primary fw-bold fs-3 my-auto ml-5">Call For Papers:</p>
            </div>
            <p className="text-danger fw-200" style={{textAlign: 'justify', backgroundImage: "url('https://static.wixstatic.com/media/485cee_36bf522e2ea44e609ea36c682389b65d~mv2.gif')", backgroundRepeat: 'no-repeat'}}>
            Papers pertaining to conference areas of interest, as listed in “Aims and Scopes”, are invited for ICMAAM-2018. The authors are requested to submit their original full length research papers which are not being under consideration for publication by any other journal or conference, latest by April 30th, 2023 at the email: icmaam2023@gmail.com
            </p>
            </div>
        </div>
      </div>
    )
  }
}

export default HomeItems