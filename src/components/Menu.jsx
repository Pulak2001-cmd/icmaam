import React, { Component } from 'react'
import './Menu.css';
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
                  <li><Link class="dropdown-item" to="/conference">Conference</Link></li>
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
                  <li><a class="dropdown-item" href="#">From Howrah Railway Station</a></li>
                  <li><a class="dropdown-item" href="#">From Sealdah Railway Station</a></li>
                  <li><a class="dropdown-item" href="#">From Kolkata Railway Station</a></li>
                </ul>
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