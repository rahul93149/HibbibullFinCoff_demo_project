import { Typography, Box, Container, Grid, Paper } from "@mui/material";
import Image from "next/image";

const About = () => {
  return (
    <Box
      sx={{ backgroundColor: "#f2e0d2", color: "#4b2e1e", padding: "50px 0" }}
    >
      <Container maxWidth="lg">
        {/* Page Heading */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            paddingBottom: "20px",
            fontWeight: "bold",
            color: "#3b2311",
          }}
        >
          About Us
        </Typography>

        {/* Introduction Section */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "left",
            marginBottom: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#5e3d29",
          }}
        >
          Welcome to Hippiebull Fincoff – where financial growth meets strategic
          investments... with a dash of fun! 🎉 We’re not your typical financial
          firm (we promise, no stuffy boardrooms here). Instead, we’re your
          friendly financial wizards, brewing innovative solutions over a
          steaming cup of coffee ☕, all while helping you navigate the twists
          and turns of the financial world with precision.
        </Typography>
        <br />
        <br />
        <Typography
          variant="body1"
          sx={{
            textAlign: "left",
            marginBottom: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#5e3d29",
          }}
        >
          At Hippiebull Fincoff, we believe that financial success should be as
          enjoyable as your favorite brew! Whether you're a seasoned investor or
          just dipping your toes into the stock market for the first time, we’ve
          got the perfect blend of services for you.
        </Typography>
        <br />
        <br />
        <Typography
          variant="body1"
          sx={{
            textAlign: "left",
            marginBottom: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#5e3d29",
          }}
        >
          💼 Asset Management: Think of us as your financial baristas. We whip
          up custom mutual fund portfolios to suit your unique goals, with a
          sprinkle of expert analysis and a dash of market magic to keep your
          investments brewing nicely.
        </Typography>
        <br />
        <br />
        <Typography
          variant="body1"
          sx={{
            textAlign: "left",
            marginBottom: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#5e3d29",
          }}
        >
          📊 Portfolio Management: We don’t just talk the talk; we manage your
          equity investments like a boss! Combining in-depth research with
          real-time insights, we create personalized portfolios designed to
          exceed your expectations. (And yes, we’ve got our eye on the market
          while you sip that coffee).
        </Typography>
        <br />
        <br />
        <Typography
          variant="body1"
          sx={{
            textAlign: "left",
            marginBottom: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#5e3d29",
          }}
        >
          🎓 Learning & Mentorship: Financial jargon making your head spin?
          Don’t worry – we’re here to break it all down for you. Whether you're
          a student or a newbie investor, our mentorship programs and workshops
          are designed to demystify the stock market and empower you to make
          informed decisions. No complicated lingo, just straight-up knowledge.
        </Typography>
        <br />
        <br />
        <Typography
          variant="body1"
          sx={{
            textAlign: "left",
            marginBottom: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#5e3d29",
          }}
        >
          At Hippiebull Fincoff, we’re more than a financial firm – we’re a
          community of like-minded folks who are passionate about financial
          excellence (and really good coffee). With transparency, integrity, and
          a client-first approach at our core, we’re changing the game in
          finance, one cup at a time.
        </Typography>
        <br />
        <br />
        <Typography
          variant="body1"
          sx={{
            textAlign: "left",
            marginBottom: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#5e3d29",
          }}
        >
          So, why not pull up a chair, grab a cup of coffee, and let’s chat
          about your financial future? Let Hippiebull Fincoff be the caffeine
          boost your investments need. Together, we’ll chart your course toward
          a prosperous and secure future.
        </Typography>
        <br />
        <br />
        {/* Mission and Vision */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                padding: "20px",
                backgroundColor: "#e8d3bd",
                borderColor: "#8b5e34",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#8b5e34",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                Our Mission
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "left" }}>
                Just like brewing the perfect coffee, our mission is to deliver
                finely tuned financial solutions that match your taste, bringing
                security and prosperity to your financial journey.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                padding: "20px",
                backgroundColor: "#e8d3bd",
                borderColor: "#8b5e34",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#8b5e34",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                Our Vision
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "left" }}>
                We envision a world where everyone’s financial portfolio is as
                carefully crafted as a premium blend of coffee beans — rich,
                diverse, and perfectly brewed for success.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Team Section */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginTop: "60px",
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#3b2311",
          }}
        >
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#f6e6d9",
              }}
            >
              <Box sx={{ marginBottom: "15px" }}>
                <img
                  src="/images/nidhi_director.jfif"
                  alt="Nidhi Kakkar"
                  style={{
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#8b5e34" }}
              >
                Nidhi Kakkar
              </Typography>
              <Typography variant="body2" sx={{ color: "#5e3d29" }}>
                COO
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "10px" }}>
                Founder Pawwbuddy | Marketing & Sales (R&D) | SIBM Pune | Ex -
                Porsche / Reels and Frames | Personal Branding Strategist |
                Entrepreneur | CSM - Luxury Industry | Bridging the gap between
                internal teams and external customers
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#f6e6d9",
              }}
            >
              <Box sx={{ marginBottom: "15px" }}>
                <img
                  src="/images/saahil_ceo.jfif"
                  alt="Saahil Mutreja"
                  style={{
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#8b5e34" }}
              >
                Saahil Mutreja
              </Typography>
              <Typography variant="body2" sx={{ color: "#5e3d29" }}>
                CEO & Founder
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "10px" }}>
                Founder & CEO @ Hippiebull Fincoff | Asset Under Management
                (AUM) $3.7 Million and growing! 💸 | Simplifying overwhelming
                financial decisions over a cup of coffee. ☕
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#f6e6d9",
              }}
            >
              <Box sx={{ marginBottom: "15px" }}>
                <img
                  src="/images/saahil_ceo.jfif"
                  alt="Saahil Mutreja"
                  style={{
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#8b5e34" }}
              >
                Ashok Kumar Mutreja 
              </Typography>
              <Typography variant="body2" sx={{ color: "#5e3d29" }}>
                Director
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "10px" }}>
              He is the backbone of Hippiebull and as well as this financial corporation which we lovingly now call Hippiebull Fincoff.
              He is the true OG who has been a steady pillar since day one. With over four decades of experience in the financial industry, he brings a wealth of knowledge and leadership, ensuring the company's solid foundation and growth. His expertise and unwavering commitment are what keep everything running smoothly.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#f6e6d9",
              }}
            >
              <Box sx={{ marginBottom: "15px" }}>
                <img
                  src="/images/nitin_coo.jpg"
                  alt="Nitin Garg"
                  style={{
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#8b5e34" }}
              >
                Rooh
              </Typography>
              <Typography variant="body2" sx={{ color: "#5e3d29" }}>
                Cuddling Manager
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "10px" }}>
              Meet Rooh, our resident Cuddling Manager at Hippiebull Fincoff! With a soft purr and a heart full of love, Rooh makes sure everyone at the office feels cozy and calm. Whether it’s a quick cuddle during a stressful day or a gentle reminder to take a break, Rooh’s got it covered.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
