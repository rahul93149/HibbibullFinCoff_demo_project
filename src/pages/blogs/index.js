import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Link,
  Grid,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from "axios";

const BlogPage = () =>{
    const [posts,setPosts]=useState([
        {
          title: "How to Build a Strong Professional Network",
          link: "#",
          thumbnail: "https://media.licdn.com/dms/image/v2/D5612AQHA8nCYemt7qQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1725102671362?e=1732752000&v=beta&t=PlEdgtFuF_Orp6_9W5oHdQHjLDEV0OeVvFrnEGudpk0",
          excerpt: "Discover the best strategies to expand your network on LinkedIn and build valuable connections.",
        },
        {
          title: "Perk Up Your Portfolio: Homebrewed vs. Barista-Perfected Investments",
          link: "https://www.linkedin.com/pulse/perk-up-your-portfolio-homebrewed-vs-investments-saahil-mutreja--ihhqc?lipi=urn%3Ali%3Apage%3Ad_flagship3_series_entity%3BsH96WiwyTU2YYN5DGW8mbQ%3D%3D",
          thumbnail: "https://media.licdn.com/dms/image/v2/D5612AQEchUgfHRRlkw/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1723888611709?e=1732752000&v=beta&t=PMI0qBrrdKzHovj6mwgbz_01eTsYntsGigiV3nhG0vA",
          excerpt: " Explore LinkedIn's top 10 tips to help you achieve career growth and long-term success.",
        },
        // Other posts...
      ])


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    social: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(""); // For user feedback

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";

    if (Object.keys(errors).length === 0) {
      try {
        const res = await axios.post('/api/getSheet', {
          name: formData.name,
          email: formData.email,
          message: formData.social,
        });

        setSubmitStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", social: "" }); // Reset form on success
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus("Submission failed. Please try again.");
      }
    } else {
      setFormErrors(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Box sx={{ backgroundColor: "#f4f4f4", minHeight: "100vh", padding: "40px 0" }}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
          <Typography variant="h4" component="div" mr={1}>
            Blogs & Newsletters
          </Typography>
          <IconButton>
            <MailOutlineIcon fontSize="large" />
          </IconButton>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            {posts.map((post, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  padding: "16px",
                  position: "relative",
                  marginBottom: "16px",
                  border: "1px solid #e1e9ee",
                }}
              >
                {post.thumbnail && (
                  <Box
                    component="img"
                    src={post.thumbnail}
                    alt={post.title}
                    sx={{
                      width: "100px",
                      height: "auto",
                      borderRadius: "8px",
                      marginRight: "16px",
                      border: "1px solid #e1e9ee",
                    }}
                  />
                )}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6">
                    <Link href={post.link} underline="none" color="textPrimary" target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </Link>
                  </Typography>
                  <Link href={post.link} underline="none" color="primary" target="_blank" rel="noopener noreferrer">
                    Read More
                  </Link>
                </Box>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              component="form"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                padding: "16px",
                border: "1px solid #e1e9ee",
              }}
              onSubmit={handleSubmit}
            >
              <Typography variant="h5" gutterBottom>
                Subscribe to our Email List
              </Typography>

              <TextField
                label="Name"
                name="name"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                error={!!formErrors.name}
                helperText={formErrors.name}
              />

              <TextField
                label="Email"
                name="email"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />

              <TextField
                label="Social Media (Optional)"
                name="social"
                fullWidth
                margin="normal"
                value={formData.social}
                onChange={handleChange}
              />

              {submitStatus && (
                <Typography variant="body2" color={submitStatus.includes("success") ? "green" : "red"}>
                  {submitStatus}
                </Typography>
              )}

              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ marginTop: "16px" }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPage;