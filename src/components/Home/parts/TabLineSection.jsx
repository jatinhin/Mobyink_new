import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../utils/Navbar/Nav";

const TabLineSection = () => {
  return (
    <>
      <Stack backgroundColor={"#337FFF"}>
        <Nav />
        <Stack margin={"0 auto"}>
          <Stack
            width={"80%"}
            height={"70vh"}
            gap={3}
            justifyContent={"center"}
          >
            <Typography variant="h4" fontWeight={"bold"} color={"white"}>
              Pioneering The Digital Frontier For Market Leaders
            </Typography>
            <Typography variant="h6" color={"white"}>
              Where advanced technology meets rapid innovation, transforming
              challenges into strategic masterpieces.
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
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TabLineSection;
