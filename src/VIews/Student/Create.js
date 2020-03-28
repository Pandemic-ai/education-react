import React, { Component } from "react";

export class Create extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid" style={{ padding: "0 100px" }}>
          <section
            id="survey"
            style={{ padding: "50px 0", marginBottom: "-80px" }}
          >
            <h2>Create a new notes</h2>
            <hr></hr>
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4">
                <a href="/createnote/">
                  <div class="card ">
                    <img
                      class="card-img-top"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"
                      alt=""
                      style={{ height: "250px" }}
                    />
                  </div>
                </a>
                <h5 class="card-title" style={{ padding: "20px 0" }}>
                  Create New Notes
                </h5>
              </div>

              <div class="col-lg-3 col-md-6 mb-4">
                <a href="/createnote/">
                  <div class="card  ">
                    <img
                      class="card-img-top"
                      src="https://p.calameoassets.com/141209183255-958db049ef88f747dbad8f067dd3fc5d/p1.jpg"
                      alt=""
                      style={{ height: "250px" }}
                    />
                  </div>
                </a>
                <h5 class="card-title titleBlank" style={{ padding: "20px 0" }}>
                  Simple Doc
                </h5>
              </div>
            </div>
          </section>

          <section
            id="Drafts"
            style={{ padding: "50px 0", marginTop: "-50px" }}
          >
            <h2 style={{ marginBottom: "10px" }}>Your Saved Notes</h2>
            <hr></hr>
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card h-100 ">
                  <img
                    class="card-img-top"
                    src="https://plantillasonline.com/wp-content/uploads/2020/02/contabilidad-peque%C3%B1as-empresas-800x500.jpg"
                    alt=""
                    style={{ height: "250px" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">First Notes</h5>
                    {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card h-100 ">
                  <img
                    class="card-img-top"
                    src="https://s2.studylib.es/store/data/004699890_1-c1b5bf10db087f44360db3281af6f301.png"
                    alt=""
                    style={{ height: "250px" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Second Notes</h5>
                    {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card h-100 ">
                  <img
                    class="card-img-top"
                    src="https://image.isu.pub/130718162736-9371c0cd800fff221e58ed96ac05b1a2/jpg/page_21.jpg"
                    alt=""
                    style={{ height: "250px" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Third Notes</h5>
                    {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p> */}
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <div class="card h-100 ">
                  <img
                    class="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTENospsCnL74YYi-2jeXmHn1X2pCeoSMCwltmh2wZPu84Hbpvr"
                    alt=""
                    style={{ height: "250px" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Fourth Notes</h5>
                    {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Create;
