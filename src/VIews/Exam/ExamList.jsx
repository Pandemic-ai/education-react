import React, { Component } from "react";
import "./Exam.css"
export class ExamList extends Component {
  handleSubmit(e) {
    const exam = "i am rahul raj";
    e.preventDefault();
    localStorage.setItem("Exam", exam);

    window.location.href = "/exam/question/";
  }
  render() {
    return (
      <div className="container" style={{ marginTop: "30px" }}>
        <div 
          className="question_list instructions-exam p-5"
          style={{ margin: "0 auto", maxWidth: "800px" }}
        >
          <h3>Instruction</h3>
          <hr></hr>

          <p>
            <strong> IDE:</strong> We recommend having an environment ready, so
            you can solve problems outside of browser.
          </p>

          <p>
            <strong>Resources: </strong>You can use help files and other
            resources that you normally use.
          </p>

          <p>
            <strong>Test duration:</strong> This test normally takes 17min, but
            you have up to 25min 30sec (no breaks allowed).
          </p>

          <div className="table_list" style={{ marginTop: "30px" }}>
            <h3>Upcoming Exam List</h3>
            <hr></hr>
            <table className="table ">
              <thead>
                <tr>
                  <th></th>
                  <th>ID</th>
                  <th>Subject</th>
                  <th>Teacher</th>
                  <th>Deadline</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      style={{ marginLeft: "10px", marginTop: "12px" }}
                      id="defaultCheck4"
                    />
                  </td>
                  <td style={{ paddingTop: "20px" }}>1</td>
                  <td style={{ paddingTop: "20px" }}>Mathematics</td>
                  <td style={{ paddingTop: "20px" }}>Someone </td>
                  <td style={{ paddingTop: "20px" }}>06-04-2020</td>
                  <td>
                    <button
                      className="btn btn-info bg-success"
                      style={{ padding: "5px", width: "150px" }}
                    >
                      {" "}
                      Take Sample Exam
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      style={{ marginLeft: "10px", marginTop: "12px" }}
                      id="defaultCheck4"
                    />
                  </td>
                  <td style={{ paddingTop: "20px" }}>2</td>
                  <td style={{ paddingTop: "20px" }}>Science</td>
                  <td style={{ paddingTop: "20px" }}>Someone </td>
                  <td style={{ paddingTop: "20px" }}>09-04-2020</td>
                  <td>
                    <button
                      className="btn btn-info bg-success"
                      style={{ padding: "5px", width: "150px" }}
                    >
                      {" "}
                      Take Sample Exam
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <form onSubmit={this.handleSubmit.bind(this)}>
              <div style={{ marginLeft: "20px" }}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck4"
                  required
                />
                <label class="form-check-label" for="defaultCheck4">
                  I have read all of the above and I agree with the{" "}
                  <a href="# " className="text-info">
                    {" "}
                    terms of use{" "}
                  </a>{" "}
                  and the{" "}
                  <a href="# " className="text-info">
                    {" "}
                    privacy policy
                  </a>{" "}
                  privacy policy.
                </label>
              </div>

              <button
                className="btn btn-info bg-success"
                style={{ width: "200px", marginTop: "20px" }}
              >
                START TEST
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ExamList;
