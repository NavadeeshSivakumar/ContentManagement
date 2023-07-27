import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser } from "../action";
import axios from "axios";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // const [role, setRole] = useState("");
  const [semail, setSemail] = useState("");
  const [spassword, setSpassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkpasswordError, setCheckpasswordError] = useState("");
  const [checkpassword, setCheckpassword] = useState("");
  const nav = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      return;
    }

    // const state = {
    //   name: name,
    //   email: email,
    //   password: password,
    // };

    // const jsonData = JSON.stringify(state);

    axios
      .post("http://127.0.0.1:8181/api/v1/auth/authenticate", {
        name,
        email,
        password,
        // role,
      })
      .then((response) => {
        console.log(response);
        dispatch(setUser(name));
        if (response.data) {
          nav("/hello");
        } else {
          setCheckpassword("Incorrect Password");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (name.length === 0 || semail.length === 0 || spassword.length === 0) {
      return;
    }

    if (spassword !== cpassword) {
      setCheckpasswordError("Passwords do not match");
      return;
    }

    axios
      .post("http://127.0.0.1:8181/api/v1/auth/register", {
        name: name,
        email: semail,
        password: spassword,
        // role: role,
      })
      .then((response) => {
        console.log(response);
        dispatch(setUser(name));
        nav("/hello");
      })
      .catch((error) => {
        console.error(error);
      });

    // setName("");
    // setSemail("");
    // setSpassword("");
    // setCpassword("");
    // setCheckpasswordError("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email format");
    }
  };
  // const handleRoleChange = (e) => {
  //   setRole(e.target.value);
  //   // if (validateEmail(e.target.value)) {
  //   //   setEmailError("");
  //   // } else {
  //   //   setEmailError("Invalid email format");
  //   // }
  // };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (validatePassword(e.target.value)) {
      setPasswordError("");
    } else {
      setPasswordError("Password must be at least 6 characters long");
    }
  };

  const handlesEmailChange = (e) => {
    setSemail(e.target.value);
    if (validateEmail(e.target.value) || e.target.value.length === 0) {
      setEmailError("");
    } else {
      setEmailError("Invalid email format");
    }
  };

  const handlesPasswordChange = (e) => {
    setSpassword(e.target.value);
    if (validatePassword(e.target.value) || e.target.value.length === 0) {
      setPasswordError("");
    } else {
      setPasswordError("Password must be at least 6 characters long");
    }
  };
  const handlesCPasswordChange = (e) => {
    setCpassword(e.target.value);
  };

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-style"
                              placeholder="Your Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="email"
                              className="form-style"
                              placeholder="Your Email"
                              value={email}
                              onChange={handleEmailChange}
                              required
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          {emailError && (
                            <p className="text-danger">{emailError}</p>
                          )}
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              className="form-style"
                              placeholder="Your Password"
                              value={password}
                              onChange={handlePasswordChange}
                              required
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          {passwordError && (
                            <p className="text-danger">{passwordError}</p>
                          )}
                          <Button className="btn mt-4" onClick={handleLogin}>
                            submit
                          </Button>
                          {checkpassword && (
                            <p className="text-danger">{checkpassword}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-style"
                              placeholder="Your Full Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="semail"
                              className="form-style"
                              placeholder="Your Email"
                              value={semail}
                              onChange={handlesEmailChange}
                              required
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          {emailError && (
                            <p className="text-danger">{emailError}</p>
                          )}
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="spassword"
                              className="form-style"
                              placeholder="Your Password"
                              value={spassword}
                              onChange={handlesPasswordChange}
                              required
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          {passwordError && (
                            <p className="text-danger">{passwordError}</p>
                          )}
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="spassword"
                              className="form-style"
                              placeholder="Confirm Password"
                              value={cpassword}
                              onChange={handlesCPasswordChange}
                              required
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>

                          <Button className="btn mt-4" onClick={handleSignup}>
                            submit
                          </Button>
                          {checkpasswordError && (
                            <p className="text-danger">{checkpasswordError}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
