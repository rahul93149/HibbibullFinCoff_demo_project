import { Divider, Typography, Box } from "@mui/material";
const ServicesOptions = () => {
  return [
    {
      title: "Mutual Funds",
      path: "/mutual_funds",
      description: "Explore various mutual fund options to grow your wealth.",
      image: "/images/mutual_funds.jpg",
    },
    {
      title: "Insurance",
      path: "/insurance",
      description: "Protect your future with our wide range of insurance plans.",
      image: "/images/insurance.jpg",
    },
    {
      title: "Portfolio Management",
      path: "/portfolio_management",
      description: "Let us manage your investment portfolio for optimal returns.",
      image: "/images/portfolio_management.jpg",
    },
    {
      title: "Financial Freedom",
      path: "/financial_freedom",
      description: "Achieve financial independence with our expert guidance.",
      image: "/images/financial_freedom.jpg",
    },
  ];
};
export default ServicesOptions;
