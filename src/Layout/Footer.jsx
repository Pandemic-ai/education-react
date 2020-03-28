import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="" style={{ marginTop: "40px" }}>
        <div className="bottom_navbar" style={{ width: "100%" }}>
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ marginLeft: "0px", marginTop: "150px" }}
          >
            <ul className="navbar-nav navv mr-auto " style={{ opacity: "0.5" }}>
              <li className="nav-item nav-item1  ">
                <p className="nav-link text-dark">
                  Copyright 2020 VivaDrive Polska
                </p>
              </li>
            </ul>

            <ul className="navbar-nav navv nav1 ">
              <li className="nav-item nav-link   ">
                <a
                  href=" https://www.linkedin.com/company/vivadrive/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ marginRight: "16px" }}
                >
                  <img src={linkedin} alt="Linkedin" className="social_image" />
                </a>
                <a
                  href="https://twitter.com/vivadriveio"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ marginRight: "16px" }}
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/pg/vivadriveio"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ marginRight: "16px" }}
                >
                  <img
                    src={facebook}
                    alt="Linkedin"
                    className="social_image1"
                  />
                </a>
                <a
                  href=" https://medium.com/vivadrive"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={google} alt="Linkedin" className="social_image" />
                </a>
              </li>
            </ul>
          </nav>

          <div className="bottom_footer">
            <nav
              className="navbar navbar-expand-lg navbar-dark"
              style={{ marginLeft: "0px", marginTop: "0px" }}
            >
              <ul
                className="navbar-nav navv mr-auto "
                style={{ opacity: "0.5" }}
              ></ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
