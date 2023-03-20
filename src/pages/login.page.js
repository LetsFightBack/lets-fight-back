import {
  signInAuthUserWithEmailAndPassword
} from  "../firebase";
import ToastContainer from "../utils/Toast.js";
import { toastOptions } from "../utils/Toast.js";
import { toast } from "react-toastify";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./loginsignup.style.scss";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { analytics } from "../utils/firebase/firebase.utils";
import { logEvent } from "firebase/analytics";

export default function LoginCandidate() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    const temp = { ...formFields };
    temp[name] = value;
    setFormFields({ ...temp });
  };
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

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (formFields.password === "" || formFields.email === "") {
        toast.info("Email or Password field is missing", {
          ...toastOptions,
        });
        return;
        
      }
     await signInAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password
      );
      toast.success("user sign in successful", {
        ...toastOptions,
      });

      navigate("/dashboard", { replace: true });
      
    } catch (error) {
      var errorCode = error.code;
      if (errorCode === "auth/wrong-password") {
        toast.info("Wrong password. Please try again", {
          ...toastOptions,
        });
      } else if (errorCode === "auth/invalid-email") {
        toast.info("User doesn't exists", {
          ...toastOptions,
        });
      }
       else {
        toast.error(errorCode, {
          ...toastOptions,
        });
      }
    }

  };

  logEvent(analytics, "Login Page Loaded");
  return (
    <div className="register">
    
      <p className="register__heading">Lets Fight Back!</p>
      <div className="register__right">
        <div className="register__right__header">
          <p>Recruiter Login</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="register__right__form">
            <TextField
              id="email"
              label="Enter Your Email"
              variant="filled"
              sx={sx_form_input}
              onChange={handleChange}
              value={formFields.email || ""}
            />
            <TextField
              label="Password"
              id="password"
              variant="filled"
              sx={sx_form_input}
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={formFields.password || ""}
            />{" "}
            <div className="register__right__form__forgotpass">
              <Link to="/forget-password">
                <span variant="text">Forget Password</span>
              </Link>
            </div>
            <button
              variant="contained"
              size="large"
              type="submit"
              className="register__right__form__btn"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="register__right__info">
          <p>
            Already have an account?{" "}
            <Link to="/register">
              <span>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
        <ToastContainer />
    </div>
  );
}
