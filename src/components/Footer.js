import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/armm.jpeg";

const Footer = () => (
  <Box mt="80px">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "8rem", height: "6rem" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made By Jacob Boim
    </Typography>
  </Box>
);

export default Footer;
