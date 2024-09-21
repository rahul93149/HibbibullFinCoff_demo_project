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
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const BlogPage = () => {
  // Static data for posts
  const posts = [
    {
      title: "How to Build a Strong Professional Network",
      link: "#",
      thumbnail: "https://via.placeholder.com/100", // Placeholder image
      excerpt:
        "Discover the best strategies to expand your network on LinkedIn and build valuable connections.",
    },
    {
      title: "LinkedIn's Top 10 Tips for Career Success",
      link: "#",
      thumbnail: "https://via.placeholder.com/100",
      excerpt:
        "Explore LinkedIn's top 10 tips to help you achieve career growth and long-term success.",
    },
    {
      title: "Using LinkedIn for Personal Branding",
      link: "#",
      thumbnail: "https://via.placeholder.com/100",
      excerpt:
        "Learn how to leverage LinkedIn for building and enhancing your personal brand.",
    },
    {
      title: "How to Write a Great LinkedIn Article",
      link: "#",
      thumbnail: "https://via.placeholder.com/100",
      excerpt:
        "Step-by-step guide to writing engaging and high-impact articles on LinkedIn.",
    },
    {
      title: "LinkedIn Marketing Strategies for 2024",
      link: "#",
      thumbnail: "https://via.placeholder.com/100",
      excerpt:
        "Find out the latest marketing trends and strategies on LinkedIn for 2024.",
    },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    social: "",
  });

  const [formErrors, setFormErrors] = useState({});

  // Form validation and submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Form data:", formData);
      alert("Form submitted successfully!");
    } else {
      setFormErrors(errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Box
      sx={{ backgroundColor: "#f4f4f4", minHeight: "100vh", padding: "40px 0" }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
          <Typography variant="h4" component="div" mr={1}>
            Blogs & Newsletters
          </Typography>
          <IconButton>
            <MailOutlineIcon fontSize="large" />
          </IconButton>
        </Box>

        <Grid container spacing={4}>
          {/* Left: Newsletter list */}
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
                  border: "1px solid #e1e9ee",
                  marginBottom: "16px",
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
                    <Link href={post.link} underline="none" color="textPrimary">
                      {post.title}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Link href={post.link} underline="none" color="primary">
                    Read More
                  </Link>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Right: Subscription form */}
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