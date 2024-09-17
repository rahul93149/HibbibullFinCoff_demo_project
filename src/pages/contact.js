import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    query: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() === "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "phone":
        return value.trim().length < 10 || !/^\d+$/.test(value);
      case "query":
        return value.trim() === "";
      default:
        return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSubmitDisabled) {
      // Handle form submission logic, like sending the data to a server
      console.log("Form submitted:", formData);
    }
  };

  const isSubmitDisabled =
    Object.values(errors).some((error) => error) ||
    Object.values(formData).some((field) => field === "");

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5", color: "#333" }}>
      <Grid container sx={{ minHeight: "100%" }}>
        {/* Left Image */}
        <Grid item xs={12} md={3}>
          <Box sx={{ height: "100%", position: "relative" }}>
            <Image
              src="/images/left_image.jpg"
              alt="Left Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </Box>
        </Grid>

        {/* Center Content */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: { xs: "20px", md: "40px" },
            }}
          >
            <EmailIcon sx={{ fontSize: 60, color: "#333" }} />
            <Typography variant="h4" sx={{ textAlign: "center", marginTop: 2 }}>
              Get in Touch with Us
            </Typography>
            <Typography
              sx={{ textAlign: "center", marginTop: 1, marginBottom: 4 }}
            >
              We are here to answer any questions you may have. Fill out the
              form below to reach us.
            </Typography>

            {/* Form */}
            <Box
              component="form"
              sx={{
                width: "100%",
                maxWidth: "500px",
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                helperText={errors.name ? "Name is required" : ""}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email ? "Enter a valid email" : ""}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                helperText={errors.phone ? "Enter a valid phone number" : ""}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="Any Query"
                name="query"
                variant="outlined"
                multiline
                rows={4}
                value={formData.query}
                onChange={handleChange}
                error={errors.query}
                helperText={errors.query ? "Query is required" : ""}
                sx={{ marginBottom: 4 }}
              />

              {/* Buttons */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 2,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitDisabled}
                >
                  Submit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() =>
                    window.open("https://topmate.io/saahil_mutreja/", "_blank")
                  }
                >
                  Book a 1:1 virtual coffee chat
                </Button>
              </Box>

              {/* Social Media Icons */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: 2,
                  marginTop: 4,
                }}
              >
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/saahil2109?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bah9Vr57tSmKbGfHBTvLjlg%3D%3D"
                  target="_blank"
                  sx={{
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0077b5",
                    color: "#fff",
                    margin: 1,
                    borderRadius: "50%",
                    "&:hover": {
                      backgroundColor: "#005582",
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/hippiebull?igsh=MTBycWMwamx5eDZ5Ng=="
                  target="_blank"
                  sx={{
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#e1306c",
                    color: "#fff",
                    margin: 1,
                    borderRadius: "50%",
                    "&:hover": {
                      backgroundColor: "#c13584",
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={3}>
          <Box sx={{ height: "100%", position: "relative" }}>
            <Image
              src="/images/right_image.jpg"
              alt="Right Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
