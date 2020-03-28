import React, { Component } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#1B1B23",
      opacity: "0.6",
      fontSize: "18px",
      letterSpacing: "0.2px"
    },
    "& label": {
      marginLeft: "5px",
      fontSize: "18px",
      marginTop: "-6px"
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#B71C1C",
      outline: 0
    },

    "& .MuiInput-underline:before": {
      borderBottomColor: "#B71C1C"
    },
    "& .MuiInput-underline:hover": {
      borderBottomColor: "#B71C1C"
    }
  }
})(TextField);
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      username: "",
      password: ""
    };
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClickShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }
  handleMouseDownPassword(e) {
    e.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    localStorage.setItem("Username", this.state.username);
  }

  handleSubmit(e) {
    const token = "tjdhd96826492749026269296428692904277272";
    e.preventDefault();
    const { username, password } = this.state;

    if (
      (username === "admin@admin.com" && password === "admin") ||
      (username === "student@student.com" && password === "student") ||
      (username === "teacher@teacher.com" && password === "teacher")
    ) {
      Swal.fire({
        title: "Login",
        icon: "success",
        text: "You Successfully loggedin",
        showConfirmButton: false,
        timer: 3000
      });
      localStorage.setItem("Token", token);
      this.props.history.push("/dashboard/");
      window.location.reload(1);
    } else {
      Swal.fire({
        title: "Login Error",
        icon: "error",
        text: "Check your email and password !!",
        showConfirmButton: false,
        timer: 3000
      });
    }
  }

  render() {
    const { username, password } = this.state;
    const isEnabled = username.length > 0 && password.length > 0;
    return (
      <div className="something">
        <Helmet>
          <title>Login Page</title>
          <meta
            name="description"
            content="Login Page for student teacher adminstration"
          />
        </Helmet>
        <div className="login_demo" style={{ Width: "500px" }}>
          <h3 className="text-center">Free Education Class Login</h3>
          <hr></hr>

          <form
            autoComplete="off"
            className="center "
            style={{ width: "410px" }}
            onSubmit={this.handleSubmit.bind(this)}
          >
            <div className="form-group">
              <CssTextField
                style={{
                  width: "100%"
                }}
                id="custom-css-outlined-input"
                label="Email"
                margin="normal"
                name="username"
                autoComplete="off"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group" style={{ marginTop: "-25px" }}>
              <CssTextField
                style={{
                  width: "100%",
                  marginTop: "25px"
                }}
                id="standard-adornment-password"
                label="Password"
                className="lol"
                type={this.state.showPassword ? "text" : "password"}
                margin="normal"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span
                className="full"
                aria-label="toggle password visibility"
                onClick={this.handleClickShowPassword}
                onMouseDown={this.handleMouseDownPassword}
              >
                {this.state.showPassword ? (
                  <Visibility className="opp" />
                ) : (
                  <VisibilityOff className="opp" />
                )}
              </span>
            </div>

            <p className="forget">
              <a href="# " style={{ color: "#b71c1c", opacity: "0.8" }}>
                Forget Password ?
              </a>
            </p>

            <button
              type="submit"
              value="Login"
              disabled={!isEnabled}
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
              LOGIN
            </button>

            <p>
              Admin :{" "}
              <strong> email: "admin@admin.com" & pass: "admin" </strong>{" "}
              <br></br>
              Student:{" "}
              <strong>email: "student@student.com" & pass: "student" </strong>
              <br></br>
              Teacher:{" "}
              <strong>email:"teacher@teacher.com" & pass:"teacher"</strong>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
