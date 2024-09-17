import React, { useState, useEffect } from "react";
import Header from "./header";
import { Box, ThemeProvider } from "@mui/material";
import Footer from "./footer";
import GoToTopIcon from "./goToTop"; // Import GoToTopIcon component
import theme from "./ThemeProvider";

const Layout = ({ children }) => {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Box component="main" sx={{ paddingTop: "64px" }}>
          {children}
        </Box>
      </ThemeProvider>
      <Footer />
      {showGoToTop && <GoToTopIcon />}
    </>
  );
};

export default Layout;
