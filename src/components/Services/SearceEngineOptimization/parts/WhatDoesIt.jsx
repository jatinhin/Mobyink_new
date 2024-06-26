import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import lock from "../../../../assests/sseo1.svg";
import video from "../../../../assests/sseo2.svg";
import bulb from "../../../../assests/sseo3.svg";
import hand from "../../../../assests/sseo4.svg";

const WhatDoesIt = () => {
  const stackData = [
    {
      title: "Book a call",
      svg: lock,
    },
    {
      title: "Let’s chat",
      svg: video,
    },
    {
      title: "We run SEO analysis",
      svg: bulb,
    },
    {
      title: "Your SEO plan is ready!",
      svg: hand,
    },
  ];
  const stackComponents = stackData.map((item, index) => (
    <Stack
      key={index}
      bgcolor={"white"}
      width={{
        xs: "170px",
        lg: "250px",
      }}
      height={{
        xs: "170px",
        lg: "250px",
      }}
      sx={{
        borderWidth: "5px 0 0 0",
        borderStyle: "solid",
        borderColor: "#0d6efd",
        borderRadius: "10px",
      }}
    >
      <Stack
        p={3}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
        height={"100%"}
      >
        <Box width={"40px"} height={"40px"} src={item.svg} component="img" />{" "}
        <Typography
          textAlign={"center"}
          fontSize={{
            xs: "15px",
            lg: "25px",
          }}
          fontWeight={"normal"}
        >
          {item.title}
        </Typography>
      </Stack>
    </Stack>
  ));

  return (
    <Stack mt={10} boxSizing={"border-box"}>
      <Stack
        width={{
          xs: "95%",
          lg: "80%",
        }}
        margin={"0 auto"}
      >
        <Stack
          width={{
            xs: "90%",
            lg: "70%",
          }}
          margin={"0 auto"}
          gap={2}
        >
          <Typography
            textAlign={"center"}
            fontSize={{
              xs: "30px",
              lg: "45px",
            }}
            fontWeight={"bold"}
          >
            Are you ready to skyrocket your website ranking?
          </Typography>
          <Typography textAlign={"center"} variant={"body1"}>
            Follow the below process and let’s connect
          </Typography>
        </Stack>
        <Stack
          mt={7}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={3}
        >
          {stackComponents}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WhatDoesIt;
