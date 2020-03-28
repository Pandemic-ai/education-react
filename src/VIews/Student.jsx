import React, { Component } from "react";

import { Helmet } from "react-helmet";
export class Student extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Student Dashboard</title>
          <meta
            name="description"
            content="Login Page for student teacher adminstration"
          />
        </Helmet>
        <h2>Student Dashbaord</h2>
      </div>
    );
  }
}

export default Student;
