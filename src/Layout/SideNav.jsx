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
    const { showNav, status } = this.state;
    let navCoverStyle = { width: showNav ? "100%" : "0" };
    let sideNavStyle = { width: showNav ? "270px" : "0" };

    return (
      <React.Fragment>
        <span onClick={this.openNavClick} class="open-nav text-dark">
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
            USername
          </p>
          <hr></hr>
          <a href="# ">
            <span>
              <i className="fa fa-desktop"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Dashboard
          </a>
          <a href="# ">
            <span>
              <i className="fa fa-plus"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Add Student
          </a>
          <a href="# ">
            <span>
              <i className="fa fa-eye"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; Add Teacher
          </a>
          <a href="# ">
            <span>
              <i className="fa fa-pen"></i>{" "}
            </span>{" "}
            &nbsp; &nbsp; View Student
          </a>

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

          <div className="row">
            <div className="col-sm-2">
              {" "}
              <a href=" " style={{ marginRight: "14px" }}>
                <i className="fa fa-facebook"></i>
              </a>
            </div>
            <div className="col-sm-2">
              <a href=" " style={{ marginRight: "14px" }}>
                <i className="fa fa-instagram"></i>
              </a>
            </div>
            <div className="col-sm-2">
              <a href=" " style={{ marginRight: "14px" }}>
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <div className="col-sm-2">
              {" "}
              <a href=" ">
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(SideNav);
