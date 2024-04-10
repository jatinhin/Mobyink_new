import { Stack, Typography } from "@mui/material";
import React from "react";
import App_marketing_banner from "../../../../assests/App-Marketing-banner.jpeg";
import Nav from "../../../../utils/Navbar/Nav";
const AppMarketingBanner = () => {
  return (
    <Stack
      height={{
        xs: "80vh",
        lg: "100vh",
      }}
      sx={{
        backgroundImage: `url(${App_marketing_banner})`,
        backgroundSize: "cover",
      }}
    >
      <Nav />
      <Stack
        margin={{
          xs: "100px 20px",
          lg: "230px 96px",
        }}
        gap={"10px"}
      >
        <Typography
          color={"white"}
          fontWeight={"bold"}
          fontSize={{
            xs: "30px",
            lg: "48px",
          }}
        >
          Skyrocket Your App Now
        </Typography>
        <Typography color={"white"}>
          Reach in-app audience programmatically
        </Typography>
        <Stack
          mt={2}
          justifyContent={"center"}
          alignItems={"center"}
          width={"140px"}
          height={"40px"}
          border={"2px solid white"}
          backgroundColor={"#0D6EFD"}
          sx={{
            "&:hover": {
              color: "white",
              opacity: 0.8,
              fontWeight: "bold",
            },
          }}
        >
          <Typography color={"white"}>Get In Touch</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AppMarketingBanner;
