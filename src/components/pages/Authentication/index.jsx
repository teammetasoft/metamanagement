import React, { useRef } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReactPasswordToggleIcon from 'react-password-toggle-icon';
import { login } from "../../imagepath";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const Login = () => {
  let inputRef = useRef();
  const showIcon = () => <i class="feather feather-eye" aria-hidden="true">
    <FeatherIcon icon ="eye" />
  </i>;
  const hideIcon = () => <i class="feather feather-eye-slash" aria-hidden="true">
    <FeatherIcon icon = "eye-off" />
  </i>
  

  return (
    <>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={login} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Welcome to Metasoft</h1>
                  <p className="account-subtitle">
                    Need an account? <Link to="/register">Sign Up</Link>
                  </p>
                  <h2>Sign in</h2>
                  {/* Form */}
                  <form action="./admindashboard">
                    <div className="form-group">
                      <label>
                        Username <span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                      <span className="profile-views">
                        <i className="fas fa-user-circle" />
                      </span>
                    </div>
                    <div className="form-group">
                      <label>
                        Password <span className="login-danger">*</span>
                      </label>
                      <input ref={inputRef} className="form-control pass-input" type="password" />
                      <ReactPasswordToggleIcon
                        inputRef={inputRef}
                        showIcon={showIcon}
                        hideIcon={hideIcon}
                      />
                      {/* <span className="profile-views feather-eye toggle-password" >
                      <FeatherIcon icon="eye"/>
                      </span> */}
                    </div>
                    <div className="forgotpass">
                      <div className="remember-me">
                        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                          {" "}
                          Remember me
                          <input type="checkbox" name="radio" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <Link to="/forgotpassword">Forgot Password?</Link>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-block" type="submit">
                        Login
                      </button>
                    </div>
                  </form>
                  {/* /Form */}
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>
                  {/* Social Login */}
                  <div className="social-login">
                    <Link to="#">
                      <i className="fab fa-google-plus-g" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
