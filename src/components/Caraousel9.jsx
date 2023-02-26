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
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="5000">
                <img src="https://static.wixstatic.com/media/728a0b1b703644de9f1c483eb9150112.jpg/v1/fill/w_1225,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/728a0b1b703644de9f1c483eb9150112.jpg" class="d-block w-100 h-50" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                <img src="https://static.wixstatic.com/media/925fb318688e4dd9b831b9365fa612d1.jpg/v1/fill/w_1225,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/925fb318688e4dd9b831b9365fa612d1.jpg" class="d-block w-100 h-50" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                <img src="https://static.wixstatic.com/media/485cee_21fab9ddcfa74546b4dffebefae9fb21~mv2.jpg/v1/fill/w_1024,h_230,al_c,q_80,enc_auto/485cee_21fab9ddcfa74546b4dffebefae9fb21~mv2.jpg" class="d-block w-100 h-50" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                <img src="https://static.wixstatic.com/media/485cee_b09a40dfc37c45d7a8ded705badc493b~mv2.jpg/v1/fill/w_989,h_222,al_c,q_80,enc_auto/485cee_b09a40dfc37c45d7a8ded705badc493b~mv2.jpg" class="d-block w-100 h-50" alt="..." />
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