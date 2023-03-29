import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Menu extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary m-4">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav" style={{margin: 'auto'}}>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/department">Department</Link></li>
                  <li><Link class="dropdown-item" to="/university">University</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/organization">Organization</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/speakers">Speakers</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/registration">Registration</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="/travel" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  How to reach
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/travel">How to Reach</Link></li>
                  <li><Link class="dropdown-item" to="/dumdum">From Dumdum Airport</Link></li>
                  <li><Link class="dropdown-item" to="/howrah">From Howrah Railway Station</Link></li>
                  <li><Link class="dropdown-item" to="/sealdah">From Sealdah Railway Station</Link></li>
                  <li><Link class="dropdown-item" to="/kolkata">From Kolkata Railway Station</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/publications">Publications</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fundings">Fundings</Link>
              </li>
              <li class="nav-item">
                <Link target="_blank" class="nav-link" to="https://icmaam2018.wixsite.com/icmaam2018">Previous Conferences</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Menu