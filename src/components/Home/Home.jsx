import React from "react";
import { Stack } from "@mui/material";
import Slider from "../../utils/Slider";
import TabLineSection from "./parts/TabLineSection";
import Steps from "./parts/Steps";
import ShappingTheFuture from "./parts/ShappingTheFuture";
import CardSection from "./parts/CardSection";
import SharkTankClients from "./parts/SharkTankClients";
// import ThreeSection from './parts/ThreeSection'
import ScrollingImages from "./parts/ScrollingImages";
import LatestInsights from "./parts/LatestInsights";
const Home = () => {
  return (
    <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
      <TabLineSection />
      <Slider />
      <Steps />
      <ShappingTheFuture />
      <CardSection />
      <SharkTankClients />
       {/* <ThreeSection /> */}
      <ScrollingImages/>
      <LatestInsights/>
    </Stack>
  );
};


export default Home;
