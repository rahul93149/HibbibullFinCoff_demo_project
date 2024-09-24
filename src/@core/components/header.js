import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import Options from "./options";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ServicesOptions from "./servicesDropdown";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu"; // Mobile menu icon
import { useMediaQuery } from "@mui/material"; // To handle media queries

const Header = () => {
  const router = useRouter();
  const options = Options();
  const servicesOptions = ServicesOptions();

  // State for controlling the dropdown menu for "Services"
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu
  const isServicesMenuOpen = Boolean(anchorEl);
  const isMobile = useMediaQuery("(max-width:900px)"); // Media query for responsiveness

  // Handle opening the dropdown
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the dropdown
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    handleClose();
    if (path) {
      router.push(path);
    }
  };

  const isSelected = (path) => router.pathname === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ background: "white", color: "black", padding: "10px 20px" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          // onClick={() => router.push("/")}
        >
          <Image src="/images/logo.jpg" alt="Icon" height={60} width={60} />
        </Box>

        {/* Desktop Menu */}
        {!isMobile ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexGrow: 1,
              maxWidth: "800px",
            }}
          >
            {options.map((option, index) => (
              <React.Fragment key={index}>
                {option.title === "Services" ? (
                  <Box
                  onClick={() => router.push(option.path)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleClose}
                    sx={{ position: "relative", cursor: "pointer" }}
                  >
                    <Box
                     
                      sx={{
                        padding: "8px 16px",
                        borderBottom: isSelected(option.path)
                          ? "2px solid green"
                          : "none",
                        color: isSelected(option.path) ? "green" : "inherit",
                        "&:hover": { backgroundColor: "lightgray" },
                      }}
                    >
                      Services
                    </Box>

                    <Menu
                      anchorEl={anchorEl}
                      open={isServicesMenuOpen}
                      onClose={handleClose}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                      PaperProps={{
                        sx: {
                          backgroundColor: "black",
                          color: "white",
                          boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
                          transition: "transform 0.5s ease, opacity 0.5s ease",
                        },
                      }}
                    >
                      {servicesOptions.map((service, index) => (
                        <MenuItem
                          key={index}
                          onClick={() => handleMenuItemClick(service.path)}
                          sx={{ "&:hover": { color: "lightblue" } }}
                        >
                          <ChevronRightIcon sx={{ marginRight: 1 }} />
                          {service.title}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={index}
                    color="inherit"
                    onClick={() => {
                      option.path && router.push(option.path);
                    }}
                    sx={{
                      padding: "8px 16px",
                      borderBottom: isSelected(option.path)
                        ? "2px solid green"
                        : "none",
                      color: isSelected(option.path) ? "green" : "inherit",
                      "&:hover": { backgroundColor: "lightgray" },
                    }}
                  >
                    {option.title}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </Box>
        ) : (
          // Mobile Menu
          <>
            <IconButton color="inherit" edge="end" onClick={toggleMobileMenu}>
              <MenuIcon />
            </IconButton>
            {mobileMenuOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: 60,
                  right: 0,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                  width: "100%",
                  padding: "10px",
                }}
              >
                {options.map((option, index) =>
                  option.title === "Services" ? (
                    <Box
                    key={index}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleClose}
                    sx={{
                      position: "relative",
                      display: "flex",           // Changed from 'inline-block' to 'flex' to align items
                      justifyContent: "center",  // Center the content horizontally
                      alignItems: "center",      // Align the content vertically
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      onClick={() => router.push(option.path)}
                      sx={{
                        padding: "8px 16px",
                        borderBottom: isSelected(option.path) ? "2px solid green" : "none",
                        color: isSelected(option.path) ? "green" : "inherit",
                        "&:hover": { backgroundColor: "lightgray" },
                        textAlign: "center",      // Ensures the text is centered within the box
                        width: "100%",            // Takes the full width to be centered
                      }}
                    >
                      Services
                    </Box>
                  

                      <Menu
                        anchorEl={anchorEl}
                        open={isServicesMenuOpen}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        PaperProps={{
                          sx: {
                            backgroundColor: "black",
                            color: "white",
                            boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
                            transition: "transform 0.5s ease, opacity 0.5s ease",
                          },
                        }}
                      >
                        {servicesOptions.map((service, index) => (
                          <MenuItem
                            key={index}
                            onClick={() => handleMenuItemClick(service.path)}
                            sx={{ "&:hover": { color: "lightblue" } }}
                          >
                            <ChevronRightIcon sx={{ marginRight: 1 }} />
                            {service.title}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  ) : (
                    <Button
                      key={index}
                      fullWidth
                      onClick={() => {
                        option.path && router.push(option.path);
                        setMobileMenuOpen(false);
                      }}
                      sx={{
                        padding: "10px",
                        textAlign: "left",
                        borderBottom: isSelected(option.path)
                          ? "2px solid green"
                          : "none",
                        color: isSelected(option.path) ? "green" : "inherit",
                      }}
                    >
                      {option.title}
                    </Button>
                  )
                )}
              </Box>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
