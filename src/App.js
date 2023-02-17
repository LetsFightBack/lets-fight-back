import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/home/home.page";
import View from "./pages/view/view.page";
import MainPageWrapper from "./components/page_wrapper/wrapper";
AOS.init();

function App() {
  const location = useLocation();

  return (
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
      </Routes>
    </AnimatePresence>
  );
}

export default App;
