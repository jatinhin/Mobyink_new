import React from "react";
import { Stack } from "@mui/material";
import Slider from "../../utils/Slider";
import TabLineSection from "./parts/TabLineSection";
import Steps from "./parts/Steps";
import ShappingTheFuture from "./parts/ShappingTheFuture";
import SharkTankClients from "./parts/SharkTankClients";
import ScrollingImages from "./parts/ScrollingImages";
import ThreeSection from "./parts/ThreeSection";
import CardSection from "./parts/ScrollingImages";
const Home = () => {
  return (
    <Stack width={"100%"} height={"100%"} bgcolor={"#F5F7FF"}>
      <TabLineSection />
      <Slider />
      <Steps />
      <ShappingTheFuture />
      <SharkTankClients />
      <ThreeSection />
      <CardSection />
    </Stack>
  );
};

export default Home;
