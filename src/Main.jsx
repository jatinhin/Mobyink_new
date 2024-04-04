import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";

import AboutUs from "./components/AboutUs/AboutUs";
import Industries from "./components/Industries/Industries";
import Portfolio from "./components/Resources/Portfolio/Portfolio";
import SeoInIndia from "./components/Resources/Index/SeoInIndia/SeoInIndia";
import CaseStudies from "./components/CaseStudy/CaseStudies";
import App_marketing from "./components/Services/App_marketing";
import ScrollingSection from "./components/Services/ScrollingSection";


const Main = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/industries" element={<Industries />} />
        <Route exact path="/case-studies" element={<CaseStudies />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/SEO/India" element={<SeoInIndia />} />
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
