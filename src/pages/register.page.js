import { createAuthUserWithEmailAndPassword ,   createUserDocumentFromAuth} from "../firebase";

import { TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./loginsignup.style.scss";
import { useNavigate } from "react-router-dom";

import ToastContainer from  "../utils/Toast.js";
import { toastOptions } from  "../utils/Toast.js";
import { toast } from "react-toastify";
import { analytics } from "../utils/firebase/firebase.utils";
import { logEvent } from "firebase/analytics";

export default function RegisterCandidate() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    const temp = { ...formFields };
    temp[name] = value;
    setFormFields({ ...temp });
  };

  const resetFormFields = () => {
    setFormFields({ email: "", password: "", confirmPassword: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formFields.password !== formFields.confirmPassword) {
      toast.info("passwords do not match", {
        ...toastOptions,
      });
      
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password
      );
      toast.success("Account created!", {
        ...toastOptions,
      });
      const email =  formFields.email;
      await createUserDocumentFromAuth(user, { email});
      resetFormFields();
      
      navigate("/view", { replace: true });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.info("Cannot create user, email already in use", {
          ...toastOptions,
        });
      } else {
        toast.error(error.code, {
          ...toastOptions,
        });
      }
    }
  };
  const sx_form_input = {
    color: "#8A8A8A",
    // background: "white",
    border: "1px solid #D1D5DA",
    width: "100%",
    "& .input": {
      background: "#EFF1F8",
      border: "none",
    },
    "& .label": {
      border: "none",
    },
  };
  logEvent(analytics, "Register Page Loaded");
  return (
    <div className="register">
      <p className="register__heading">Lets Fight Back!</p>

      <div className="register__right">
        <div className="register__right__header">
          <p>Recruiter Registration</p>
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
              type="password"
              onChange={handleChange}
              value={formFields.password || ""}
            />
            <TextField
              label="Confirm Password"
              id="confirmPassword"
              variant="filled"
              sx={sx_form_input}
              type="password"
              onChange={handleChange}
              value={formFields.confirmPassword || ""}
            />

            <button
              className="register__right__form__btn"
              variant="contained"
              size="large"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="register__right__info">
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
