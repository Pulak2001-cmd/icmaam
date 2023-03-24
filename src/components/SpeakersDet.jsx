import React, { Component } from 'react'

export class SpeakersDet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        international: [
          "Prof. Gaston N&#39;Guerekata (M.S.U, USA)",
          "Prof. David Greenhalgh (U.S.G, Scotland, UK)",
          "Prof. Stacey Smith? (U.O, Canada)",
          "Prof. Gergely Röst (University of Szeged, Hungary)",
          "Prof. Miroslaw Lachowicz (W.U, Poland)",
          "Prof. Igor Schreiber (U.C.T, Czech Republic)",
          "Prof. Shigui Ruan (U.M.G, Florida, USA)",
          "Dr. Attila Dénes (University of Szeged, Hungary)",
          "Prof. Zbigniew Bartosiewicz (Bialystok University of Technology, Poland)",
          "Prof. Ujjal Kumar Deb, CUET, Bangladesh.",
          "Dr. Robert Hakel (Czech Academy of Sciences, Czech Republic)",
          "Prof. Haider Ali Biswas (Science Engineering and Technology School, Bangladesh)",
        ],
        national: [
          "Prof. Gadadhar Misra (ISI, Bangalore)",
          "Prof. Ranjan Kumar Mohanty (South Asian University)",
          "Prof. A K Misra (BHU)",
          "Prof. Jaydeb Sarkar (ISI, Bangalore)",
          "Prof. Pradipta Bandyopadhyay (ISI, Kolkata)",
          "Dr. Amit Kumar Ghosh, Emeritus Scientist, CSIR, BSIP, DST",
          "Prof. Adrijit Goswami, IIT, KGP",
          "Prof. M. Sundarajan (Mijoram University)",
          "Prof. S B Singh (G B Pant University of Agri. &amp; Tech.)",
          "Dr. Samrat Chatterjee, (THSTI)",
        ]
    }
  }
  render() {
    return (
      <div  className="m-5" style={{backgroundImage: "url('https://static.wixstatic.com/media/485cee_1fdf8218c0804eb6a86d963fe13643a6~mv2.jpg/v1/fill/w_480,h_543,al_c,q_80,enc_auto/485cee_1fdf8218c0804eb6a86d963fe13643a6~mv2.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="d-flex text-left flex-column m-4 p-3">
            <h3 className="text-danger">Confirmed Plenary and Invited Speakers (International)</h3>
            {this.state.international.map((i, index)=> {
                return <p className="m-0 text-light fw-bold" index={index}>{i}</p>
            })}
        </div>
        <div className="d-flex text-left flex-column m-4 p-3">
            <h3 className='text-danger'>Confirmed Plenary and Invited Speakers (National)</h3>
            {this.state.national.map((i, index)=> {
                return <p className="m-0 text-light fw-bold" index={index}>{i}</p>
            })}
            {/* <img src="/tba.png" height={330} width={330}/> */}
        </div>
      </div>
    )
  }
}

export default SpeakersDet