import { Divider, Typography, Box } from "@mui/material";
const Options = () => {
  return [
    {
      title: "Home",
      src: "/images/dashboard.png",
      icon: <div />,
      path: "/",
    },
    {
      title: "About",
      src: "/images/users.png",
      icon: <div />,
      path: "/about",
    },
    {
      title: "Services",
      src: "/images/promotions.png",
      icon: <div />,
      path: "/services",
      openInNewTab: false,
    },
    {
      title: "Blogs",
      src: "/images/affiliate.png",
      icon: <div />,
      path: "/blogs",
      openInNewTab: false,
    },
    {
      title: "Contact",
      src: "/images/social.png",
      icon: <div />,
      path: "/contact",
      openInNewTab: false,
    },
  ];
};
export default Options;
