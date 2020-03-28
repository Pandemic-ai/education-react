import React, { Component } from "react";
import { Helmet } from "react-helmet";

export class Admin extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Admin Dashboard</title>
          <meta
            name="description"
            content="Login Page for student teacher adminstration"
          />
        </Helmet>
        <div class="row jusrr">
          <aside class="col-md-4  del">
            <div class=" box_style_1 profile">
              <p class="text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZU0C_X-_BFvuc3MdB5Wb_K0V06Jl0d40BrIfvkf7zUG0J44Za"
                  alt="Teacher"
                  class="img-circle styled"
                />
              </p>
              <ul>
                <li>
                  Name <strong class="pull-right">Marc Twain</strong>
                </li>
                <hr
                  style={{
                    marginTop: "7px",
                    borderWidth: "1px",
                    marginBottom: "7px"
                  }}
                ></hr>
                <li>
                  Email <strong class="pull-right">info@domain.com</strong>
                </li>{" "}
                <hr
                  style={{
                    marginTop: "7px",
                    borderWidth: "1px",
                    marginBottom: "7px"
                  }}
                ></hr>
                <li>
                  Telephone
                  <strong class="pull-right">+34 004238423</strong>
                </li>{" "}
                <hr
                  style={{
                    marginTop: "7px",
                    borderWidth: "1px",
                    marginBottom: "7px"
                  }}
                ></hr>
                <li>
                  Country<strong class="pull-right">United Kindom</strong>
                </li>{" "}
                <hr
                  style={{
                    marginTop: "7px",
                    borderWidth: "1px",
                    marginBottom: "7px"
                  }}
                ></hr>
                <li>
                  Gender <strong class="pull-right">Male</strong>
                </li>{" "}
                <hr
                  style={{
                    marginTop: "7px",
                    borderWidth: "1px",
                    marginBottom: "7px"
                  }}
                ></hr>
                <li>
                  Education <strong class="pull-right">Degree level</strong>
                </li>{" "}
                <hr
                  style={{
                    marginTop: "7px",
                    borderWidth: "1px",
                    marginBottom: "7px"
                  }}
                ></hr>
                <li>
                  Age <strong class="pull-right">34</strong>
                </li>
              </ul>
            </div>
            {/* <!-- End box-sidebar --> */}
          </aside>
          {/* <!-- End aside --> */}
          <div class="col-md-7 fff ">
            <h3>Biography</h3>
            <p>
              Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
              sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor
              sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
              Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
              dapibus id, mattis vel, nisi. Nullam mollis.. Phasellus hendrerit.
              Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
              dapiPhasellus hendrerit. Pellentesque aliquet nibh nec urna. In
              nisi neque, aliquet vel
            </p>
            <p>
              Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
              sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor
              sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
              Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
              dapibus id, mattis vel, nisi. Nullam mollis.. Phasellus hendrerit.
              Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
              dapiPhasellus hendrerit. Pellentesque aliquet nibh nec urna. In
              nisi neque, aliquet vel
            </p>
            <p>
              Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
              sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor
              sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
              Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
              dapibus id, mattis vel, nisi. Nullam mollis.. Phasellus hendrerit.
              Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
              dapiPhasellus hendrerit. Pellentesque aliquet nibh nec urna. In
              nisi neque, aliquet vel
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
