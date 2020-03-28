import React, { Component } from "react";
import Admin from "./Admin";
// import Student from "./Student";
// import Teacher from "./Teacher";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        {/* {localStorage.getItem("Username") === "admin@admin.com" ? (
          <Admin />
        ) : localStorage.getItem("Username") === "teacher@teacher.com" ? (
          <Teacher />
        ) : (
          <Student />
        )} */}

        <Admin />
      </div>
    );
  }
}

export default Dashboard;
