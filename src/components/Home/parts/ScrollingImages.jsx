// import React, { useEffect, useState } from "react";
// import "./ScrollingImages.css"; // Stylesheet for component
// import dharan from "../../../assests/Dharan.jpg"
// import dharan2 from "../../../assests/Ayudhi.jpg"


// const ScrollingImages = () => {
//   const [scrollY, setScrollY] = useState(0);

//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   window.addEventListener("scroll", handleScroll);

//   return (
//     <div className="scrolling-images-container">
//       <div
//         className="image-container"
//         style={{ height: `${100 - scrollY * 0.3}%`, zIndex:2}}
//       >
//         <img src={dharan} alt="First Image" />
//       </div>
//       <div className="image-container" style={{zIndex:1}}>
//         <img src={dharan2} alt="Second Image" />
//       </div>
//     </div>
//   );
// };

// export default ScrollingImages;

// import React from "react";
// import { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Box from "@mui/material/Box";
// import dharan from "../../../assests/pizzahut.webp"
// import dharan2 from "../../../assests/ikea.webp"
// import dharan3 from "../../../assests/adidas.webp";
// import { Typography } from "@mui/material";

// gsap.registerPlugin(ScrollTrigger);

// function ServiceType() {
//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap.set(".photo:not(:first-child)", { height:"0%", });

//       const animation = gsap.to(".photo:not(:first-child)", {
//         // opacity: 1,
//         height:"100%",
//         // scale: 1,
//         duration: 1,
//         stagger: 1,
//       });
     

//       ScrollTrigger.create({
//         trigger: ".gallery",
//         start: "top top",
//         end: "bottom bottom",
//         pin: ".rightblock",
//         animation: animation,
//         scrub: true,
//         markers: true,
//       });


//        gsap.set(".left", { opacity: 0 });
//        const leftAnimation = gsap.to(".left", {
//          opacity: 1,
//          duration: 1,
//          stagger: 0.3,
//        });

//        ScrollTrigger.create({
//          trigger: ".gallery",
//          start: "top center",
//          end: "bottom center",
//          pin: "leftblock",
//          animation: leftAnimation,
//          scrub: true,
//          markers: true,
//        });
//     });
//     return () => ctx.revert();
//   }, []);
//   return (
//     <React.Fragment>
//       <Box className="gallery" sx={{ display: "flex" }}>
//         <Box
//           className="leftblock"
//           sx={{
//             width: "50%",
//             marginLeft: "auto",
//             "& .left": {
//               height: "100vh",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               width: "40vw",
//               marginLeft: "auto",
//               color: "#000",
//               fontSize: "3rem",
//               fontWeight: 900,
//             },
//           }}
//         >
//           <Typography className="left">BRAND PRODUCT</Typography>
//           <Typography className="left">PRODUCT DETAILS</Typography>
//           <Typography className="left">DESIGN AGENCY</Typography>
//         </Box>
//         <Box
//           className="rightblock"
//           sx={{
//             width: "50%",
//             height: "100vh",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//           }}
//         >
//           <Box
//             sx={{
//               width: "40vw",
//               height: "40vw",
//               position: "relative",
//               "& .photo": {
//                 position: "absolute",
//                 width: "100%",
//                 height: "100%",
//                 "& img": {
//                   height: "100%",
//                   width: "100%",
//                 },
//               },
//             }}
//           >
//             <Box className="photo">
//               <img src={dharan} alt="img-1" />
//             </Box>
//             <Box className="photo">
//               <img src={dharan2} alt="img-2" />
//             </Box>
//             <Box className="photo">
//               <img src={dharan3} alt="img-3" />
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </React.Fragment>
//   );
// }

// export default ServiceType;

import React, { useState } from "react";
import "./ScrollingImages.css"; // CSS file for styles
import Image1 from "../../../assests/Image1.webp"
import Image2 from "../../../assests/Image2.webp";
import Image3 from "../../../assests/Image3.webp";
import Image4 from "../../../assests/Image4.webp";
import Image5 from "../../../assests/Image5.webp";
import { Box, Stack, Typography } from "@mui/material";
const CardSection = () => {
  const [activeCard, setActiveCard] = useState(0); // State to track active card

  const imagePaths = [Image1, Image2, Image3, Image4, Image5];
  const lists = [
    {
      src: Image1,
      Title: "5+",
      Description: "In Mobile App Marketing",
    },
    {
      src: Image2,
      Title: "5+",
      Description: "In Mobile App Marketing",
    },
    {
      src: Image3,
      Title: "5+",
      Description: "In Mobile App Marketing",
    },
    {
      src: Image4,
      Title: "5+",
      Description: "In Mobile App Marketing",
    },
    {
      src: Image5,
      Title: "5+",
      Description: "In Mobile App Marketing",
    },
  ];
  const handleCardHover = (index) => {
    setActiveCard(index); // Update active card on hover
  };

  return (
    <Stack alignItems={"center"}>
      <Stack alignItems={"center"} width={"50%"}>
        <Typography
          fontFamily={"Monstrate,sans-serif"}
          letterSpacing={2}
          color={"black"}
          fontSize={"48px"}
          fontWeight={"bold"}
        >
          Our Journey
          <span style={{ fontSize: "48px", color: "#0d6efd" }}>So Far</span>
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        width={"80%"}
        className="container"
        justifyContent={"center"}
      >
        
        {lists.map((d, index) => (
          <div
            key={index}
            className={`card ${activeCard === index ? "active" : ""}`}
            onMouseEnter={() => handleCardHover(index)}
            style={{ backgroundImage: `url(${d.src})` }}
          >
            <Typography
              color={"white"}
              fontSize={"50px"}
              fontWeight={"bold"}
              display={activeCard!==index ? "none" : "block"}
            >
              {d.Title}
            </Typography>
            <Typography
              color={"white"}
              fontSize={"30px"}
              display={activeCard!==index ? "none" : "block"}
              fontWeight={"bold"}
            >
              {d.Description}
            </Typography>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default CardSection;
