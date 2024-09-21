import { Divider, Typography, Box } from "@mui/material";
const ServicesOptions = () => {
  return [
    {
      title: "Mutual Funds",

      path: "/mutual_funds",
    },
    {
      title: "Insurance",

      path: "/insurance",
    },
    {
      title: "Portfolio Management Service",

      path: "/portfolio_management",
      openInNewTab: false,
    },
    {
      title: "Financial Freedom",

      path: "/financial_freedom",
      openInNewTab: false,
    },
  ];
};
export default ServicesOptions;
