import { Typography, Box } from "@mui/material";

const Service = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#f2e0d2",
        color: "#4b2e1e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", paddingTop: "20px" }}>
        Services Page
      </Typography>
      <Typography sx={{ textAlign: "center", marginTop: "10px" }}>
        You are on the Services page.
      </Typography>
    </Box>
  );
};

export default Service;
