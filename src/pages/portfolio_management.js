import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Image from "next/image"; // For Next.js, or use <img> for regular React

const PortfolioManagementPage   = () => {
  return (
    <Box
      sx={{ backgroundColor: "#f2e0d2", color: "#4b2e1e", padding: "40px 0" }}
    >
      <Container maxWidth="lg">
        {/* Text section with heading and content */}
        <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            Portfolio Management at Hippiebull Fincoff: Brewing Your Financial Blend!
          </Typography>
          <Typography variant="h6" paragraph>
            Your Financial Brew, Perfectly Blended! ☕️
          </Typography>
          <Typography paragraph>
          Ever wonder how crafting the perfect cup of coffee and managing your investments are surprisingly similar? Just like a well-balanced brew, your financial portfolio needs the right mix of ingredients, timing, and expert hands to get the perfect flavor. That’s where Portfolio Management at Hippiebull Fincoff comes in—we’re your financial baristas, brewing up custom portfolios designed to help you reach your financial goals.
          </Typography>
        </Box>

        {/* Two Images Below the Text */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/pfs_1.jpg" // Update with actual image paths
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
            > A creative and professional graphic showing a comparison between brewing the perfect cup of coffee and managing a financial portfolio.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/pfs_6.jpg" // Update with actual image paths
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
            > It creatively blends the two concepts to illustrate the process of carefully managing investments, much like brewing the perfect cup of coffee.
            </Typography>
          </Grid>
        </Grid>

        {/* Main Content with Left-aligned Points and Image on the Right */}
        <Grid container spacing={4} sx={{ marginTop: "40px" }}>
        <Grid item xs={12} md={6}>
            <Image
              src="/images/pfs_5.jpg" // Update with actual image path
              alt="Mutual Funds Visual"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ textAlign: "left", fontWeight: "bold" }}
            >
              How We Brew Your Financial Blend:
            </Typography>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h6" gutterBottom>
                1. Personalized Recipe Just for You 🍶
              </Typography>
              <Typography paragraph>
                Some like their coffee bold and strong; others prefer a light and smooth brew. Your financial portfolio is the same—it needs to be tailored to your taste. Whether you're craving high-growth investments or something more balanced, we design a custom “blend” of assets (stocks, bonds, and more) that aligns with your goals and risk tolerance. No cookie-cutter portfolios here—this one’s made just for you!
              </Typography>

              <Typography variant="h6" gutterBottom>
                2. Expert Baristas (a.k.a Fund Managers) ☕️
              </Typography>
              <Typography paragraph>
                In the same way a barista knows exactly how much espresso and milk to pour for the perfect latte, our portfolio managers are experts in mixing the right investments. They keep a close eye on the market, constantly adjusting your financial blend to keep it performing at its best. It’s like having a personal financial chef always cooking up the best strategy for your money!
              </Typography>

              <Typography variant="h6" gutterBottom>
                3. Real-Time Adjustments: Always Fresh! 🔄
              </Typography>
              <Typography paragraph>
                Nobody likes stale coffee, right? Well, we don’t like stale portfolios either! The financial world changes constantly, and we make sure your portfolio keeps up with the latest trends. We adjust your investment mix in real-time based on market conditions—whether it’s adding a little “sugar” (high-growth stocks) or cutting back on “caffeine” (reducing risk)—we keep your money fresh and growing.
              </Typography>

              <Typography variant="h6" gutterBottom>
                4. Diversified Brew: A Perfect Blend ✨
              </Typography>
              <Typography paragraph>
                Just like a well-balanced coffee has the perfect mix of flavors, a well-diversified portfolio spreads your investments across different assets to balance risk and reward. We blend together stocks, bonds, real estate, and more so that if one investment cools off, others are still heating up. Think of it as your own personal “investment flight”—a little bit of everything to keep your financial future safe and sound.
              </Typography>

              <Typography variant="h6" gutterBottom>
                5.Consistent Monitoring: Tasting for Perfection 🍵
              </Typography>
              <Typography paragraph>
                A great barista always tastes the brew before serving, and we do the same with your portfolio. We monitor your investments regularly, making sure they’re still in line with your goals and market conditions. If something doesn’t taste right, we tweak it. Our goal is to deliver the perfect financial brew—one that meets your goals and tastes just right.
              </Typography>

              <Typography variant="h6" gutterBottom>
                6.Transparent Pricing: No Hidden Beans 💸
              </Typography>
              <Typography paragraph>
                No one likes surprise charges for extra syrup or whipped cream! At Hippiebull Fincoff, our fees are as clear as a freshly brewed cup of coffee. You’ll know exactly what you're paying for, and we’ll never serve you with hidden costs. After all, transparency is the best blend of trust and service.
              </Typography>
            </Box>
          </Grid>
          
        </Grid>

        {/* Final Section: Why Choose Mutual Funds with Hippiebull Fincoff */}
        <Box sx={{ marginTop: "40px" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "left", marginBottom: "20px" }}
          >
            Why Choose Portfolio Management with Hippiebull Fincoff?
          </Typography>

          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h6" gutterBottom>
              Custom Brewed for You:&nbsp;
              <Typography component="span" paragraph>
                Just like your favorite cup of coffee, your portfolio is personalized, crafted to fit your unique financial flavor.
              </Typography>
            </Typography>

            <Typography variant="h6" gutterBottom>
              Expertly Managed:&nbsp;
              <Typography component="span" paragraph>
                Our financial “baristas” are trained professionals, mixing and adjusting your investments with care and precision, so your portfolio keeps performing well.
              </Typography>
            </Typography>

            <Typography variant="h6" gutterBottom>
              Always Fresh:&nbsp;
              <Typography component="span" paragraph>
                We make real-time adjustments to your portfolio, so your financial brew never goes stale.
              </Typography>
            </Typography>

            <Typography variant="h6" gutterBottom>
              Balanced and Diversified:&nbsp;
              <Typography component="span" paragraph>
                Like the perfect coffee blend, we balance risk and reward by diversifying your investments across different asset types.
              </Typography>
            </Typography>
          </Box>
        </Box>

        {/* Conclusion */}
        <Box sx={{ marginTop: "40px", textAlign: "left" }}>
          <Typography variant="h5" gutterBottom>
            At Hippiebull Fincoff, we believe in brewing up more than just financial success—we’re here to craft an investment journey that’s as enjoyable as your favorite cup of coffee. Ready to start brewing your portfolio to perfection? Let’s chat over a virtual coffee and get you on the path to financial greatness!
          </Typography>
        </Box>
        <Box sx={{ marginTop: "40px", textAlign: "left" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Ready to start investing? Let’s talk over coffee! 
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
            Book a Virtual Coffee Chat today! ☕️
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PortfolioManagementPage  ;
