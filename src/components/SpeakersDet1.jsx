import React, { Component } from 'react'
import axios from 'axios';

export class SpeakersDet1 extends Component {
  constructor(props){
    super(props);
    this.state = {
        international: [],
        national: [],
    }
  }
  async componentDidMount(){
    const url = "https://script.google.com/macros/s/AKfycbyyeWFX0LOvI3S8IU35yW3HlYaIcpyTcsNqz_-jGXaTCDPhzrbzPUrn_hupX7CblPkk/exec?type="
    const response1 = await axios.get(url+"international");
    this.setState({international: response1.data.data});
    const response2 = await axios.get(url+"national");
    this.setState({national: response2.data.data});
  }
  render() {
    return (
      <div className='mx-5 d-flex flex-column mt-5'>
        <div className='px-5'>
            <h3>Confirmed Plenary and Invited Speakers (International)</h3>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                {this.state.international.map((i, index)=> (
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                        {i.name}
                    </button>
                    </h2>
                    <div id={`flush-collapse${index}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        {i.details}
                        {i.image !== "" && <img src={i.image} alt="image" style={{height: 100, width: 100}} />}    
                    </div>
                    </div>
                </div>))}
            </div>
        </div>
        <div className="p-5">
            <h3>Confirmed Plenary and Invited Speakers (National)</h3>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                {this.state.national.map((i, index)=> (
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                        {i.name}
                    </button>
                    </h2>
                    <div id={`flush-collapse${index}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">{i.details}</div>
                    </div>
                </div>))}
            </div>
        </div>
      </div>
    )
  }
}

export default SpeakersDet1