import React, { Component } from "react";
import SideNav from "./SideNav";
import "../index.css";

class Header extends Component {
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark  fixed bg-dark">
          {localStorage.getItem("Token") ? (
            <a className="navbar-brand text-white" href="/dashboard/">
              Webiste Logo
            </a>
          ) : (
            <a className="navbar-brand text-white" href="/">
              Webiste Logo
            </a>
          )}
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
              {localStorage.getItem("Token") && (
                <li className="nav-item  ">
                  <a
                    className="nav-link btn contact_btn text-white"
                    href="#contactt"
                    rel="modal:open"
                  >
                    Welcome <strong>Admin</strong>
                  </a>
                </li>
              )}

              {localStorage.getItem("Token") ? (
                <li className="nav-item  ">
                  <SideNav />
                </li>
              ) : (
                <li class="nav-item dropdown">
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
