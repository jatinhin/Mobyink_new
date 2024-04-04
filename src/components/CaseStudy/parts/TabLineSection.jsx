import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../utils/Navbar/Nav";
import CaseStudiesImg from "../../../assests/caseStudiesImg.webp";

const TabLineSection = () => {
  return (
    <>
      <Stack
        sx={{
          backgroundImage: `url(${CaseStudiesImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Nav />
        <Stack zIndex={1}>
          <Stack
            margin={"0 110px"}
            ml={20}
            width={"40%"}
            height={"90vh"}
            gap={3}
            justifyContent={"center"}
          >
            <Typography variant="h3" fontWeight={"bold"} color={"white"}>
              Captivating Campaigns Measurable Milestones
            </Typography>
            <Typography variant="h6" color={"white"}>
              Untold the Chapters of our Digital Success Stories
            </Typography>
            <Link
              to="#"
              style={{
                textDecoration: "none",
              }}
            >
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={"140px"}
                height={"40px"}
                border={"2px solid white"}
                backgroundColor={"transparent"}
                sx={{
                  "&:hover": {
                    color: "white",
                    opacity: 0.8,
                    fontWeight: "bold",
                    backgroundColor: "#0D6EFD",
                    transform: "translateY(-5px)",
                    transition: "all 0.7s ease",
                  },
                }}
              >
                <Typography color={"white"}>Get In Touch</Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TabLineSection;