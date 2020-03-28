import React, { Component } from "react";

export class ClassMate extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <h4 className="text-left">
          Student List{" "}
          <a
            href="/addstudent/"
            className="text-white float-right text-center font-weight-bolder"
            style={{
              background: "rgba(183, 28, 28, 1)",
              padding: "10px",
              fontSize: "12px",
              width: "150px",
              boxShadow: "0px 8px 25px -7px #c0c0c0",
              borderRadius: "4px"
            }}
          >
            Add Student
          </a>
        </h4>
        <hr></hr>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>CourseName</th>
              <th>Class</th>
              <th>Message</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Somethinf</td>
              <td>something@gmail.com</td>

              <td>4645474747</td>
              <td>Computer Science</td>
              <td>8th</td>
              <td>
                <button className="btn " style={{ padding: "5px" }}>
                  <i className="fa fa-envelope"></i>
                </button>
                <button className="btn " style={{ padding: "5px" }}>
                  <i className="fa fa-pencil-square-o"></i>
                </button>
                <button className="btn " style={{ padding: "5px" }}>
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Somethinf</td>
              <td>something@gmail.com</td>

              <td>4645474747</td>
              <td>Mathematics</td>
              <td>8th</td>
              <td>
                <button className="btn " style={{ padding: "5px" }}>
                  <i className="fa fa-envelope"></i>
                </button>
                <button className="btn " style={{ padding: "5px" }}>
                  <i className="fa fa-pencil-square-o"></i>
                </button>
                <button className="btn " style={{ padding: "5px" }}>
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Somethinf</td>
              <td>something@gmail.com</td>
              <td>4645474747</td>
              <td>Science</td>
              <td>8th</td>
              <td>
                <button className="btn " style={{ padding: "5px" }}>
                  <i className="fa fa-envelope"></i>
                </button>
                <button className="btn " style={{ padding: "5px" }}>
                  <i className="fa fa-pencil-square-o"></i>
                </button>
                <button className="btn " style={{ padding: "5px" }}>
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClassMate;
