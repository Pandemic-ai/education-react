import React, { Component } from "react";
// import SideNav from "./SideNav";
import "../index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    localStorage.removeItem("Token");
    localStorage.removeItem("Username");
    window.location.href = "/";
  }
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark  fixed bg-dark">
          {localStorage.getItem("Token") ? (
            <Link className="navbar-brand text-white" to="/dashboard/">
              Website logo
            </Link>
          ) : (
            <Link className="navbar-brand text-white" to="/">
              Website logo
            </Link>
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
              {localStorage.getItem("Token") ? (
                <li className="nav-item  ">
                  <a
                    className="nav-link btn contact_btn text-white"
                    href="#contactt"
                    rel="modal:open"
                  >
                    Welcome <strong>Admin</strong>
                  </a>
                </li>
              ) : (
                <li class="nav-item dropdown">
                  <a
                    className="nav-link btn btn-login contact_btn text-white"
                    href="/"
                  >
                    Log in
                  </a>
                </li>
              )}

              {localStorage.getItem("Token") && (
                <li class="nav-item dropdown">
                  <a
                    onClick={this.onLogout.bind(this)}
                    className="nav-link btn btn-login contact_btn text-white"
                    href="/login/"
                  >
                    Logout
                  </a>
                </li>
              )}

              {/* {localStorage.getItem("Token") ? (
                <li className="nav-item  ">
                  <SideNav />
                </li>
              ) : (
                
              )} */}
            </ul>
          </div>
        </nav>
        {localStorage.getItem("Token") && (
          <nav className="navbar navbar-expand-lg navbar-dark  fixed bg-dark">
            <ul className="navbar-nav mr-auto" style={{ paddingLeft: "50px" }}>
              <li className="nav-item  ">
                <Link
                  className="nav-link btn contact_btn text-white font-weight-bold"
                  to="/classmate/"
                >
                  Student
                </Link>
              </li>
              <li className="nav-item  ">
                <Link
                  className="nav-link btn contact_btn text-white font-weight-bold"
                  to="/teacher/"
                >
                  Teacher
                </Link>
              </li>
              <li className="nav-item  ">
                <Link
                  className="nav-link btn contact_btn text-white font-weight-bold"
                  to="/list/tutorial/"
                >
                  Lecture
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link btn contact_btn text-white font-weight-bold"
                  to="/classroom/"
                >
                  Class Room
                </Link>
              </li>
              <Link 
                className="nav-link btn contact_btn text-white font-weight-bold" 
                to="/list/exam/">
                Exam
              </Link>

            
              <li className="nav-item  ">
                <a
                  className="nav-link btn contact_btn text-white font-weight-bold"
                  href="/classroom/"
                >
                  Virtual classroom
                </a>
              </li>

              <li className="nav-item  ">
                <Link
                  className="nav-link btn contact_btn text-white font-weight-bold"
                  to="/studentnotification/"
                >
                  Notification
                </Link>
              </li>

              <li className="nav-item  ">
                <Link
                  className="nav-link btn contact_btn text-white font-weight-bold"
                  to="/chat/"
                >
                  Chat
                </Link>
              </li>
              <li className="nav-item  ">
                <Link
                  className="nav-link btn contact_btn text-white font-weight-bold"
                  to="/note/"
                >
                  Note
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    );
  }
}

export default Header;
