import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../../../utils/Navbar/Nav";
const TabLineSection = () => {
  return (
    <>
      <Stack bgcolor={"#6FA7FF"}>
        <Nav />
        <Stack zIndex={1}>
          <Stack
            margin={"0 auto"}
            width={"80%"}
            height={"40vh"}
            gap={3}
            justifyContent={"center"}
          >
            <Typography
              textAlign={"center"}
              fontSize={"35px"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
              color={"white"}
            >
              BOOST YOUR WEBSITE'S PERFORMANCE WITH SEO SERVICES IN SURAT
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TabLineSection;
