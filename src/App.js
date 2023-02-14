import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./components/animations/animatedpage";

import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/home/home.page";
import View from "./pages/view/view.page";
AOS.init();

function App() {
  const location = useLocation();

  return (
    <Fragment>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <div>
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              </div>
            }
          ></Route>
          <Route
            path="/view"
            element={
              <AnimatedPage>
                <View />
              </AnimatedPage>
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
}

export default App;
