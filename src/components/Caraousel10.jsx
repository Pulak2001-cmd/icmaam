import React, { Component } from 'react'

export class Caraousel extends Component {
  render() {
    return (
      <div className="m-auto" style={{width: '80%'}}>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="5000">
                <img src="https://static.wixstatic.com/media/485cee_435e1c7b43ca41cdbf097d52c567f038~mv2.jpg/v1/fill/w_800,h_181,al_c,q_80,enc_auto/485cee_435e1c7b43ca41cdbf097d52c567f038~mv2.jpg" class="d-block w-100 h-50" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
      </div>
    )
  }
}

export default Caraousel