import React, { Component } from "react";
import TinyMCE from "react-tinymce";
import Swal from "sweetalert2";

// import ReactPaint from "react-paint";

export class VirtualClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementMe = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  };

  handlSubmit(e) {
    e.preventDefault();
    Swal.fire({
      title: "Submitted",
      icon: "success",
      text: "You have successfully submitted your home work",
      showConfirmButton: false,
      timer: 3000
    });
  }

  render() {
    return (
      <div
        className="container-fluid row ml-0 "
        style={{ height: "100vh", marginTop: "30px", overflow: "scroll" }}
      >
        <div className="col-md-5 mt-2">
          <div className="col-md-12 ">
            <h4> Live Board </h4>
            <hr></hr>
            <TinyMCE
              config={{
                theme: "modern",
                height: "38vh",
                selector: "textarea",
                cleanup_on_startup: true,
                custom_undo_redo_levels: 20,
                external_plugins: {
                  saveToPdf:
                    "https://cdn.rawgit.com/Api2Pdf/api2pdf.tinymce/master/save-to-pdf/dist/save-to-pdf/plugin.js"
                },
                toolbar: "saveToPdf",
                saveToPdfHandler: "/REPLACE-WITH-HANDLER-URL",
                plugins:
                  "  autolink code link image lists print fullscreen   preview textcolor save media code  wordcount paste searchreplace insertdatetime media table directionality template charmap hr pagebreak anchor  advlist imagetools  textpattern noneditable charmap  emoticons ",
                toolbar1:
                  "codesample saveToPdf preview bold italic underline codesample undo redo fontselect fontsizeselect  |  formatselect   |  backcolor forecolor  | alignleft alignright | aligncenter alignjustify | indent outdent | bullist numlist table emoticons   |  save print  |   visualblocks visualchars |charmap hr pagebreak nonbreaking anchor |  textcolor fullscreen ",
                content_css:
                  "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
                codesample_content_css:
                  "http://ourcodeworld.com/material/css/prism.css",
                toolbar_sticky: true,
                autosave_interval: "30s",

                contextmenu: "formats | image | codesample"
              }}
              onChange={this.handleEditorChange}
            />
          </div>

          <span style={{ height: "40vh", overflow: " scroll" }}>
            <div className="row p-3">
              <div className="col-md-6">
                <img
                  className="image"
                  src="https://c8.alamy.com/comp/KE6M0B/portrait-of-happy-boy-listening-music-in-headphone-with-computer-on-KE6M0B.jpg"
                  alt=""
                />
                <div class="middle">
                  <div class="text">John Doe</div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="image"
                  src="https://c8.alamy.com/comp/KE6M0B/portrait-of-happy-boy-listening-music-in-headphone-with-computer-on-KE6M0B.jpg"
                  alt=""
                />
                <div class="middle">
                  <div class="text">John Doe</div>
                </div>
              </div>
            </div>
            <div className="row p-3">
              <div className="col-md-6">
                <img
                  className="image"
                  src="https://c8.alamy.com/comp/KE6M0B/portrait-of-happy-boy-listening-music-in-headphone-with-computer-on-KE6M0B.jpg"
                  alt=""
                />
                <div class="middle">
                  <div class="text">John Doe</div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="image"
                  src="https://c8.alamy.com/comp/KE6M0B/portrait-of-happy-boy-listening-music-in-headphone-with-computer-on-KE6M0B.jpg"
                  alt=""
                />
                <div class="middle">
                  <div class="text">John Doe</div>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div className="mt-2 col-md-7">
          <h4> Live Session By Teacher Name </h4>
          <hr></hr>
          <iframe
            src="http://www.youtube.com/embed/pgk-719mTxM?wmode=transparent"
            style={{ border: "0", width: "100%", height: "70vh" }}
            class="video_course"
            title="Tutorial Video"
          ></iframe>

          <button
            className="btn "
            onClick={this.incrementMe.bind(this)}
            style={{
              marginTop: "20px",
              width: "110px",
              border: "1px solid black"
            }}
          >
            <span role="img" aria-label="Close">
              ❤️
            </span>
            Likes: <strong>{this.state.count}</strong>
          </button>

          <button
            type="button"
            className="btn btn-primary float-right"
            data-toggle="modal"
            data-target="#exampleModal11"
            style={{ marginTop: "20px", width: "150px" }}
          >
            Upload Work
          </button>

          <button
            type="button"
            className="btn btn-primary float-right"
            data-toggle="modal"
            data-target="#exampleModal"
            style={{ marginTop: "20px", width: "100px", marginRight: "10px" }}
          >
            Chat
          </button>

          {/* Chat Model Will br here */}

          <div
            class="modal fade "
            id="exampleModal11"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered " role="document">
              <div class="modal-content ">
                <div class="modal-header">
                  <h5 class="modal-title text-dark" id="exampleModalLabel">
                    Upload Your Home Work
                  </h5>
                  <button
                    type="button"
                    class="close text-dark"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden={true}>&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form onSubmit={this.handlSubmit.bind(this)}>
                    <div className="form-group">
                      <label htmlFor="studen name">Student Name</label>
                      <input
                        type="text"
                        value="Student Name"
                        disabled
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="image">
                        Upload Home Work(Pdf,Doc & image form)
                      </label>
                      <input
                        type="file"
                        placeholder="Upload Home work file"
                        required
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="studen name">Comment</label>
                      <input
                        type="text"
                        placeholder="Comment about your work"
                        className="form-control"
                      />
                    </div>
                    <button className="btn btn-primary btn-block">
                      SUBMIT WORK
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Model Will br here */}

          <div
            class="modal fade "
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered " role="document">
              <div class="modal-content bg-dark">
                <div class="modal-header">
                  <h5 class="modal-title text-white" id="exampleModalLabel">
                    Text Your Friends
                  </h5>
                  <button
                    type="button"
                    class="close text-white"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden={true}>&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div>
                      <textarea
                        rows={14}
                        className="bg-dark text-white form-control"
                      ></textarea>
                    </div>
                    <div class="type_msg">
                      <div class="input_msg_write">
                        <input
                          type="text"
                          style={{ borderBottom: "1px solid white" }}
                          class="write_msg text-white"
                          placeholder="Type a message"
                        />
                        <button class="msg_send_btn" type="button">
                          <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VirtualClass;
