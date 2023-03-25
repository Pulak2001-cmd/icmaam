import React, { Component } from 'react'

export class Caraousel extends Component {
  render() {
    return (
      <div className="m-auto" style={{width: '80%'}}>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="5000">
                <img src="https://static.wixstatic.com/media/485cee_c448edd728e044888958dff4ff54614f~mv2.jpeg/v1/fill/w_948,h_457,al_c,lg_1,q_85,enc_auto/485cee_c448edd728e044888958dff4ff54614f~mv2.jpeg" class="d-block w-100 h-50" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                <img src="https://static.wixstatic.com/media/485cee_22c44820676f4920a4cdef472aa363a9~mv2.png/v1/fill/w_698,h_336,al_c,lg_1,q_85,enc_auto/485cee_22c44820676f4920a4cdef472aa363a9~mv2.png" class="d-block w-100 h-50" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                <img src="https://static.wixstatic.com/media/485cee_2cfc43aa739e4f3fb0d4e47c6512aa5d~mv2_d_3680_2456_s_4_2.jpg/v1/fill/w_1223,h_589,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/485cee_2cfc43aa739e4f3fb0d4e47c6512aa5d~mv2_d_3680_2456_s_4_2.jpg" class="d-block w-100 h-50" alt="..." />
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