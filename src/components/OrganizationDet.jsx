import React, { Component } from 'react'

export class OrganizationDet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row1: [
                "Prof. Odo Diekmann (Utrecht University, Netherlands)",
                "Prof. Gaston N'Guerekata (M.S.U, USA)",
                "Prof. David Greenhalgh (U.S.G, Scotland)",
                "Prof. Stacey Smith? (U.O, Canada)",
                "Prof. Gergely Röst (University of Szeged, Hungary)",
                "Prof. M. S. Moslehian (Ferdowsi University of Massad, Iran)",
                "Prof. Miroslaw Lachowicz (W.U, Poland)",
                "Prof. Jocirei Dias Ferreira (The Federal University of Mato Grosso – UFMT)",
                "Prof. Shigui Ruan (U.M.G, Florida, USA)",
                "Prof. Jacek Chmieliński (Pedagogical University Of Krakow, Poland)",
                "Prof. Xianbing Cao (B.T.B.U, China)",
                "Prof. Igor Schreiber (U.C.T, Czech Republic)",
                "Prof. Xue-Zhi Li (Henan Normal University, China)",
                "Prof. Leo Creedon (ATU, Ireland)",
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
            row2: [
                "Prof. Gadadhar Misra (ISI, Bangalore)",
                "Prof. Joydev Chattopadhyay, (ISI, Kolkata)",
                "Prof. A K Misra (BHU)",
                "Prof Jaydeb Sarkar (ISI, Bangalore)",
                "Prof. Ranjan Kumar Mohanty (South Asian University)",
                "Prof. Debashis Sarkar (CU)",
                "Prof. Pritha Das (IIEST, Howrah)",
                "Dr. Amit Kumar Chakraborty (Sikkim Central University, India)",
                "Dr. Amit Kumar Ghosh (Emeritus Scientist, CSIR, BSIP, DST)",
                "Prof. Adrijit Goswami (IIT, KGP)",
                "Prof. M. Sundarajan (Mijoram University)",
                "Prof. Apoorva Khare (IISC, Bengalore)"
            ],
            row3: [
                "Prof. Subhas Mandal (J.U, Kolkata)",
                "Prof. Anup Bandyopadhyay (J.U, Kolkata)",
                "Prof. Shamik Ghosh (J.U, Kolkata)",
                "Prof. Bibhash Chandra Giri (J.U, Kolkata)",
                "Prof. Buddhadeb Sau (J.U, Kolkata)",
                "Prof. Farook Rahaman (J.U, Kolkata)",
                "Prof. Alaka Das (J.U, Kolkata)",
                "Dr. Sukhendu Kar (J.U, Kolkata)",
                "Dr. Santosh Biswas (J.U, Kolkata)",
                "Prof.Abhijit Lahiri (J.U, Kolkata)",
                "Prof.Gopal Chandra Shit (J.U, Kolkata)",
                "Prof. Ashish Kumar Sarkar (J.U, Kolkata)",
                "Prof. Prabir Kumar Kundu (J.U, Kolkata)",
                "Prof. Pratulananda Das (J.U, Kolkata)",
                "Prof. Sudeshna Banerjee (J.U, Kolkata)",
                "Prof. Sujit Kumar Sardar (J.U, Kolkata)",
                "Dr. Manasi Mandal (J.U, Kolkata)",
                "Dr. Nilanjana Mahata (J.U, Kolkata)",
                "Dr.Molla Basir Ahamed (J.U, Kolkata)",
                "Dr.Riddhick Birbonshi (J.U, Kolkata)",
                "Dr. Sanjib Kumar Pal (J.U, Kolkata)",
            ]
        }
    }
  render() {
    return (
      <div className="m-4">
        <div className="d-flex justify-content-around text-left flex-column flex-lg-row flex-md-row ">
            <div className="col-lg-2 p-2">
                <h4 className="text-primary">Chief Patron</h4>
                <p className="text-danger" style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Suranjan Das</p>
                <p className="" style={{color: '#f54254',}} >Vice Chancellor, Jadavpur University</p>
            </div>
            <div className="col-lg-3 p-3">
                <h4 className="text-primary">Patron</h4>
                <p className="text-danger" style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Amitava Dutta</p>
                <p className="" style={{color: '#f54254',}}>Pro-Vice Chancellor, Jadavpur University</p>
                <p className="text-danger" style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Chiranjib Bhattacharya</p>
                <p className="" style={{color: '#f54254'}}>Pro-Vice Chancellor, Jadavpur University</p>
                <p className='text-danger' style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Subenoy Chakraborty.</p>
                <p className='' style={{color: '#f54254'}}>Dean, Faculty of Science, Jadavpur University</p>
            </div>
            <div className="col-lg-2 p-1">
                <h4 className='text-primary'>Chairman</h4>
                <p className="text-danger" style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Saghnik Sinha</p>
                <p className="" style={{color: '#f54254',}}>Head, Department of Mathematics, Jadavpur University</p>
                <h4 className='text-primary'>Treasurer</h4>
                <p className="text-danger" style={{fontSize: 20, margin: 0}}>Prof (Dr.) Arindam Bhattacharya</p>
                <p className="" style={{color: '#f54254',}}>Department of Mathematics, Jadavpur University</p>
            </div>
            <div className="col-lg-3 p-3">
                <h4 className='text-primary'>Organizing Secretary</h4>
                <p className='text-danger' style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Priti Kumar Roy</p>
                <p className="" style={{color: '#f54254',}}>Department Of Mathematics, Jadavpur University</p>
                <h4 className='text-primary'>Executive Secretary</h4>
                <p className="text-danger" style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Nandadulal Bairagi</p>
                <p className="" style={{color: '#f54254',}}>Department Of Mathematics, Jadavpur University</p>
            </div>
            <div className="col-lg-2 p-3">
                <h4 className='text-primary'>Joint Organizing Secretary</h4>
                <p className='text-danger' style={{fontSize: 20, margin: 0}}>Prof.(Dr.) Kallol Paul</p>
                <p className="" style={{color: '#f54254',}}>Department of Mathematics, Jadavpur university</p>
                <p className='text-danger' style={{fontSize: 20, margin: 0}}>Prof. (Dr.) Dipak Kumar kesh</p>
                <p className="" style={{color: '#f54254',}}>Department of Mathematics, Jadavpur university</p>
            </div>
        </div>
        <div className="d-flex justify-content-around text-left flex-lg-row flex-column">
            <div className="col-lg-4 p-3 mx-auto">
                <h3>Scientific Advisory Committee (International)</h3>
                <ul style={{whiteSpace: 'pre-wrap'}}>
                {this.state.row1.map((i, index)=> {
                    return <li style={{margin: 0}} index={index}>{i}</li>
                })}
                </ul>
            </div>
            <div className="col-lg-4 p-3 mx-auto">
                <h3>Scientific Advisory Committee (National)</h3>
                <ul>
                {this.state.row2.map((i, index)=> {
                    return <li style={{margin: 0}} index={index}>{i}</li>
                })}
                </ul>
            </div>
            <div className="col-lg-4 p-3 mx-auto">
                <h3>Local Organizing Committee</h3>
                <ul>
                {this.state.row3.map((i, index)=> {
                    return <li style={{margin: 0}} index={index}>{i}</li>
                })}
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default OrganizationDet