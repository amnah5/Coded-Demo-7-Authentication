import React from 'react';
import logo from '../assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
export default function Nav() {
  return (
    <>
      <header class="header_area">
        <div id="header_navbar" class="header_navbar">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-12">
                <nav class="navbar navbar-expand-lg">
                  <NavLink class="navbar-brand" to="/">
                    <img id="logo" src={logo} alt="Logo" />
                  </NavLink>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" class="navbar-nav ml-auto">
                      <li class="nav-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li class="nav-item">
                        <NavLink to="/courses">Courses</NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
