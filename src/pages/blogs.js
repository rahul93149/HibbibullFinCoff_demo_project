import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Box,
  Typography,
  Link,
  Grid,
  CircularProgress,
  Alert,
} from "@mui/material";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Replace with your LinkedIn API URL and access token
        const accessToken = "YOUR_ACCESS_TOKEN";
        const response = await axios.get(
          "https://www.linkedin.com/newsletters/brewing-standards-%F0%9F%92%B8-7218956408698855426",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "X-Restli-Protocol-Version": "2.0.0",
            },
          }
        );
        setPosts(response.data.elements); // Adjust according to the response structure
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Box
      sx={{ backgroundColor: "#f4f4f4", minHeight: "100vh", padding: "40px 0" }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Our Blog
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Latest updates, articles, and newsletters from LinkedIn.
        </Typography>

        {loading && (
          <CircularProgress sx={{ display: "block", margin: "0 auto" }} />
        )}
        {error && (
          <Alert severity="error">
            Failed to load posts. Please try again later.
          </Alert>
        )}

        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  padding: "16px",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={post.thumbnail} // Ensure this is the correct path
                  alt={post.title}
                  sx={{
                    width: "100px",
                    height: "auto",
                    borderRadius: "8px",
                    marginRight: "16px",
                  }}
                />
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
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            backgroundColor: "#2E5103",
            color: "#ffffff",
            padding: "40px 0",
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Subscribe to Our Newsletter
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Your email address"
              sx={{ marginBottom: "16px", width: "300px" }}
            />
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPage;
