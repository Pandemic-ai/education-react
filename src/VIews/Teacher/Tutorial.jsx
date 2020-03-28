import React, { Component } from "react";
import { Helmet } from "react-helmet";
import TinyMCE from "react-tinymce";
import Swal from "sweetalert2";
// import { Editor } from "@tinymce/tinymce-react";
class Tutorial extends Component {
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

  async onChange(e, index) {
    if (["firstName", "lastName"].includes(e.target.name)) {
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

  //   onChange = (e) => {
  //     const { name, value } = e.target;

  //     this.setState(prevState => ({ inputFields: { ...prevState.inputFields, [name]: value } }));
  //  }

  // Then
  // onChange={this.onChange}

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

  //   handleEditorChange = async content => {
  //     await this.setState({ details: content });
  //     console.log(this.state);
  //   };

  handleSubmit(e) {
    e.preventDefault();
    Swal.fire({
      title: "Added",
      icon: "success",
      text: "Tutorial added successfully",
      showConfirmButton: false,
      timer: 3000
    });
    this.props.history.push("/list/tutorial/");
  }

  handleEditorChange(e) {
    console.log(e.target.getContent());
  }
  render() {
    return (
      <div style={{}}>
        <Helmet>
          <title>Add Tutorial</title>
          <meta
            name="description"
            content="Login Page for student teacher adminstration"
          />
        </Helmet>

        <div className=" login_demo1" style={{ Width: "500px" }}>
          <form
            className="tutorial login_demo1"
            style={{ width: "750px", margin: "0 auto" }}
          >
            <h3 className="text-center">Add Tutorial</h3>

            <hr></hr>
            <div className="form-group ">
              <label htmlFor>Classes or Section</label>
              <select className="form-control">
                <option value="" disabled selected hidden>
                  Class
                </option>
                <option>2th</option>
                <option>3rd</option>
                <option>4th</option>
                <option>5th</option>
                <option>6th</option>
                <option>7th</option>
                <option>8th</option>
                <option>9th</option>
                <option>10th</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor>Subject</label>
              <select className="form-control">
                <option value="" disabled selected hidden>
                  Subject
                </option>
                <option>Computer Science</option>
                <option>Mathematics</option>
                <option>Science</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Biology</option>
                <option>History</option>
                <option>Economics</option>
                <option>Geography</option>
                <option>English</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor>Tutorial Title</label>
              <input type="text" className="form-control" name="title" />
            </div>

            <div className="form-group">
              <label>Tutorial</label>
              <TinyMCE
                config={{
                  theme: "modern",
                  selector: "textarea",
                  cleanup_on_startup: true,
                  custom_undo_redo_levels: 20,
                  plugins:
                    "  autolink code link image lists print fullscreen   preview textcolor save media code  wordcount paste searchreplace insertdatetime media table directionality template charmap hr pagebreak anchor  advlist imagetools  textpattern noneditable charmap  emoticons ",
                  toolbar1:
                    "codesample  preview bold italic underline codesample undo redo | fontselect fontsizeselect  formatselect   |  backcolor forecolor  | alignleft alignright | aligncenter alignjustify | indent outdent | bullist numlist table emoticons  | link image media ltr rtl | codesample  searchreplace spellchecker paste save print  | charmap directionality  code codesample visualblocks visualchars |charmap hr pagebreak nonbreaking anchor |  textcolor fullscreen ",

                  content_css:
                    "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
                  codesample_content_css:
                    "http://ourcodeworld.com/material/css/prism.css",
                  //   codesample_dialog_height: 400,
                  //   codesample_dialog_width: 600,
                  toolbar_sticky: true,
                  autosave_interval: "30s",
                  codesample_languages: [
                    { text: "HTML/XML", value: "markup" },
                    { text: "JavaScript", value: "javascript" },
                    { text: "CSS", value: "css" },
                    { text: "PHP", value: "php" },
                    { text: "Ruby", value: "ruby" },
                    { text: "Python", value: "python" },
                    { text: "Java", value: "java" },
                    { text: "C", value: "c" },
                    { text: "C#", value: "csharp" },
                    { text: "C++", value: "cpp" }
                  ],
                  contextmenu: "formats | image | codesample"
                }}
                onChange={this.handleEditorChange}
              />
            </div>

            <div className="form-group">
              <label>Upload (Study Materia Pdf, Image, Video)</label>
              {this.state.inputFields.map((inputField, index) => (
                <span className="" key={`${inputField}~${index}`}>
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

                  <div className="form-group col-sm-2">
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() => this.handleRemoveFields(index)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() => this.handleAddFields()}
                    >
                      +
                    </button>
                  </div>
                </span>
              ))}
            </div>

            <button
              type="submit"
              value="Login"
              onClick={this.handleSubmit.bind(this)}
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
              SUBMIT TUTORIAL
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Tutorial;
