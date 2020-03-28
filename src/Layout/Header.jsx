import React, { Component } from "react";
import SideNav from "./SideNav";
import "../index.css";

class Header extends Component {
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark  fixed">
          <a className="navbar-brand text-dark" href="/">
            Webiste Logo
          </a>
          <button
            className="navbar-toggler font-weight-bold text-white  "
            style={{ background: "#b71c1c", padding: "2px", width: "70px" }}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  "></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item  ">
                <a
                  className="nav-link btn contact_btn text-dark"
                  href="#contactt"
                  rel="modal:open"
                >
                  Contact Us
                </a>
              </li>
              {localStorage.getItem("Token") ? (
                <li className="nav-item  ">
                  <SideNav />
                </li>
              ) : (
                <li class="nav-item dropdown">
                  {/* <a
                          class="nav-link dropdown-toggle text-dark"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Login
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="/login/">
                            Student Login
                          </a>
                          <a class="dropdown-item" href="/login/">
                            Teacher Login
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="/login/">
                            Admin
                          </a>
                        </div> */}

                  <a
                    className="nav-link btn btn-login contact_btn text-white"
                    href="/login/"
                  >
                    Log in
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
