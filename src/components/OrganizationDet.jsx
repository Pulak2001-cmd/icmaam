import React, { Component } from 'react'

export class OrganizationDet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row1: [
                "Prof. Gaston N'Guerekata (M.S.U, USA)",
                "Prof. Miroslaw Lachowicz (W.U, Poland)",
                "Prof. Yasuhiro Takeuchi (A.G.U, Japan)",
                "Prof. Andreas Dress (F.U, Germany)",
                "Prof. Erkay Savas (S.U, Turkey)",
                "Prof. H. M. Srivastava (V.U, Canada)",
                "Prof. Yuichi Hattori (T.U, Japan)",
                "Prof. Maria Balcerzak (W.U.T, Poland)",
                "Prof. L. Hola (Slovak Republic)",
                "Dr. David Greenhalgh (U.S.G, Scotland)",
                "Prof. Ezio Venturino (T.U, Italy)",
                "Prof. Robert Smith? (U.O, Canada)",
                "Prof. Shigui Ruan (U.M.G, Florida)",
                "Prof. Lilong Cai (H.K.U.S.T, China )",
                "Prof. Xianbing Cao (B.T.B.U, China)",
                "Prof. Igor Schreiber (U.C.T, Czech Republic)",
            ],
            row2: [
                "Prof. Kapil Hari Paranjape (I.I.S.E.R, Mohali)",
                "Prof. Gadadhar Misra (I.I.S.C, Bangalore)",
                "Prof. V. Kannan (H.U, Hyderabad)",
                "Prof. Peeyush Chandra (I.I.T, Kanpur)",
                "Prof. Joydev Chattopadhyay (I.S.I, Kolkata)",
                "Prof. Subenoy Chakraborty (J.U, Kolkata)",
                "Prof. Sudeshna Banerjee (J.U, Kolkata)",
                "Dr. Ram Rup Sarkar (Principal Scientist, C.S.I.R)",
                "Dr. Chetan Gadgil (Principal Scientist, C.S.I.R)",
                "Dr. Anuradha Raghunathan (Senior Scientist, C.S.I.R)",
                "Prof. Santanu Ray (V.B.S.B, Santiniketan)",
                "Prof. Sarman Singh (A.I.I.M.S, New Delhi)",
                "Prof. Mahuya Dutta (I.S.I, Kolkata)",
                "Prof. G. K. Medhi (N.E.I.G.R.I.H.M.S, Shillong) ",
                "Prof. Maithily Ramaswamy (T.I.F.R, Bangalore)",
                "Prof. Gobindan Rangarajan (I.I.S.C, Bangalore)",
                "Prof. Ajit Iqbal Singh (I.S.I, Delhi)",
            ],
            row3: [
                "Prof. Subhas Mandal (J.U, Kolkata)",
                "Prof. Anup Bandyopadhyay (J.U, Kolkata)",
                "Prof. Shamik Ghosh (J.U, Kolkata)",
                "Prof. Nandadulal Bairagi (J.U, Kolkata)  ",
                "Prof. Dipak Kumar Kesh (J.U, Kolkata)",
                "Prof. Bibhash Chandra Giri (J.U, Kolkata)",
                "Prof. Arindam Bhattacharya (J.U, Kolkata)",
                "Prof. Buddhadeb Sau (J.U, Kolkata)",
                "Prof. Farook Rahaman (J.U, Kolkata)",
                "Prof. Alaka Das (J.U, Kolkata)",
                "Dr. Sabyasachi Bhattacharya (I.S.I, Kolkata)",
                "Dr. Sumit Nandi (N.I.T, Kolkata)",
                "Dr. Sagnik Sinha (J.U, Kolkata)",
                "Dr. Kallol Paul (J.U, Kolkata)",
                "Dr. Sukhendu Kar (J.U, Kolkata)",
                "Dr. Santosh Biswas (J.U, Kolkata)",
            ]
        }
    }
  render() {
    return (
      <div className="m-4">
        <div className="d-flex justify-content-around text-center flex-column flex-lg-row flex-md-row ">
            <div className="col-lg-3 p-3">
                <h2 className="text-danger">Chief Patron</h2>
                <p className="text-primary">Dr. Suranjan Das</p>
                <p className="text-info">Vice Chancellor, Jadavpur University</p>
            </div>
            <div className="col-lg-3 p-3">
                <h2 className="text-danger">Patron</h2>
                <p className="text-primary">Prof. (Dr.) Amitava Dutta</p>
                <p className="text-info">Pro-Vice Chancellor, Jadavpur University</p>
                <p className="text-primary">Prof. (Dr.) Chiranjib Bhattacharya</p>
                <p className="text-info">Pro-Vice Chancellor, Jadavpur University</p>
                <p className='text-primary mt-3'>Prof. (Dr.) Subenoy Chakraborty.</p>
                <p className='text-info'>Dean, Faculty of Science, Jadavpur University</p>
            </div>
            <div className="col-lg-3 p-3">
                <h2 className='text-danger'>Chairman</h2>
                <p className='text-primary'>Prof. (Dr.) Saghnik Sinha</p>
                <p className='text-info'>Head, Department of Mathematics, Jadavpur University</p>
                <h2 className='text-danger'>Treasurer</h2>
                <p className='text-primary'>Prof (Dr.) Arindam Bhattacharya</p>
                <p className='text-info'>Department of Mathematics, Jadavpur University</p>
            </div>
            <div className="col-lg-3 p-3">
                <h2 className='text-danger'>Organizing Secretary</h2>
                <p className='text-primary'>Prof. Priti Kumar Roy</p>
                <p className='text-info'>Department Of Mathematics, Jadavpur University</p>
                <h2 className='text-danger'>Executive Secretary</h2>
                <p className='text-primary'>Prof. Nandadulal Bairagi</p>
                <p className='text-info'>Department Of Mathematics, Jadavpur University</p>
            </div>
        </div>
        <div className="d-flex justify-content-around text-left flex-lg-row flex-column">
            <div className="col-lg-3 p-3 m-auto">
                <h3>Scientific Advisory Committee (International)</h3>
                {this.state.row1.map((i, index)=> {
                    return <p style={{margin: 0}} index={index}>{i}</p>
                })}
            </div>
            <div className="col-lg-3 p-3 m-auto">
                <h3>Scientific Advisory Committee (National)</h3>
                {this.state.row2.map((i, index)=> {
                    return <p style={{margin: 0}} index={index}>{i}</p>
                })}
            </div>
            <div className="col-lg-3 p-3 m-auto">
                <h3>Local Organizing Committee</h3>
                {this.state.row3.map((i, index)=> {
                    return <p style={{margin: 0}} index={index}>{i}</p>
                })}
            </div>
        </div>
      </div>
    )
  }
}

export default OrganizationDet