import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Image from "next/image"; // For Next.js, or use <img> for regular React

const InsurancePage = () => {
  return (
    <Box
      sx={{ backgroundColor: "#f2e0d2", color: "#4b2e1e", padding: "40px 0" }}
    >
      <Container maxWidth="lg">
        {/* Text section with heading and content */}
        <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            Insurance Service at Hippiebull Fincoff
          </Typography>
          <Typography variant="h6" paragraph>
            Your Financial Safety Net, Brewed to Perfection! ☕️
          </Typography>
          <Typography paragraph>
          Think of insurance like adding that extra layer of protection to your favorite cup of coffee—whether it’s a cozy cup for the morning or a hot brew on the go, you want to make sure it doesn’t spill and ruin your day. That’s what insurance does for your financial life—it’s your safety net, designed to protect you from life’s unexpected spills and messes. At Hippiebull Fincoff, we offer customized insurance solutions that keep your financial cup full and secure.
          </Typography>
        </Box>

        {/* Two Images Below the Text */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/ins_2.jpg" // Update with actual image paths
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
              Here’s the creative graphic illustrating the concept of insurance using a quirky coffee theme. It balances the idea of financial protection with the warmth of coffee.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/ins_3.jpg" // Update with actual image paths
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
              A professional graphic comparing insurance to coffee, focusing on protection and security.
            </Typography>
          </Grid>
        </Grid>

        {/* Main Content with Left-aligned Points and Image on the Right */}
        <Grid container spacing={4} sx={{ marginTop: "40px" }}>
        <Grid item xs={12} md={6}>
            <Image
              src="/images/ins_1.jpg" // Update with actual image path
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
              How Our Insurance Works:
            </Typography>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h6" gutterBottom>
                1. The Lid on Your Financial Coffee ☕️🛡️
              </Typography>
              <Typography paragraph>
                Imagine you’re walking around with your favorite coffee cup. A little spill could be disastrous! The lid is your insurance—keeping things secure so you can enjoy your coffee without worrying about accidents. Our insurance policies—whether it’s for health, life, or property—are the lid on your financial cup, ensuring that no unexpected event throws you off balance. It's simple—if life spills, we’re here to clean up the mess!
              </Typography>

              <Typography variant="h6" gutterBottom>
                2. The Right Size for Your Cup 📏
              </Typography>
              <Typography paragraph>
                Just like you wouldn’t use a lid that’s too small for your coffee, we make sure your insurance fits perfectly with your needs. Whether you’re looking for a simple health insurance plan or a more complex life insurance policy, we offer tailored solutions that match your lifestyle and financial situation. No one-size-fits-all—this cover is brewed just for you.
              </Typography>

              <Typography variant="h6" gutterBottom>
                3. Emergency Espresso Shots! 🚑
              </Typography>
              <Typography paragraph>
                Life can hit you out of nowhere, just like those mid-afternoon slumps where you need an espresso shot to power through the day. Whether it’s a medical emergency, an unexpected car repair, or even storm damage to your home, insurance acts as that emergency espresso shot. It gives you the financial boost you need when life gets tough, so you can keep moving without worrying about draining your savings.
              </Typography>

              <Typography variant="h6" gutterBottom>
                4. Regular Top-Ups: Keep It Fresh 🔄
              </Typography>
              <Typography paragraph>
                With coffee, you sometimes need a top-up to keep it warm and enjoyable, right? The same goes for your insurance. As your life and circumstances change, your insurance should too. At Hippiebull Fincoff, we review your policies regularly to ensure you’re still getting the best protection. Got a new house? Had a baby? Time for a top-up to keep your coverage fresh and relevant.
              </Typography>

              <Typography variant="h6" gutterBottom>
                5. A Blend of Protection ☕️+💼
              </Typography>
              <Typography paragraph>
                Just like a great coffee can be a mix of different beans, your insurance should be a blend of protections—health, life, property, and more. We help you combine different types of insurance, making sure you’re covered from all angles. Whether it’s protecting your home, your health, or your future, we’ve got the perfect blend to suit your needs.
              </Typography>

              <Typography variant="h6" gutterBottom>
                6. No Hidden Charges: Your Bill is Clear 💸
              </Typography>
              <Typography paragraph>
                Ever ordered a fancy coffee and got hit with extra charges for toppings you didn’t even ask for? Not cool, right? We keep things transparent at Hippiebull Fincoff. You’ll know exactly what you’re paying for with our insurance policies—no hidden fees, no surprise costs. It’s all clearly laid out, just like your favorite coffee menu.
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
            Why Choose Insurance with Hippiebull Fincoff?
          </Typography>

          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h6" gutterBottom>
              Customized Protection:&nbsp;
              <Typography component="span" paragraph>
                Just like your coffee, your insurance is customized to fit your lifestyle, needs, and budget.
              </Typography>
            </Typography>

            <Typography variant="h6" gutterBottom>
              Peace of Mind:&nbsp;
              <Typography component="span" paragraph>
                With the right “lid” on your financial cup, you can enjoy life without worrying about spills.
              </Typography>
            </Typography>

            <Typography variant="h6" gutterBottom>
              Emergency Back-Up:&nbsp;
              <Typography component="span" paragraph>
                Whether it’s an unexpected life event or an urgent financial need, insurance is your emergency espresso shot, giving you that much-needed boost when things get tough.
              </Typography>
            </Typography>

            <Typography variant="h6" gutterBottom>
              Clear, Transparent Pricing: &nbsp;
              <Typography component="span" paragraph>
              No extra charges or hidden fees. What you see is what you get—just like ordering your favorite brew.
              </Typography>
            </Typography>
          </Box>
        </Box>

        {/* Conclusion */}
        <Box sx={{ marginTop: "40px", textAlign: "left" }}>
          <Typography variant="h5" gutterBottom>
            At Hippiebull Fincoff, we believe insurance should be more than just a safety net—it should give you the peace of mind to live life to the fullest. Ready to protect your financial cup from life’s spills? Let’s talk over a virtual coffee and find the perfect insurance blend for you!
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

export default InsurancePage;
