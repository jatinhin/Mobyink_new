import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import GunjanAppsImage from "../../../assests/Gunjan.svg"
import SharkTank from "../../../assests/SharkTank.svg";
import Waayu from "../../../assests/Waayu.svg";


import { Link } from 'react-router-dom';
const ThreeSection = () => {
  return (
    <Stack alignItems={"center"}>
      <Box width={"50%"}>
        <Typography
          fontFamily={"Monstrate,sans-serif"}
          letterSpacing={2}
          color={"black"}
          fontSize={"48px"}
          fontWeight={"bold"}
        >
          Meet Our
          <span style={{ fontSize: "48px", color: "#0d6efd" }}>Shark Tank</span>
          Clients: Trusted Partners in Success
        </Typography>
      </Box>
      <Stack width={"80%"} gap={5}>
        <Stack
          width={"100%"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack width={"48%"} bgcolor={"#DEE0FF"} borderRadius={10} p={3}>
            <Stack justifyContent={"space-between"} direction={"row"}>
              <Typography color={"#808285"} fontWeight={"bold"}>
                01
              </Typography>
              <Typography color={"#808285"} fontWeight={"bold"}>
                Showcase
              </Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"}>
              <Stack width={"50%"} gap={3} p={"0 20px"}>
                <Typography
                  color={"black"}
                  fontSize={"40px"}
                  fontWeight={"bold"}
                  lineHeight={1.2}
                >
                  Gunjan Apps Studios
                </Typography>
                <Typography color={"grey"} fontSize={"19px"}>
                  Gunjan Apps Studios specializes in creating educational and
                  entertaining content for children, focusing on meaningful
                  screen time.
                </Typography>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  About Project
                </Link>
              </Stack>
              <Stack width={"50%"} height={"78%"} justifyContent={"center"}>
                <img
                  src={GunjanAppsImage}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack width={"40%"} bgcolor={"#F8F0E6"} borderRadius={10} p={3}>
            <Stack justifyContent={"space-between"} direction={"row"}>
              <Typography color={"#808285"} fontWeight={"bold"}>
                02
              </Typography>
              <Typography color={"#808285"} fontWeight={"bold"}>
                Showcase
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              height={"-webkit-fill-available"}
            >
              <Stack width={"50%"} gap={3} p={"0 20px"}>
                <Typography
                  color={"black"}
                  fontSize={"40px"}
                  fontWeight={"bold"}
                  lineHeight={1.2}
                >
                  Scrapshala
                </Typography>
                <Typography color={"grey"} fontSize={"19px"}>
                  A women-led conscious Indian brand focused on sustainable
                  handicrafts.
                </Typography>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  About Project
                </Link>
              </Stack>
              <Stack width={"50%"} height={"75%"} justifyContent={"center"}>
                <img src={SharkTank} alt="" width={"100%"} height={"100%"} />
              </Stack>
            </Stack>
          </Stack>
          {/* <Stack width={"40%"} bgcolor={"#F8F0E6"}>
            <Stack justifyContent={"space-between"} direction={"row"}>
              <Typography color={"#808285"}>01</Typography>
              <Typography color={"#808285"} textTransform={"uppercase"}>
                Showcase
              </Typography>
            </Stack>
          </Stack> */}
        </Stack>
        <Stack width={"100%"} bgcolor={"black"} borderRadius={10} p={3}>
          <Stack justifyContent={"space-between"} direction={"row"}>
            <Typography color={"white"} fontWeight={"bold"}>
              03
            </Typography>
            <Typography color={"white"} fontWeight={"bold"}>
              Showcase
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Stack width={"50%"} gap={3} p={"0 20px"}>
              <Typography
                color={"white"}
                fontSize={"40px"}
                fontWeight={"bold"}
                lineHeight={1.2}
              >
                Waayu
              </Typography>
              <Typography color={"grey"} fontSize={"19px"}>
                Waayu is the industry’s very own food delivery app with zero
                commission charges designed especially by and for restaurants
                for better profits, visibility, and freedom like never before!
              </Typography>
              <Link
                style={{
                  textDecoration: "none",
                  color: "grey",
                  fontWeight: "bold",
                }}
              >
                About Project
              </Link>
            </Stack>
            <Stack width={"50%"} height={"65%"} justifyContent={"center"}>
              <img src={Waayu} alt="" width={"100%"} height={"100%"} />
            </Stack>
          </Stack>
        </Stack>
        <Stack alignItems={"center"} >
          <Link style={{color:"#0d6efd"}}>View All Project</Link>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ThreeSection