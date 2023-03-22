import React, { Component } from 'react'

export class SpeakersDet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        committe: [
          "Prof. Odo Diekmann (Utrecht University, Netherlands)",
          "Prof. Gaston N&#39;Guerekata (M.S.U, USA)",
          "Prof. David Greenhalgh (U.S.G, Scotland)",
          "Prof. Stacey Smith? (U.O, Canada)",
          "Prof. Gergely Röst (University of Szeged, Hungary)",
          "Prof. Miroslaw Lachowicz (W.U, Poland)",
          "Prof. Jocirei Dias Ferreira (The Federal University of Mato Grosso – UFMT)",
          "Prof. Shigui Ruan (U.M.G, Florida, USA)",
          "Prof. Xianbing Cao (B.T.B.U, China)",
          "Prof. Igor Schreiber (U.C.T, Czech Republic)",
          "Prof. Xue-Zhi Li (Henan Normal University, China)",
          "​Prof. Leo Creedon (ATU, Ireland)",
          "Dr. Attila Dénes (University of Szeged, Hungary)",
          "Prof. Evgenii Khailov (Lomonosov Moscow State University Russia)",
          "Prof. Ellina Grigorieva (Texas Women University, United States of America)",
          "Prof. El Kinani El Hassan (Université Moulay Ismail,Morocco)",
          "Prof. Zbigniew Bartosiewicz (Bialystok University of Technology, Poland)",
          "Prof. Ujjal Kumar Deb, CUET, Bangladesh.",
          "Dr. Robert Hakel (Czech Academy of Sciences, Czech Republic)",
          "Prof. Ali Moussaoui ( Abou Bakr Belkaid University of Tlemcen , Algeria)",
          "Prof. Haider Ali Biswas (Science Engineering and Technology School, Bangladesh)",
        ],
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
            <h3 className="text-danger">Scientific Advisory Committee (International)</h3>
            {this.state.committe.map((i, index)=> {
                return <p className="m-0 text-light fw-bold" index={index}>{i}</p>
            })}
        </div>
        <div className="d-flex text-left flex-column m-4 p-3">
            <h3 className="text-danger">Confirmed Plenary and Invited Speakers (International)</h3>
            {this.state.international.map((i, index)=> {
                return <p className="m-0 text-light fw-bold" index={index}>{i}</p>
            })}
        </div>
        <div className="d-flex text-left flex-column m-4 p-3">
            <h3 className='text-danger'>Confirmed Plenary and Invited Speakers (National)</h3>
            {/* {this.state.national.map((i, index)=> {
                return <p className="m-0 text-light fw-bold" index={index}>{i}</p>
            })} */}
            <img src="/tba.png" height={330} width={330}/>
        </div>
      </div>
    )
  }
}

export default SpeakersDet