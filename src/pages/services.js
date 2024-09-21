import { Typography, Box, Container, Grid, Button } from "@mui/material";
import ServicesOptions from "@/@core/components/servicesDropdown"; // Update the path as per your structure
import { useRouter } from "next/router"; // Assuming you're using Next.js for routing

const Service = () => {
  const router = useRouter(); // Hook for navigation
  const options = ServicesOptions();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f2e0d2",
        color: "#4b2e1e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center", paddingBottom: "20px" }}>
        Our Services
      </Typography>
      <Typography sx={{ textAlign: "center", marginBottom: "40px", maxWidth: "800px" }}>
        At Hippiebull Fincoff, we believe that achieving financial success should be as satisfying as a perfectly brewed cup of coffee. We blend expert financial knowledge with personalized strategies to help you grow and protect your wealth, all while enjoying the journey.
      </Typography>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Services list */}
          {options.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                {service.image && (
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "16px",
                    }}
                  />
                )}
                <Typography variant="h6" sx={{ marginBottom: "16px" }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "24px" }}>
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => router.push(service.path)}
                  sx={{
                    width: "100%",
                    padding: "10px 16px",
                    borderRadius: "8px",
                  }}
                >
                  Know More
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Service;
