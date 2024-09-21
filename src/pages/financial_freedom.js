import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Image from "next/image"; // For Next.js, or use <img> for regular React

const FinancialFreedomPage = () => {
  return (
    <Box
      sx={{ backgroundColor: "#f2e0d2", color: "#4b2e1e", padding: "40px 0" }}
    >
      <Container maxWidth="lg">
        {/* Text section with heading and content */}
        <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
          Financial Freedom at Hippiebull Fincoff: Sipping on Your Own Terms! ☕💸
          </Typography>

          <Typography paragraph>
          Ever dream of living life like your favorite coffee shop—working when you want, sipping that perfect brew at your own pace, without worrying about the bill? That’s what financial freedom feels like! At Hippiebull Fincoff, we’re here to help you brew a life where you control the menu—deciding when and how to spend, save, and invest, all while feeling financially secure.
          </Typography>
        </Box>

        {/* Two Images Below the Text */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/fifm_5.jpg" // Update with actual image paths
              alt="Financial Brew"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
            <Typography
              variant="body1"
              sx={{  marginTop: "10px" }}
            >
              Just like brewing the perfect cup of coffee, financial freedom starts with getting the right blend. Create a budget that tracks your income and expenses. This will help you figure out where your money is going and ensure you’re not over-brewing your spending. 
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/fifm_4.jpg" // Update with actual image paths
              alt="Financial Growth"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
            <Typography
              variant="body1"
              sx={{ marginTop: "10px" }}
            >
              Now that you’ve got your budget brewed, it’s time to let your money grow. Investing is like steeping coffee: the longer it brews, the stronger the flavor. Whether it’s stocks, mutual funds, or real estate, invest in assets that can grow over time. The earlier you start, the richer the rewards. Let your investments steep while you sit back and enjoy life.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/fifm_3.jpg" // Update with actual image paths
              alt="Financial Growth"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
            <Typography
              variant="body1"
              sx={{ marginTop: "10px" }}
            >
              True financial freedom is like having a bottomless cup of coffee—you never run out! Set up passive income streams like dividends, rental properties, or side businesses that generate cash flow even when you’re not working. With multiple sources of income, you’ll have the freedom to live life on your own terms.
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
              How We Brew Your Path to Financial Freedom::
            </Typography>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h6" gutterBottom>
                1. Crafting Your Perfect Brew (Your Financial Plan) 📝
              </Typography>
              <Typography paragraph>
                Like a barista crafting the perfect cup, financial freedom starts with the right blend of financial planning. You need the right ingredients: savings, investments, and a sprinkle of discipline to hit your goals. We sit down with you to understand your dreams—whether it’s traveling the world, retiring early, or just sipping coffee without checking the price tag—and build a customized plan to make it happen.
              </Typography>

              <Typography variant="h6" gutterBottom>
                2. Investing for Long-Term Flavor 💼☕
              </Typography>
              <Typography paragraph>
                Just like coffee beans take time to roast for the best flavor, your financial freedom doesn’t happen overnight. We guide you to invest smartly—whether it’s stocks, mutual funds, or real estate—so your money grows steadily over time. The longer it brews, the richer it gets. Think of it as letting your investments “steep” for that perfect financial flavor.
              </Typography>

              <Typography variant="h6" gutterBottom>
                3. Freedom from Financial Jitters! 😬
              </Typography>
              <Typography paragraph>
                You know that feeling after too much caffeine, when your hands get shaky? That’s what financial stress feels like—always worrying about bills, debt, or unexpected expenses. Our financial freedom plan is designed to eliminate those jitters! By managing your expenses, cutting unnecessary costs, and investing wisely, we help you enjoy your life with confidence, minus the financial anxiety.
              </Typography>

              <Typography variant="h6" gutterBottom>
                4. Passive Income: Your Bottomless Cup 🤑
              </Typography>
              <Typography paragraph>
                Imagine walking into a café and never worrying about your coffee running out—unlimited refills! That’s what passive income feels like. Whether it’s dividends from investments, rental income, or even a side business, we help you set up income streams that keep flowing, even when you’re not actively working. It’s like having a bottomless cup of coffee—financial freedom that just keeps giving!

              <Typography variant="h6" gutterBottom>
                5. Budgeting: The Perfect Coffee Recipe 🍶
              </Typography>
              <Typography paragraph>
                A good cup of coffee requires the right balance of ingredients—too much milk or too little sugar can ruin it. The same goes for your finances! Budgeting is the recipe that keeps your financial brew on track. We help you create a budget that’s easy to follow, ensuring you don’t overspend, but still enjoy life’s luxuries—like that extra shot of espresso or a spontaneous weekend trip!
              </Typography>

              <Typography variant="h6" gutterBottom>
                6. Flexibility: Savor Life’s Flavors 🌍
              </Typography>
              <Typography paragraph>
                With financial freedom, you get to enjoy life on your terms. Whether it’s a laid-back afternoon at your favorite café or an impromptu vacation, our plan gives you the flexibility to enjoy life’s moments. And the best part? You’re not tied to a 9-to-5 schedule, because your money is working just as hard as you are!
              </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/fifm_6.jpg" // Update with actual image path
              alt="Mutual Funds Visual"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
            <Image
              src="/images/fifm_9.jpg" // Update with actual image path
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
            Why Choose Financial Freedom with Hippiebull Fincoff?
          </Typography>

          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h6" gutterBottom>
              Personalized Plan:&nbsp;
              <Typography component="span" paragraph>
                Like your favorite coffee, your path to financial freedom is personalized—designed to fit your goals and lifestyle.
              </Typography>
            </Typography>

            <Typography variant="h6" gutterBottom>
              Stress-Free Living:&nbsp;
              <Typography component="span" paragraph>
                We help you cut out the financial jitters and live life with confidence and peace of mind.
              </Typography>
            </Typography>

            <Typography variant="h6" gutterBottom>
              Passive Income:&nbsp;
              <Typography component="span" paragraph>
                Set up income streams that keep your cup full, even when you’re not working!
              </Typography>
            </Typography>

            <Typography variant="h6" gutterBottom>
              Enjoy Life’s Moments:&nbsp;
              <Typography component="span" paragraph>
                With a solid financial plan, you can live life on your terms—whether that’s a long vacation or a quiet coffee break.
              </Typography>
            </Typography>
          </Box>
        </Box>

        {/* Conclusion */}
        <Box sx={{ marginTop: "40px", textAlign: "left" }}>
          <Typography variant="h5" gutterBottom>
            At Hippiebull Fincoff, financial freedom isn’t just a goal—it’s a lifestyle. We’ll help you brew the perfect plan, so you can sip, save, and enjoy life without worrying about what’s in your wallet. Ready to craft your path to financial freedom? Let’s chat over a virtual coffee and start brewing your dream life today!
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
            Book a Virtual Coffee Chat Today!☕
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FinancialFreedomPage;
