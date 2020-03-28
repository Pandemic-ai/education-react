import React, { Component } from "react";
import Swal from "sweetalert2";

export class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSubmit(e) {
    e.preventDefault();
    Swal.fire({
      title: "Sent",
      icon: "success",
      text: "Notification sent successfully",
      showConfirmButton: false,
      timer: 3000
    });
    this.props.history.push("/studentnotification/");
  }

  render() {
    return (
      <div className="container">
        <form
          style={{ margin: "0 auto", width: "600px" }}
          onSubmit={this.handleSubmit.bind(this)}
          class="login_demo"
        >
          <h3 className="text-center">Send Notification</h3>
          <hr></hr>

          <label>Category</label>

          {localStorage.getItem("Username") === "admin@admin.com" ? (
            <select class="form-control" required>
              <option disabled selected hidden>
                Choose
              </option>
              <option>All</option>
              <option>Teacher</option>
              <option>Student</option>
            </select>
          ) : localStorage.getItem("Username") === "teacher@teacher.com" ? (
            <span>
              <select class="form-control">
                <option disabled selected hidden>
                  Choose Class
                </option>
                <option>----</option>
                <option>1st</option>
                <option>2nd</option>
                <option>3rd</option>
                <option>4th</option>
              </select>

              <select class="form-control">
                <option disabled selected hidden>
                  Select Student
                </option>
                <option>Rahul Raj</option>
                <option>Egzontina</option>
                <option>Senad</option>
                <option>Gabriela</option>
              </select>
            </span>
          ) : (
            <select class="form-control">
              <option disabled selected hidden>
                Select Teacher
              </option>
              <option>Rahul Raj</option>
              <option>Egzontina</option>
              <option>Senad</option>
              <option>Gabriela</option>
            </select>
          )}

          <div className="form-group" style={{ marginTop: "10px" }}>
            <label>Message</label>
            <textarea rows="3" required class="form-control"></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-login text-white btn-block font-weight-bolder boxx "
            style={{
              background: "rgba(183, 28, 28, 1)",
              padding: "10px",
              fontSize: "16px",
              width: "100%",
              boxShadow: "0px 8px 25px -7px #c0c0c0",
              borderRadius: "4px"
            }}
          >
            SEND NOTIFICATION
          </button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
