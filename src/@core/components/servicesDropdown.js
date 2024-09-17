import { Divider, Typography, Box } from "@mui/material";
const ServicesOptions = () => {
  return [
    {
      title: "Mutual Funds",

      path: "/mutual_funds",
    },
    {
      title: "Insurance",

      path: "/insurance_service",
    },
    {
      title: "Portfolio Management Service",

      path: "/services",
      openInNewTab: false,
    },
    {
      title: "Asset Management",

      path: "/Blogs",
      openInNewTab: false,
    },
    {
      title: "Financial Freedom",

      path: "/contact",
      openInNewTab: false,
    },
  ];
};
export default ServicesOptions;
