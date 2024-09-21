import React from "react";
import { Box, Typography, Container, IconButton, Link } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import ServicesOptions from "./servicesDropdown";

const Footer = () => {
  const servicesOptions = ServicesOptions();
  const router = useRouter();
  return (
    <Box>
      {/* Wide Box Above Footer */}
      <Box
        sx={{
          backgroundColor: "#4b3621", // Background color
          color: "#FFFFFF", // Text color
          padding: "40px 0",
        }}
      >
        <Container maxWidth="lg">
          {/* Content aligned horizontally with padding on sides */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "0 20px", // Padding for sides
              flexWrap: "wrap",
            }}
          >
            {/* First Line: Icon and Social Media Links */}
            <Box sx={{ textAlign: "left", flex: 1 }}>
              <img
                src="/images/logo.jpg"
                alt="Icon"
                style={{ width: "100px", height: "auto" }}
              />
              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  marginTop: "16px",
                  //   marginRight: "160px",
                }}
              >
                <IconButton
                  component={Link}
                  href="https://www.linkedin.com/in/saahil2109"
                  target="_blank"
                  color="inherit"
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://www.instagram.com/hippiebull"
                  target="_blank"
                  color="inherit"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://www.facebook.com"
                  target="_blank"
                  color="inherit"
                >
                  <Facebook />
                </IconButton>
              </Box>
            </Box>

            {/* Second Line: Know Us with options */}
            <Box sx={{ textAlign: "left", flex: 1 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "16px" }}
              >
                Know Us
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {[
                  { title: "About", path: "/about" },
                  { title: "Blogs", path: "/blogs" },
                  { title: "Contact Us", path: "/contact" },
                  { title: "Privacy Policy", path: "/" },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        marginRight: "12px",
                      }}
                    />
                    <Link
                      href="#"
                      underline="none"
                      sx={{ color: "white" }}
                      onClick={() => router.push(item.path)}
                    >
                      {item.title}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Third Line: Services with options */}
            <Box sx={{ textAlign: "left", flex: 1 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "16px" }}
              >
                Services
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {servicesOptions.map((item, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        marginRight: "12px",
                      }}
                    />
                    <Link href="#" underline="none" sx={{ color: "white" }}>
                      {item.title}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Fourth Line: Reach Us */}
            <Box sx={{ textAlign: "left", flex: 1 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "16px" }}
              >
                Reach Us
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "8px" }}>
                <Phone sx={{ verticalAlign: "middle", marginRight: "8px" }} />
                Call to:{" "}
                <Link href="tel:+917339977720" color="inherit">
                  +91 73399 77720
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "8px" }}>
                <Email sx={{ verticalAlign: "middle", marginRight: "8px" }} />
                Mail to:{" "}
                <Link
                  href="mailto:hippiebullfincoff@gmail.com"
                  color="inherit"
                >
                  hippiebullfincoff@gmail.com
                </Link>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "rgba(29,39,56, 1)", // Background color for the footer
          color: "rgba(255, 255, 255, 0.6)", // Text color for the footer
          padding: "40px 0", // Increased vertical padding for more length
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body1" // Increased text size
            component="p"
            sx={{ marginBottom: "20px", lineHeight: 1.6 }} // Increased margin and line-height
          >
            DISCLAIMER : Saahil Mutreja of Hippiebull fincoff is registered vide ARN-190295 as a AMFI Registered
            Mutual Fund Distributor. The said website is intended to provide
            educative and informative details related to investments and also
            provide information on online transaction facility in Mutual Funds. We do not
            charge any fees for these calculators and information, because we
            earn our commissions from the Mutual Fund companies. The website
            does not guarantee any returns or financial goal success by any
            means.
          </Typography>
          <Typography
            variant="body1" // Increased text size
            component="p"
            sx={{ marginBottom: "20px", lineHeight: 1.6 }} // Increased margin and line-height
          >
            Mutual Fund investments are subject to market risks. Please read all
            scheme related documents carefully before investing. Past
            performance is not an indicator of future returns.
          </Typography>
          <Typography
            variant="body1" // Increased text size
            component="p"
            sx={{ lineHeight: 1.6 }} // Increased line-height
          >
            Copyright © 2024 Hippiebull Fincoff pvt. lmt. All rights reserved/</Typography>
            </Container>
            </Box>
            </Box>
  );
};

export default Footer;
