import React, { Component } from "react";

export class TutorialDetails extends Component {
  render() {
    return (
      <div>
        <section id="sub-header" style={{}}>
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h1 className="h1">Course title</h1>
                <p class="lead">
                  Caulie <strong>dandelion</strong> maize lentil collard greens
                  radish arugula sweet pepper water.
                </p>
              </div>
            </div>
            {/* <!-- End row --> */}

            <div class="row" id="sub-header-features-2">
              <div class="col-md-6">
                <h2>A brief summary</h2>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                  civibus efficiantur in. Nec id tempor{" "}
                  <strong>imperdiet deterruisset</strong>, doctus volumus
                  explicari qui ex, appareat similique an usu. Vel an hinc
                  putant fierent, saperet legimus offendit sed ei doctus volumus
                  explicari qui ex, appareat similique an usu. . Dolor euripidis
                  cum eu, ea per lucilius periculis corrumpit, ut euismod
                  omittam ancillae his.
                </p>
                <p>
                  <em>John - General Manager</em>
                </p>
              </div>
              <div class="col-md-6">
                <h2>What you will learn</h2>
                <p>
                  Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus
                  civibus efficiantur in. Nec id tempor imperdiet deterruisset,
                  doctus volumus explicari qui.
                </p>
                <ul class="list_ok">
                  <li>
                    <strong>Certified</strong> and expert teachers
                  </li>
                  <li>
                    <strong>Extensive</strong> doumentation provided
                  </li>
                  <li>
                    <strong>Money back</strong> garantee
                  </li>
                  <li>
                    <strong>Became an exeprt</strong> in only 6 days
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End row --> */}
          </div>
          {/* <!-- End container --> */}
          <div class="divider_top"></div>
        </section>

        <section id="main_content">
          <div class="container">
            <div class="row">
              <div class="col-md-8" style={{ marginTop: "0px" }}>
                <iframe
                  src="http://www.youtube.com/embed/pgk-719mTxM?wmode=transparent"
                  style={{ border: "0", width: "100%", height: "400px" }}
                  class="video_course"
                  title="Tutorial Video"
                ></iframe>
                <h3>Simply dummy text</h3>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It is a long established fact that a
                  reader will be distracted by the readable content of a page
                  when looking at its layout.{" "}
                </p>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It is a long established fact that a
                  reader will be distracted by the readable content of a page
                  when looking at its layout.{" "}
                </p>

                <blockquote class="styled">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.{" "}
                  </p>
                  <small>
                    Someone famous in <cite title="">Body of work</cite>
                  </small>
                </blockquote>
                <hr></hr>
                <div class="clearfix text-center">
                  <a href="# " class="pull-left button_medium_outline">
                    {" "}
                    <i class="fa fa-arrow-left"></i>
                  </a>
                  <a href="# " class="button_medium_outline">
                    Mark as complete
                  </a>{" "}
                  <a href="# " class="pull-right button_medium_outline">
                    <i class="fa fa-arrow-right "></i>
                  </a>
                </div>
              </div>

              <aside class="col-md-4">
                <a href="# " class=" button_fullwidth-3 btn-block text-center">
                  Start Editing
                </a>
                <div class="box_style_1">
                  <h4>Download files</h4>

                  <hr
                    style={{
                      marginTop: "7px",
                      borderWidth: "1px",
                      marginBottom: "7px"
                    }}
                  ></hr>

                  <ul class="list_1 " style={{ marginLeft: "-40px" }}>
                    <li>
                      <a href="# ">Ceteros mediocritatem (.pdf)</a>
                      <i class="fa fa-download float-right"></i>
                    </li>{" "}
                    <li style={{ marginTop: "10px" }}>
                      <a href="# ">Labore nostrum dfdf (.doc)</a>
                      <i class="fa fa-download float-right"></i>
                    </li>{" "}
                  </ul>

                  <br></br>
                  <h4>Teachers</h4>
                  <hr
                    style={{
                      marginTop: "7px",
                      borderWidth: "1px",
                      marginBottom: "7px"
                    }}
                  ></hr>
                  <div class="media">
                    <div class="float-right">
                      <img
                        src="https://res.cloudinary.com/techsnips/image/fetch/w_2000,f_auto,q_auto,c_fit/https://adamtheautomator.com/content/images/size/w2000/2019/10/user-1633249_1280.png"
                        class="img-circle ddd"
                        alt=""
                      />
                    </div>
                    <div class="media-body" style={{ marginLeft: "10px" }}>
                      <h5 class="media-heading">
                        <a href="# ">Marc Twain</a>
                      </h5>
                      <p style={{ fontSize: "14px" }}>
                        Lorem ipsum dolor sit amet, vix erat audiam ei. Cum
                        doctus civibus efficiantur in.
                      </p>
                    </div>
                  </div>

                  <div class="media">
                    <div class="pull-right">
                      <img
                        src="https://res.cloudinary.com/techsnips/image/fetch/w_2000,f_auto,q_auto,c_fit/https://adamtheautomator.com/content/images/size/w2000/2019/10/user-1633249_1280.png"
                        class="img-circle ddd"
                        alt=""
                      />
                    </div>
                    <div class="media-body" style={{ marginLeft: "10px" }}>
                      <h5 class="media-heading">
                        <a href="# ">Marc Twain</a>
                      </h5>
                      <p style={{ fontSize: "14px" }}>
                        Lorem ipsum dolor sit amet, vix erat audiam ei. Cum
                        doctus civibus efficiantur in.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="box_style_1">
                  <h4>Related content</h4>{" "}
                  <hr
                    style={{
                      marginTop: "7px",
                      borderWidth: "1px",
                      marginBottom: "7px"
                    }}
                  ></hr>
                  <ul class="list_1 " style={{ marginLeft: "-40px" }}>
                    <li>
                      <a href="# ">Ceteros mediocritatem</a>
                      <i class="fa fa-arrow-right float-right"></i>
                    </li>{" "}
                    <hr
                      style={{
                        marginTop: "7px",
                        borderWidth: "1px",
                        marginBottom: "7px"
                      }}
                    ></hr>
                    <li>
                      <a href="# ">Labore nostrum</a>
                      <i class="fa fa-arrow-right float-right"></i>
                    </li>{" "}
                    <hr
                      style={{
                        marginTop: "7px",
                        borderWidth: "1px",
                        marginBottom: "7px"
                      }}
                    ></hr>
                    <li>
                      <a href="# ">Primis bonorum</a>

                      <i class="fa fa-arrow-right float-right"></i>
                    </li>{" "}
                    <hr
                      style={{
                        marginTop: "7px",
                        borderWidth: "1px",
                        marginBottom: "7px"
                      }}
                    ></hr>
                    <li>
                      <a href="# ">Ceteros mediocritatem</a>
                      <i class="fa fa-arrow-right float-right"></i>
                    </li>{" "}
                    <hr
                      style={{
                        marginTop: "7px",
                        borderWidth: "1px",
                        marginBottom: "7px"
                      }}
                    ></hr>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TutorialDetails;
