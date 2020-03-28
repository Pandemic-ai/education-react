import React, { Component } from "react";
import { Helmet } from "react-helmet";

class Tuto extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Add Tutorial</title>
          <meta
            name="description"
            content="Login Page for student teacher adminstration"
          />
        </Helmet>

        <div className="login_demo" style={{ Width: "500px" }}>
          <h3 className="text-center">Add Tutorial</h3>

          <hr></hr>

          <form className="tutorial" style={{ width: "550px" }}>
            <div className=""></div>
          </form>
        </div>
      </div>
    );
  }
}

export default Tuto;
