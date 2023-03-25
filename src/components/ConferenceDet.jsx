import React, { Component } from 'react'

export class ConferenceDet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subs: [
        "Functional Analysis",
        "Topology",
        "Dynamic Systems (non-linear, topological)",
        "Mathematical Modeling",
        "Optimization",
        "Mathematical Biology",
        "Chaos Fractals and bifurcation",
        "Complex analysis",
        "Differential geometry",
        "Flow dynamics",
        "Function analysis and its application",
        "Geometry",
        "Operation research"
      ],
    }
  }
  render() {
    return (
      <div className="m-4">
       <p style={{fontSize: 18, textAlign: 'justify'}}> International Conference on Mathematical Analysis and Applications in Modeling (ICMAAM 2023) is aimed to bring researchers and professionals to discuss recent developments in Pure and Applied mathematics and their applications in Mathematical Modeling in order to create a professional knowledge exchange platform between mathematicians. Though all areas of Mathematics will be included in the conference, the following are the Thrust Areas of the conference:
       </p>
       <div className="d-flex flex-column flex-md-row flex-lg-row justify-content-around">
       <ul className="text-left d-flex flex-column">
        {this.state.subs.slice(0, this.state.subs.length/2).map((i, index) =>(
          <li key={index} className="fw-bold text-danger">{i}</li>
        ))}
      </ul>
      <ul className="text-left">
        {this.state.subs.slice(this.state.subs.length/2, this.state.subs.length).map((i, index) =>(
          <li key={index} className="fw-bold text-danger">{i}</li>
        ))}
      </ul>
      </div>
        <p style={{fontSize: 18, textAlign: 'justify'}}>       
          The program of the conference will consist of, apart from one Keynote Address and 4 – 6 common Plenary Lectures, two parallel sessions, one in pure branches of Mathematics giving special emphasis on Functional Analysis, Real Analysis, Topology, Topological Dynamical Systems etc. and the other in applied branches of Mathematics with more emphasis on Mathematical Modeling, Non-linear Dynamical Systems and Mathematical Biology. We are looking forward to welcoming you in Jadavpur University.
        </p>
        <p style={{fontSize: 18, textAlign: 'justify'}}>
          In this connection we would like to proudly mention that Jadavpur University has long been acknowledged as a center of excellence in teaching and research and in its last survey The University has been ranked overall 12th among all Indian educational institutions and 4th in university, 13th in research among all state aided universities (NIRF) with special mention of The Department of Mathematics.
        </p>     
      </div>
    )
  }
}

export default ConferenceDet