import React, { Component } from "react";
import TinyMCE from "react-tinymce";
import Swal from "sweetalert2";

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
      <div className="note" style={{ marginTop: "-20px" }}>
        <div>
          <h3>
            <span>
              <input
                type="text"
                defaultValue="Create Title"
                name="title"
                style={{ marginTop: "2px" }}
              />
            </span>

            <span className="float-right">
              <button
                type="submit"
                onClick={this.handleSubmit.bind(this)}
                className="btn btn-login text-white font-weight-bolder boxx "
                style={{
                  background: "rgba(183, 28, 28, 1)",
                  padding: "10px",
                  fontSize: "12px",
                  width: "120px",
                  boxShadow: "0px 8px 25px -7px #c0c0c0",
                  borderRadius: "4px"
                }}
              >
                SAVE
              </button>
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Note;
