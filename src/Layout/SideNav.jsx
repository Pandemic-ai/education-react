import React from "react";
import "./SideNav.css";

import { withRouter } from "react-router-dom";

class SideNav extends React.Component {
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

  openNavClick = e => {
    e.preventDefault();
    this.openNav();
  };

  closeNavClick = e => {
    e.preventDefault();
    this.closeNav();
  };

  openNav = () => {
    this.setState({
      showNav: true
    });

    document.addEventListener("keydown", this.handleEscKey);
  };
  closeNav = () => {
    this.setState({
      showNav: false
    });

    document.removeEventListener("keydown", this.handleEscKey);
  };

  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav();
    }
  };

  render() {
    const { showNav } = this.state;
    let navCoverStyle = { width: showNav ? "270px" : "0" };
    let sideNavStyle = { width: showNav ? "270px" : "0" };

    return (
      <React.Fragment>
        <span onClick={this.openNavClick} class="open-nav text-white">
          &#9776;
        </span>
        <div
          onClick={this.navCoverClick}
          class="nav-cover"
          style={navCoverStyle}
        />

        <div name="side-nav" class="side-nav" style={sideNavStyle}>
          <a href="# " onClick={this.closeNavClick} class="close-nav text-dark">
            &times;
          </a>
          <p
            className="navbar-brand text-dark text-capitalize "
            style={{ paddingLeft: "30px" }}
          >
            {localStorage.getItem("Username")}
          </p>
          <hr></hr>

          <a href="# ">
            <span>
              <i className="fa fa-desktop"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Dashboard
          </a>

          <span>
            <a href="/list/tutorial/">
              <span>
                <i className="fa fa-user"></i>{" "}
              </span>{" "}
              &nbsp; &nbsp;Lecture
            </a>
            <a href="/classmate/">
              <span>
                <i className="fa fa-user"></i>{" "}
              </span>{" "}
              &nbsp; &nbsp;Student
            </a>
            <a href="/teacher/">
              <span>
                <i className="fa fa-user"></i>{" "}
              </span>{" "}
              &nbsp; &nbsp; Teacher
            </a>
            <a href="/studentnotification/">
              <span>
                <i className="fa fa-bell"></i>{" "}
              </span>{" "}
              &nbsp; &nbsp; Notification
            </a>

            <a href="/chat/">
              <span>
                <i className="fa fa-envelope"></i>{" "}
              </span>{" "}
              &nbsp; &nbsp; Message
            </a>
            <a href="/note/">
              <span>
                <i className="fa fa-book"></i>{" "}
              </span>{" "}
              &nbsp; &nbsp; Notes
            </a>
          </span>

          <a
            className=" font-weight-bold "
            style={{ color: "white" }}
            href="# "
            onClick={this.onLogout}
          >
            <span>
              <i className="fa fa-sign-out"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Logout
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(SideNav);
