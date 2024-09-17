import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import Options from "./options";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ServicesOptions from "./servicesDropdown";

const Header = () => {
  const router = useRouter();
  const options = Options();
  const servicesOptions = ServicesOptions();

  // State for controlling the dropdown menu for "Services"
  const [anchorEl, setAnchorEl] = useState(null);
  const isServicesMenuOpen = Boolean(anchorEl);

  // Function to handle opening the dropdown
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle closing the dropdown
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

  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{ background: "transparent", color: "inherit" }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* <img
            src="/images/logo.jpg"
            alt="Icon"
            style={{ width: "100px", height: "auto", cursor: "pointer" }}
            onClick={() => router.push("/")} // Clicking the logo redirects to homepage
          /> */}
        </Box>

        {/* Empty Box to push content to the center */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Spread options with equal spacing */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexGrow: 1,
            maxWidth: "600px",
            width: "100%",
          }}
        >
          {options.map((option, index) => (
            <React.Fragment key={index}>
              {option.title === "Services" ? (
                // "Services" with hover effect and dropdown
                <>
                  <Box
                    onClick={() => {
                      option.path && router.push(option.path);
                    }}
                    sx={{
                      position: "relative",
                      display: "inline-block",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleClose}
                  >
                    <Box
                      sx={{
                        borderBottom: isSelected(option.path)
                          ? "2px solid white"
                          : "none",
                        color: option.path
                          ? isSelected(option.path)
                            ? "green"
                            : "inherit"
                          : "inherit",
                        backgroundColor: option.path
                          ? isSelected(option.path)
                            ? "lightblue"
                            : "inherit"
                          : "inherit",
                        padding: "8px 16px",
                        border: isServicesMenuOpen
                          ? "1px solid lightblue"
                          : "1px solid transparent",
                        // backgroundColor: isServicesMenuOpen
                        //   ? "lightblue"
                        //   : "inherit",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "lightgray",
                          border: "1px solid lightgray",
                        },
                      }}
                    >
                      Services
                    </Box>

                    <Menu
                      anchorEl={anchorEl}
                      open={isServicesMenuOpen}
                      onClose={handleClose}
                      MenuListProps={{ onMouseLeave: handleClose }}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      PaperProps={{
                        sx: {
                          backgroundColor: "black", // Black background for dropdown
                          color: "white", // White text
                          opacity: 0,
                          transform: "translateY(-20px)",
                          transition: "transform 0.5s ease, opacity 0.5s ease", // Smooth transition
                          ...(isServicesMenuOpen && {
                            opacity: 1,
                            transform: "translateY(0)",
                          }), // Animate the dropdown when open
                        },
                      }}
                    >
                      {servicesOptions.map((service, index) => (
                        <MenuItem
                          onClick={() =>
                            handleMenuItemClick("/services/web-development")
                          }
                          sx={{
                            "&:hover": { color: "lightblue" }, // Change text color on hover
                          }}
                        >
                          <ChevronRightIcon sx={{ marginRight: 1 }} />{" "}
                          {/* Icon before text */}
                          {service.title}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </>
              ) : (
                // Other menu items
                <Button
                  color="inherit"
                  onClick={() => {
                    option.path && router.push(option.path);
                  }}
                  sx={{
                    borderBottom: isSelected(option.path)
                      ? "2px solid white"
                      : "none",
                    color: option.path
                      ? isSelected(option.path)
                        ? "green"
                        : "inherit"
                      : "inherit",
                    backgroundColor: option.path
                      ? isSelected(option.path)
                        ? "lightblue"
                        : "inherit"
                      : "inherit",
                  }}
                >
                  {option.title}
                </Button>
              )}
            </React.Fragment>
          ))}
        </Box>

        {/* Empty Box to maintain center alignment */}
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
