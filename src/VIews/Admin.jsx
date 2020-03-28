import React, { Component } from "react";
import { Helmet } from "react-helmet";

export class Admin extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Admin Dashboard</title>
          <meta
            name="description"
            content="Login Page for student teacher adminstration"
          />
        </Helmet>
        <h2>Admin Dashbaord</h2>
      </div>
    );
  }
}

export default Admin;
