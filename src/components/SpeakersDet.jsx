import React, { Component } from 'react'

export class SpeakersDet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        international: [
            "Prof. Gaston N'Guerekata (M.S.U, USA)",
            "Prof. Miroslaw Lachowicz (U.W, Poland)",
            "Prof. Yasuhiro Takeuchi (A.G.U, Japan)",
            "Prof. Andreas Dress (F.U, German)",
            "Prof. Erkay Savas (S.U, Turkey)",
            "Prof. Ezio Venturino (T.U, Italy)",
            "Prof. Xianbing Cao (B.T.B.U, China)",
            "Dr. Yanhui Zhang (C.U.H.K, China)",
            "Prof. V. M. De La Vega (Mexico)",
            "Dr. Piotr Szewczak (C.S.W.U, Poland)",
            "Prof. Urszula Foryś(U.W, Poland)", 
            "Prof. Jiling Cao (A.U.T, New Zealand)",
            "Prof. Ahmed Elaiw (K.A.U, UAE)",
            "Prof. Igor Schreiber (U.C.T, Czech Republic)",
            "Dr. Zbigniew Bartosiewicz (T.U.B, Poland)",
            "Prof. Alev Kanibir (Turkey)",
        ],
        national: [
            "Prof. K. H. Paranjape (I.I.S.E.R, Mohali)", 
            "Prof. Gadadhar Misra (I.I.S.C, Bangalore)",
            "Prof. V. Kannan (H.U, Hyderabad)",
            "Prof. Gobindan Rangarajan (I.I.S.C, Bangalore)",
            "Prof. Maithily Ramaswamy (T.I.F.R, Bangalore)",
            "Prof. P. Sankaran (I.M.S.C, Chennai)",
            "Prof. Satya Deo (H.R.I, Allahabad)",
            "Prof. A. K. Pani (I.I.T, Mumbai)",
            "Prof. G. Mukhopadhyay (I.S.I, Kolkata)",
            "Prof. P. Bandyopadhyay (I.S.I, Kolkata)",
            "Prof. S.M. Srivastava (I.S.I, Kolkata)",
            "Prof. G. K. Medhi (N.E.I.G.R.I.H.M.S, Shillong)", 
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
        </div>
      </div>
    )
  }
}

export default SpeakersDet