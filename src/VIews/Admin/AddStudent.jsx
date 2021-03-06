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
      title: "Saved",
      icon: "success",
      text: "Student saved successfully",
      showConfirmButton: false,
      timer: 3000
    });
    this.props.history.push("/classmate/");
  }
  render() {
    return (
      <div className="container" style={{ marginTop: "30px" }}>
        <form
          style={{ margin: "0 auto", maxWidth: "700px" }}
          class="box11"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <h3 className="text-center">Add /Edit Student</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="name">Name</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    class="form-control"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="name">DOB</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                  <input type="date" name="name" class="form-control" />
                </div>
              </div>

              <div class="form-group">
                <label for="name">Address</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-address-card"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Address"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="name">Class</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-address-card"></i>
                    </span>
                  </div>
                  <select class="form-control">
                    <option disabled selected hidden>
                      Choose
                    </option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="name">Password</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Password"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="name">Email</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Email Id"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="name">Phone Number</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-phone"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="name">City</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-address-card"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="City"
                    class="form-control
                    "
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="name">Subject</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-address-card"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Subject"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
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
            Save Student
          </button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
