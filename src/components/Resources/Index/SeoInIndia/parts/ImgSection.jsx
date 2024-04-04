import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import img1 from "../../../../../assests/seo_page_img_1.jpeg";
import img2 from "../../../../../assests/seo_page_img_2.jpeg";
import img3 from "../../../../../assests/seo_page_img_3.jpeg";
const ImgSection = () => {
  return (
    <Stack width={"100%"} bgcolor={"#EBF9FD"}>
      <Stack width={"80%"} margin={"0 auto"}>
        <Stack direction={"row"} p={4} boxSizing={"border-box"} gap={5}>
          <Stack width={"50%"}>
            <Box
              component="img"
              width={"100%"}
              height={"100%"}
              src={img1}
              borderRadius={"8px"}
              boxShadow={"7px -11px 25px 10px #FFF"}
            />
          </Stack>
          <Stack width={"50%"}>
            <Typography
              fontSize={"18px"}
              fontWeight={"300"}
              pl={2}
              boxSizing={"border-box"}
            >
              Mobyink is the go-to digital agency for all kinds of businesses,
              big or small. We transform businesses by boosting their online
              visibility, attracting targeted traffic, and enhancing user
              experience, which brings in more natural website visitors and
              helps them rank better on search engines. With Mobyink’s expertise
              in analytics and data insights, businesses gain trust and success
              on online platforms. By focusing on creating quality content and
              prioritizing long-term growth, we ensure lasting success in the
              digital landscape. Our specialized strategies will help your
              business to rank higher on SERPs (search engine result pages).
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
