import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Image from "next/image"; // For Next.js, or use <img> for regular React

const MutualFundsPage = () => {
  return (
    <Box
      sx={{ backgroundColor: "#f2e0d2", color: "#4b2e1e", padding: "40px 0" }}
    >
      <Container maxWidth="lg">
        {/* Text section with heading and content */}
        <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            Mutual Fund Service at Hippiebull Fincoff
          </Typography>
          <Typography variant="h6" paragraph>
            Your Financial Brew, Perfectly Blended! ☕️
          </Typography>
          <Typography paragraph>
            Ever wondered how making the perfect cup of coffee is a lot like  
            managing your money? Just like that ideal blend of coffee beans and
            milk, mutual funds are a carefully crafted mix of different
            financial ingredients—stocks, bonds, and securities—stirred together
            by expert “baristas” (a.k.a. fund managers) to serve you the best
            possible returns. And guess what? You get to sit back and enjoy the
            brew without worrying about the behind-the-scenes magic.
          </Typography>
        </Box>

        {/* Two Images Below the Text */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/mf_img1.jpeg" // Update with actual image paths
              alt="Financial Brew"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
            <Typography
              variant="body1"
              sx={{ textAlign: "center", marginTop: "10px" }}
            >
              A visual representation comparing the process of making coffee to
              managing mutual funds. One side features a barista pouring coffee
              into a cup.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/mf_img2.jpeg" // Update with actual image paths
              alt="Financial Growth"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
            <Typography
              variant="body1"
              sx={{ textAlign: "center", marginTop: "10px" }}
            >
              A graphic showing a comparison between brewing coffee and managing
              mutual funds. On one side, a barista is carefully mixing coffee
              beans, milk.
            </Typography>
          </Grid>
        </Grid>

        {/* Main Content with Left-aligned Points and Image on the Right */}
        <Grid container spacing={4} sx={{ marginTop: "40px" }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ textAlign: "left", fontWeight: "bold" }}
            >
              Here’s how we serve it up at Hippiebull Fincoff:
            </Typography>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h6" gutterBottom>
                1. Custom-Brewed Portfolios 🍶
              </Typography>
              <Typography paragraph>
                Whether you're aiming for long-term wealth or steady growth, we
                create a mutual fund portfolio that suits your taste based on
                your financial goals, risk appetite, and investment time
                horizon.
              </Typography>

              <Typography variant="h6" gutterBottom>
                2. Expert Financial Baristas ☕️
              </Typography>
              <Typography paragraph>
                Our financial experts blend the right investments for you,
                constantly adjusting your portfolio to keep things fresh—
                whether the market’s hot or cold.
              </Typography>

              <Typography variant="h6" gutterBottom>
                3. Diversification: Your Coffee Flight ☕️+☕️+☕️
              </Typography>
              <Typography paragraph>
                By spreading your money across different assets, you’re not
                relying on just one brew. We balance your risk, making sure your
                investments grow steadily.
              </Typography>

              <Typography variant="h6" gutterBottom>
                4. Regular Tasting Sessions 🍵
              </Typography>
              <Typography paragraph>
                We constantly monitor your portfolio to ensure it’s performing
                as well as your morning cup. If adjustments are needed, we make
                them.
              </Typography>

              <Typography variant="h6" gutterBottom>
                5. Transparent Pricing: No Hidden Beans 💸
              </Typography>
              <Typography paragraph>
                Our fee structure is crystal clear—no hidden costs or sneaky
                fees. You’ll always know where your money is going.
              </Typography>

              <Typography variant="h6" gutterBottom>
                6. Reinvesting: The “Bottomless Cup” Effect ♻️
              </Typography>
              <Typography paragraph>
                When your mutual fund makes profits, they’re automatically
                reinvested, helping your wealth grow through compounding.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/mf_belowImg.jpeg" // Update with actual image path
              alt="Mutual Funds Visual"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
          </Grid>
        </Grid>

        {/* Final Section: Why Choose Mutual Funds with Hippiebull Fincoff */}
        <Box sx={{ marginTop: "40px" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "left", marginBottom: "20px" }}
          >
            Why Choose Mutual Funds with Hippiebull Fincoff?
          </Typography>

          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h6" gutterBottom>
              Affordable for Everyone:&nbsp;
              <Typography component="span" paragraph>
                You don’t need a big budget to start. Much like you can enjoy a
                simple filter coffee or a fancy cappuccino, mutual funds work
                for everyone—whether you’re a beginner or an experienced
                investor.
              </Typography>
            </Typography>

            <Typography variant="h6" gutterBottom>
              Lower Risk:&nbsp;
              <Typography component="span" paragraph>
                Why put all your eggs (or beans) in one basket? Mutual funds
                help spread the risk, meaning a well-balanced investment
                portfolio can handle market ups and downs better.
              </Typography>
            </Typography>

            <Typography variant="h6" gutterBottom>
              Easy Liquidity:&nbsp;
              <Typography component="span" paragraph>
                Need access to your cash in a hurry? No problem! You can redeem
                your mutual fund units with ease, just like picking up your
                to-go coffee.
              </Typography>
            </Typography>

            <Typography variant="h6" gutterBottom>
              Tax-Friendly:&nbsp;
              <Typography component="span" paragraph>
                Some mutual funds even come with tax benefits, giving you an
                extra shot of savings along the way.
              </Typography>
            </Typography>
          </Box>
        </Box>

        {/* Conclusion */}
        <Box sx={{ marginTop: "40px", textAlign: "left" }}>
          <Typography variant="h5" gutterBottom>
            At Hippiebull Fincoff, we believe your financial journey should be
            as enjoyable as a perfectly brewed cup of coffee. So why not grab a
            cup and chat with us about how mutual funds can help you brew the
            financial future you want?
          </Typography>
        </Box>
        <Box sx={{ marginTop: "40px", textAlign: "left" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Ready to start investing? Let’s talk over coffee! ☕️💸
          </Typography>
        </Box>
        <Box sx={{ marginTop: "40px", textAlign: "center" }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() =>
              window.open("https://topmate.io/saahil_mutreja/", "_blank")
            }
          >
            Book an Appointment !
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default MutualFundsPage;
