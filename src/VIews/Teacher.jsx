import React, { Component } from "react";
import { Helmet } from "react-helmet";
export class Teacher extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Teacher Dashboard</title>
          <meta
            name="description"
            content="Login Page for student teacher adminstration"
          />
        </Helmet>
        <h2>Teacher Dashbaord</h2>
      </div>
    );
  }
}

export default Teacher;
