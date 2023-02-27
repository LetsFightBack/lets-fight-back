import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./components/animations/animatedpage";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/home/home.page";
import View from "./pages/view/view.page";
import MainPageWrapper from "./components/page_wrapper/wrapper";
import LoginCandidate from "./pages/login.page";
import RegisterCandidate from "./pages/register.page";
import ForgetPassword from "./pages/ForgetPassword.page";
import ResetPassword from "./pages/ResetPassword.page";
import "./App.scss";

AOS.init();



function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <MainPageWrapper>
                <Home />
              </MainPageWrapper>
            }
          ></Route>
          <Route
            path="/view"
            element={
              <MainPageWrapper>
                <View />
              </MainPageWrapper>
            }
          ></Route>

          <Route
            path="/login"
            element={
              <AnimatedPage>
                <LoginCandidate />
              </AnimatedPage>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <AnimatedPage>
                <RegisterCandidate />
              </AnimatedPage>
            }
          ></Route>

          <Route
            path="/forget-password"
            element={
              <AnimatedPage>
                <ForgetPassword />
              </AnimatedPage>
            }
          ></Route>
          <Route
            path="/reset-password"
            element={
              <AnimatedPage>
                <ResetPassword />
              </AnimatedPage>
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
