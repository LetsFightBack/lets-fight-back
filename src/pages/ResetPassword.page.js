import React from "react";
import {
  confirmPasswordResetUser,
} from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./loginsignup.style.scss";

import { toastOptions } from  "../utils/Toast.js";
import { toast } from "react-toastify";
import { logEvent } from "firebase/analytics";
import { analytics } from "../utils/firebase/firebase.utils";
const sx_form_input = {
  color: "#8A8A8A",
  border: "1px solid #D1D5DA",
  "& .input": {
    background: "#EFF1F8",
    border: "none",
  },
  "& .label": {
    border: "none",
  },
};

const ResetPassword = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    const queryParams = new URLSearchParams(location.search);
    const oobcode = queryParams.get("oobCode");
    e.preventDefault();
    confirmPasswordResetUser(oobcode, password)
      .then(() => {
  
        toast.success("Password changed sent successfully!", {
          ...toastOptions,
        });
        toast.info("Redirecting to login page", {
          ...toastOptions,
        });
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 2000);
      })
      .catch((error) => {
        toast.error("Some error occured", {
          ...toastOptions,
        });
      });
  };
  logEvent(analytics, "Reset Password Page Loaded");
  return (
    <div className="register">
         <p className="register__heading">
        Lets  Fight Back!
      </p>
      <div className="register__right">
        <div className="register__right__header">
          <p>Reset Password</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="register__right__form">
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="filled"
              sx={sx_form_input}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password || ""}
            />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              variant="filled"
              type="password"
              sx={sx_form_input}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword || ""}
            />

           
<button className="register__right__form__btn" variant="contained" size="large" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="register__right__info">
          <p>
            Already have an account?{" "}
            <Link to="/login" >
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
