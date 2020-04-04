import React, { Component } from "react";
import TinyMCE from "react-tinymce";
import Swal from "sweetalert2";
import "./Student.css"
export class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSubmit(e) {
    e.preventDefault();
    Swal.fire({
      title: "Save",
      icon: "success",
      text: "Note saved successfully",
      showConfirmButton: false,
      timer: 3000
    });
    this.props.history.push("/note/");
  }
  render() {
    return (
      <div className="note "  style={{ marginTop: "-20px" }}>
        <div className="mt-4 notes p-5">
          <h3>
            <span>
              <input
              className="text-center"
                type="text"
                defaultValue="Create a Title"
                name="title"
                style={{ marginTop: "2px" }}
              />
            </span>

           
          </h3>
          <hr></hr>
          <div className="word_editor">
            <form>
              <div className="form-group">
                <TinyMCE
                  config={{
                    theme: "modern",
                    height: "55vh",
                    selector: "textarea",
                    cleanup_on_startup: true,
                    custom_undo_redo_levels: 20,
                    plugins:
                      "  autolink code link image lists print fullscreen   preview textcolor save media code  wordcount paste searchreplace insertdatetime media table directionality template charmap hr pagebreak anchor  advlist imagetools  textpattern noneditable charmap  emoticons ",
                    toolbar1:
                      "codesample saveToPdf  preview bold italic underline codesample undo redo | fontselect fontsizeselect  formatselect   |  backcolor forecolor  | alignleft alignright | aligncenter alignjustify | indent outdent | bullist numlist table emoticons  | link image media ltr rtl | codesample  searchreplace spellchecker paste save print  | charmap directionality  code codesample visualblocks visualchars |charmap hr pagebreak nonbreaking anchor |  textcolor fullscreen ",

                    content_css:
                      "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
                    codesample_content_css:
                      "http://ourcodeworld.com/material/css/prism.css",
                    external_plugins: {
                      saveToPdf:
                        "https://cdn.rawgit.com/Api2Pdf/api2pdf.tinymce/master/save-to-pdf/dist/save-to-pdf/plugin.js"
                    },
                    toolbar: "saveToPdf",
                    saveToPdfHandler: "/REPLACE-WITH-HANDLER-URL",
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
                <span className="float-right mt-2">
              <button
                type="submit"
                onClick={this.handleSubmit.bind(this)}
                className="btn btn-login text-white bg-success font-weight-bolder boxx "
                style={{
                  padding: "10px",
                  fontSize: "12px",
                  width: "120px",
                  boxShadow: "0px 8px 25px -7px #c0c0c0",
                  borderRadius: "4px"
                }}
              >
                Save Note
              </button>
            </span>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      
    );
  }
}

export default Note;
