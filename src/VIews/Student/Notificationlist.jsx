import React, { Component } from "react";

export class Notificationlist extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <h4 className="text-left">
          {" "}
          Sent Notifaction List{" "}
          <span style={{ float: "right" }}>
            <a
              href="/notification/"
              className="text-white float-right bg-success text-center font-weight-bolder"
              style={{
                padding: "10px",
                fontSize: "12px",
                width: "150px",
                boxShadow: "0px 8px 25px -7px #c0c0c0",
                borderRadius: "4px"
              }}
            >
              Send Notifaction
            </a>
          </span>
        </h4>
        <hr></hr>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Notification</th>
              <th>To</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                Notifaction Notifaction notificatio notificatio notificatio
              </td>
              <td> Teacher</td>
              <td>
                <button className="btn" style={{ padding: "5px" }}>
                  <i className="fa fa-trash text-dark"></i>
                </button>
              </td>
            </tr>

            <tr>
              <td>
                You have Complete assignment till tomorrow otherwise you will
              </td>
              <td> Student</td>
              <td>
                <button className="btn " style={{ padding: "5px" }}>
                  <i className="fa fa-trash text-dark"></i>
                </button>
              </td>
            </tr>

            <tr>
              <td>
                From tomorrow school is closed dut COVID-19 but online class
                will{" "}
              </td>
              <td> All(Teacher, Student)</td>
              <td>
                <button className="btn " style={{ padding: "5px" }}>
                  <i className="fa fa-trash text-dark"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Notificationlist;
