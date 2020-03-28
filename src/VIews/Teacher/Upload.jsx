import React, { Component } from "react";
import Swal from "sweetalert2";

export class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: "",
      inputFields: [
        {
          file: ""
        }
      ]
    };
  }

  handleRemoveFields = index => {
    const values = this.state.inputFields;
    values.splice(index, 1);
    this.setState({
      values
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", this.state.inputFields);
  };

  handleAddFields = () => {
    const values = this.state.inputFields;
    values.push({ file: "" });
    this.setState({
      values
    });
  };

  handleRemoveFields = index => {
    const values = this.state.inputFields;
    values.splice(index, 1);
    this.setState({
      values
    });
  };

  async onChange(e, index) {
    if (["file"].includes(e.target.name)) {
      let cats = [...this.state.inputFields];
      cats[index][e.target.name] = e.target.value;
      await this.setState({
        cats
      });
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
    console.log(this.state.inputFields);
  }

  handleSubmit1(e) {
    e.preventDefault();
    Swal.fire({
      title: "Uploaded",
      icon: "success",
      text: "File Uploaded successfully",
      showConfirmButton: false,
      timer: 3000
    });
    this.props.history.push("/list/tutorial/");
  }

  render() {
    return (
      <div>
        <div className="" style={{ Width: "550px", marginTop: "50px" }}>
          <form
            className="tutorial login_demo1"
            onSubmit={this.handleSubmit1.bind(this)}
            style={{ width: "750px", margin: "0 auto" }}
          >
            <h3 className="text-center">Upload Study Material</h3>
            <hr></hr>
            <div className="form-group">
              <label>Add (Study Materia Pdf, Image, Video)</label>
              {this.state.inputFields.map((inputField, index) => (
                <span className="" key={`${inputField}~${index}`}>
                  <div className="row">
                    <div className="col-md-9">
                      <input
                        type="file"
                        id="file"
                        name="file"
                        value={inputField.file}
                        onChange={e => {
                          this.onChange(e, index);
                        }}
                        className="form-control"
                      ></input>
                    </div>
                    <div className="form-group col-md-3">
                      <button
                        className="btn btn-link"
                        type="button"
                        style={{ color: "rgba(183, 28, 28, 1)" }}
                        onClick={() => this.handleRemoveFields(index)}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-link"
                        type="button"
                        style={{ color: "rgba(183, 28, 28, 1)" }}
                        onClick={() => this.handleAddFields()}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </span>
              ))}
            </div>

            <button
              type="submit"
              value="Login"
              className="btn btn-login btn-block text-white font-weight-bolder boxx "
              style={{
                background: "rgba(183, 28, 28, 1)",
                padding: "10px",
                fontSize: "12px",
                width: "100%",
                boxShadow: "0px 8px 25px -7px #c0c0c0",
                borderRadius: "4px"
              }}
            >
              UPLOAD FILE
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Upload;
