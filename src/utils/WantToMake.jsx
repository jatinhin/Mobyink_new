import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import portfolioLadyImg from "../../../../assests/portfolioLadyImg.png";
const WantToMake = () => {
  return (
    <Stack width={"100%"} mt={15} boxSizing={"border-box"}>
      <Stack width={"95%"} margin={"0 auto"} boxSizing={"border-box"}>
        <Stack
          width={"90%"}
          bgcolor={"#0D6EFD"}
          height={"300px"}
          margin={"0 auto"}
          borderRadius={"10px"}
          justifyContent={"center"}
          direction={"row"}
        >
          <Stack p={4} width={"50%"} gap={3}>
            <Typography fontSize={"39px"} fontWeight={"500"} color={"white"}>
              Want to make your App rank No.1?
            </Typography>
            <Stack
              border={"2px solid white"}
              borderRadius={"8px"}
              width={"40%"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  opacity: 0.8,
                },
              }}
            >
              <Typography
                color={"white"}
                fontSize={"20px"}
                padding={"10px 5px"}
                boxSizing={"border-box"}
              >
                Book A Free Call Now
              </Typography>
            </Stack>
          </Stack>
          <Stack width={"50%"} position={"relative"}>
            <Box
              pr={3}
              position={"absolute"}
              right={"0"}
              top={-35}
              component="img"
              src={portfolioLadyImg}
              width={"200px"}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WantToMake;
