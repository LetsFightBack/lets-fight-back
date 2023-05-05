import "./authPopup.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { addVisitorToDB } from "../../firebase";

const provider = new GoogleAuthProvider();
const auth = getAuth();

export default function AuthPopup({ open, setOpen }) {
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [message, setMessage] = useState("Checking if you are logged in...");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        handleClose();
        addVisitorToDB(user.email, user.displayName);
      } else {
        setMessage("Sign-In with Google");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        addVisitorToDB(user.email, user.displayName);
        handleClose();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage("Try again");
        console.log(errorMessage);
      });
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
    >
      <div className="authPopupModal">
        <Box sx={style}>
          <div className="apm-container">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {message}
            </Typography>

            <button type="button" class="login-with-google-btn" onClick={handleLogin}>
              Sign in with Google
            </button>
          </div>
        </Box>
      </div>
    </Modal>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
};
