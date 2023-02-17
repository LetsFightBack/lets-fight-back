import React from "react";
import {
  sendPasswordResetEmailtoUser,
} from "../firebase";
import { TextField} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./loginsignup.style.scss";
import { toastOptions } from "../utils/Toast";
import { toast } from "react-toastify";

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

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    sendPasswordResetEmailtoUser(email)
      .then(() => {
toast.success("Email sent successfully!", {
        ...toastOptions,
      });
      toast.info("Check your mail", {
        ...toastOptions,
      });

      })
      .catch((error) => {
        toast.error("Some error occured", {
          ...toastOptions,
        });
      });
  };

  return (
    <div className="register">
      <p className="register__heading">Lets Fight Back!</p>
      <div className="register__right">
        <div className="register__right__header">
          <p>Change Password</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="register__right__form">
            <TextField
              id="email"
              label="Enter Your Email"
              variant="filled"
              sx={sx_form_input}
              onChange={handleChange}
              value={email || ""}
            />

            <button className="register__right__form__btn" type="submit">
              Submit
            </button>
            
          </div>
        </form>
        <div className="register__right__info">
       
            <Link to="/login" >
              <span>Login</span>
            </Link>
        
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
