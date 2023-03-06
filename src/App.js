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
import PrivateRoute from "./components/privateRoute/privateRoute.component";
import PageNotVerified from "./pages/NotVerified/NotVerified.page";
import Appbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./pages/Dashboard/Dashboard";

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
                {/* TODO: Modify navbar accoring to homepage */}
                {/* <Appbar/> */}
                <Home />
              </MainPageWrapper>
            }
          ></Route>
          <Route
            path="/view"
            element={
              <PrivateRoute
                component={<MainPageWrapper> <Appbar/> <View /> </MainPageWrapper>} />
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                component={<MainPageWrapper> <Appbar/> <Dashboard/> </MainPageWrapper>} />
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
        <Route
            path="/verifymail"
            element={
              <MainPageWrapper>
                <PageNotVerified />
              </MainPageWrapper>
            }
            ></Route>
            </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
