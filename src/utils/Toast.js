import React from 'react'
import { ToastContainer,toast  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 export const toastOptions={
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  }
const Toast = () => {
    
  return (
    <ToastContainer />
  )
}

export default Toast