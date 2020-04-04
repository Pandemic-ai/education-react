import React, { Component } from "react";
import Chart from "react-apexcharts";

export class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 100,
          type: "radialBar",
          toolbar: {
            show: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            dataLabels: {
              show: false
            },
            hollow: {
              margin: 0,
              size: "65%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: "#FFFFFF",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              show: true,
              name: {
                offsetY: 25,
                show: true,
                color: "black",
                position: "bottom",
                fontSize: "15px"
              },
              value: {
                formatter: function(val) {
                  return parseInt(val) + "%";
                },
                color: "#111",
                offsetY: -10,
                marginTop: "10px",
                fontSize: "30px",

                show: true
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#B2221F", "#66B73E"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["TOTAL"]
      },
      series: [37],
      random: 0
    };
  }

  componentDidMount() {
    const min = 30;
    const max = 100;
    const random = min + Math.random() * (max - min);
    this.setState({
      random,
      show: true
    });
  }
  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="student_detail">
          <h1 className="font-weight-normal">Rahul Raj</h1>
          <h5 className="text-primary" style={{ paddingBottom: "20px" }}>
            email@gmail.com
          </h5>

          <hr></hr>
        </div>

        <div className="row">
          <div className="col-md-2" style={{ marginTop: "20px" }}>
            <h4>RESULT</h4>

            <h6 className="font-weight-bolder" style={{ marginTop: "15px" }}>
              STATUS:{" "}
              {this.state.random >= 70 ? (
                <span className="text-success"> &nbsp;PASS</span>
              ) : (
                <span className="text-danger"> &nbsp;FAIL</span>
              )}{" "}
            </h6>

            <h6 className="font-weight-bolder" style={{ marginTop: "20px" }}>
              TIME: &nbsp; &nbsp; 7min
            </h6>
          </div>

          <div className="col-md-2">
            <Chart
              style={{ marginTop: "22px" }}
              options={this.state.options}
              series={this.state.series}
              type="radialBar"
              height="200"
            />
          </div>

          <div className="col-md-5" style={{ marginTop: "20px" }}>
            <h4>BREAKDOWN </h4>
            <div className="row" style={{ marginTop: "25px" }}>
              <div className="col-md-3">
                <h6>Mathematics </h6>
                <h6>Science </h6>
                <h6 style={{ marginTop: "8px" }}>History </h6>
                <h6 style={{ marginTop: "11px" }}>Geography </h6>
              </div>
              <div className="col-md-7">
                <div class="progress" style={{ height: "15px" }}>
                  <div
                    class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "75%", height: "15px" }}
                    // aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {/* 25% */}
                  </div>
                </div>

                <div
                  class="progress"
                  style={{ height: "15px", marginTop: "14px" }}
                >
                  <div
                    class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "65%", height: "15px" }}
                    // aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {/* 25% */}
                  </div>
                </div>

                <div
                  class="progress"
                  style={{ height: "15px", marginTop: "14px" }}
                >
                  <div
                    class="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "45%", height: "15px" }}
                    // aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {/* 25% */}
                  </div>
                </div>

                <div
                  class="progress"
                  style={{ height: "15px", marginTop: "14px" }}
                >
                  <div
                    class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "85%", height: "15px" }}
                    // aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {/* 25% */}
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <h6>75% </h6>
                <h6>65% </h6>
                <h6>45% </h6>
                <h6>85% </h6>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  class="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  History
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Notes
                </a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <p style={{ fontSize: "14px", marginTop: "10px" }}>
                  1. Test URL was created on May 25, 2016 <br></br>
                  2. Candidate started the test on Jun 1, 2016 <br></br>
                  3. Candidate completed the test on Jun 1, 2016{" "}
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <p style={{ fontSize: "14px" }}>
                  david : This candidate is strong on algorithms <br></br>
                  bill : I recommend this candidate
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="student_list" style={{ marginTop: "45px" }}>
          <div className="export_share  float-right">
            <button className="btn btn-info" style={{ marginRight: "10px" }}>
              EXPORT
            </button>
            <button className="btn btn-info">SHARE</button>
          </div>

          <div className="question_table" style={{ marginTop: "45px" }}>
            <table className="table ">
              <thead>
                <tr>
                  <th>ORDER</th>
                  <th>QUESTION</th>
                  <th>SCORE</th>
                  <th>TIME</th>
                  <th>TYPE</th>
                  <th>EXPAND</th>
                  <th>
                    <abbr title="MAX point per question."> MAX POINTS</abbr>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="text-primary">
                    Q: Now it corona time please ...
                  </td>
                  <td>
                    {" "}
                    <div
                      class="progress "
                      style={{ height: "15px", marginTop: "6px" }}
                    >
                      <div
                        class="progress-bar bg-danger "
                        role="progressbar"
                        style={{ width: "100%", height: "15px" }}
                        // aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        Wrong
                      </div>
                    </div>
                  </td>
                  <td> 1 min 23 sec </td>
                  <td>
                    {" "}
                    <abbr title="Live Coding">Code</abbr>
                  </td>
                  <td> 3 Points</td>
                  <td className="text-info"> Details</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td className="text-primary">
                    Q: Now it corona time please ...
                  </td>
                  <td>
                    {" "}
                    <div
                      class="progress"
                      style={{ height: "15px", marginTop: "6px" }}
                    >
                      <div
                        class="progress-bar bg-success "
                        role="progressbar"
                        style={{ width: "100%", height: "15px" }}
                        // aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        Right
                      </div>
                    </div>
                  </td>
                  <td> 1 min 23 sec </td>
                  <td>
                    {" "}
                    <abbr title="Quality Assurance">AQ</abbr>
                  </td>
                  <td> 3 Points</td>
                  <td className="text-info"> Details</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td className="text-primary">
                    Q: Now it corona time please ...
                  </td>
                  <td>
                    {" "}
                    <div
                      class="progress"
                      style={{ height: "15px", marginTop: "6px" }}
                    >
                      <div
                        class="progress-bar bg-success "
                        role="progressbar"
                        style={{ width: "100%", height: "15px" }}
                        // aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        Right
                      </div>
                    </div>
                  </td>
                  <td> 1 min 23 sec </td>
                  <td>
                    {" "}
                    <abbr title="Multiple Correct Answer">MCA</abbr>
                  </td>
                  <td> 3 Points</td>
                  <td className="text-info"> Details</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td className="text-primary">
                    Q: i don't know what to do next in ...
                  </td>
                  <td>
                    {" "}
                    <div
                      class="progress"
                      style={{ height: "15px", marginTop: "6px" }}
                    >
                      <div
                        class="progress-bar bg-danger "
                        role="progressbar"
                        style={{ width: "100%", height: "15px" }}
                        // aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        Wrong
                      </div>
                    </div>
                  </td>
                  <td> 9 min 13 sec </td>
                  <td>
                    {" "}
                    <abbr title="Multiple Choice Question">MCQ</abbr>
                  </td>
                  <td> 2 Points</td>
                  <td className="text-info"> Details</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td className="text-primary">
                    Q: i don't know what to do next in ...
                  </td>
                  <td>
                    {" "}
                    <div
                      class="progress"
                      style={{ height: "15px", marginTop: "6px" }}
                    >
                      <div
                        class="progress-bar bg-success "
                        role="progressbar"
                        style={{ width: "70%", height: "15px" }}
                        // aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        70%
                      </div>
                    </div>
                  </td>
                  <td> 6 min 03 sec </td>
                  <td>
                    {" "}
                    <abbr title="Type Question">Text</abbr>
                  </td>
                  <td> 3 Points</td>
                  <td className="text-info"> Details</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td className="text-primary">
                    Q: i don't know what to do next in ...
                  </td>
                  <td>
                    {" "}
                    <div
                      class="progress"
                      style={{ height: "15px", marginTop: "6px" }}
                    >
                      <div
                        class="progress-bar bg-success "
                        role="progressbar"
                        style={{ width: "90%", height: "15px" }}
                        // aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        90%
                      </div>
                    </div>
                  </td>
                  <td> 6 min 03 sec </td>
                  <td>
                    {" "}
                    <abbr title="Type Question">Text</abbr>
                  </td>
                  <td> 3 Points</td>
                  <td className="text-info"> Details</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
