import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import App_marketing from "./components/Services/App_marketing";
import ParallaxBackground from "./components/Services/AppBring";
import ScrollingSection from "./components/Services/ScrollingSection";
const Main = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/Services/App-Marketing"
          element={<App_marketing />}
        />
        <Route
          exact
          path="/dummy"
          element={<ScrollingSection/>}
        />
      </Routes>
    </>
  );
};

export default Main;
