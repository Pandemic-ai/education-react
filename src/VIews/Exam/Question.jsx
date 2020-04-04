import React, { Component } from "react";
import Swal from "sweetalert2";

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {},
      breakRemainingSeconds: 300
    };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
  }

  handlSubmit(e) {
    e.preventDefault();
    Swal.fire({
      title: "Submitted",
      icon: "success",
      text: "You have successfully submitted test",
      showConfirmButton: false,
      timer: 3000
    });
    window.location.href = "/result/";
    localStorage.removeItem("Exam");
  }

  componentDidMount() {
    let timeLeft = this.createTime(this.state.breakRemainingSeconds);
    this.setState({ time: timeLeft });

    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  createTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let timeObject = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return timeObject;
  }
  countDown() {
    let seconds = this.state.breakRemainingSeconds - 1;
    this.setState({
      time: this.createTime(seconds),
      breakRemainingSeconds: seconds
    });

    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div className=" questiontext">
        <div
          className="bg-info "
          style={{ paddingBottom: "10px", padding: "20px" }}
        >
          <h6 className=" text-white">
            <span className="float-left text-white">
              Mathematics Exam for Class 8th
            </span>
            <span className="float-right text-white">
              {" "}
              TIME LEFT: {this.state.time.m} Min {this.state.time.s} Sec
            </span>
          </h6>
        </div>

        <section className="question_section">
          <div className="rowsdsd" style={{ width: "100%" }}>
            <form
              onSubmit={this.handlSubmit.bind(this)}
              className="quiz_time"
              style={{ maxWidth: "900px", margin: "0 auto" }}
              required
            >
              <h4 className="font-weight-bold">Single Choice Answer</h4>
              <hr></hr>
              <div className="question1">
                <h6>
                  Q1 . What is difference between class and function component
                  in react ?
                </h6>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    First Option
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    Second Option
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios4"
                    value="option2"
                  />
                  <label class="form-check-label" for="exampleRadios4">
                    Third option
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option2"
                  />
                  <label class="form-check-label" for="exampleRadios3">
                    Fourth Option
                  </label>
                </div>
              </div>

              <hr></hr>
              {/* This is second second lol */}

              <div className="question1">
                <h6>
                  Q2 . What is difference between class and function component
                  in react ?
                </h6>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios11"
                    value="option1"
                  />
                  <label class="form-check-label" for="exampleRadios11">
                    First Option
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios12"
                    value="option2"
                  />
                  <label class="form-check-label" for="exampleRadios12">
                    Second Option
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios14"
                    value="option2"
                  />
                  <label class="form-check-label" for="exampleRadios14">
                    Third option
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios13"
                    value="option2"
                  />
                  <label class="form-check-label" for="exampleRadios13">
                    Fourth Option
                  </label>
                </div>
              </div>

              <h4 className="font-weight-bold" style={{ marginTop: "15px" }}>
                Multiple Choice Question
              </h4>
              <hr></hr>
              <div className="question1">
                <h6>
                  Q3 . What is difference between class and function component
                  in react ?
                </h6>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    First Option
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck2"
                  />
                  <label class="form-check-label" for="defaultCheck2">
                    Second Option
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck3"
                  />
                  <label class="form-check-label" for="defaultCheck3">
                    Third Option
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck4"
                  />
                  <label class="form-check-label" for="defaultCheck4">
                    Second Option
                  </label>
                </div>
              </div>

              <hr></hr>

              {/* Second Question */}

              <div className="question1">
                <h6>
                  Q4 . What is difference between class and function component
                  in react ?
                </h6>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    First Option
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck2"
                  />
                  <label class="form-check-label" for="defaultCheck2">
                    Second Option
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck3"
                  />
                  <label class="form-check-label" for="defaultCheck3">
                    Third Option
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck4"
                  />
                  <label class="form-check-label" for="defaultCheck4">
                    Second Option
                  </label>
                </div>
              </div>

              <h4 className="font-weight-bold" style={{ marginTop: "15px" }}>
                Type Question
              </h4>
              <hr></hr>
              <div className="question1">
                <h6>
                  Q5 . What is difference between class and function component
                  in react ?
                </h6>
                <textarea
                  required
                  className="form-control "
                  id="heee11"
                  rows={4}
                  editable={false}
                  selectTextOnFocus={false}
                ></textarea>
              </div>
              <hr></hr>

              <div className="question1">
                <h6>
                  Q6 . What is difference between class and function component
                  in react ?
                </h6>
                <textarea
                  required
                  className="form-control "
                  editable={false}
                  selectTextOnFocus={false}
                  rows={4}
                  id="heee11"
                ></textarea>
              </div>

              <button
                className="btn btn-success btn-block"
                style={{ marginTop: "15px" }}
              >
                SUBMIT TEST
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Question;
