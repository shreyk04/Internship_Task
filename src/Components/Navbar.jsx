import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link, NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import CustomButton from "./CustomButton";
function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="md:flex gap-3  justify-between hidden bg-black text-slate-200 border-b-[0.2px] border-b-slate-300">
        <div className="flex gap-8 p-2">
          <div className="flex gap-4 justify-center items-center">
            <FontAwesomeIcon icon={faPhone} />
            <p>+91 7020044091</p>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>info@suvidhafoundationedutech.org</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center px-4 ">
          <a
            href="https://www.linkedin.com/company/suvidha-foundation/mycompany/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          </a>

          <a
            href="https://instagram.com/suvidha_mahila_mandal?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
          </a>

          <a
            href="https://www.facebook.com/suvidhamahilamandal/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-xl" />
          </a>
        </div>
      </div>
      <div className="flex w-full items-center justify-between px-3 sticky top-0 left-0 z-[100] bg-[#080707] shadow-lg text-gray-300 ">
        <div className="flex w-full justify-between items-center">
          <NavLink className="cursor-pointer rounded-sm" to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/SuvidhaLogo.png"}
              alt="logo"
            />
          </NavLink>
          <IconButton
            id="menu-icon"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", lg: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon className="text-[#ec540e] w-10 h-10" />
          </IconButton>
        </div>

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <div
            className="w-64"
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <List>
              {[
                { text: "Home", to: "/" },
                { text: "Events", to: "/events" },
                { text: "Gallery", to: "/gallery" },
                { text: "Contact", to: "/contact" },
                { text: "Our Donors", to: "/donors" }
              ].map((item) => (
                <ListItem
                  button
                  component={Link}
                  to={item.to}
                  onClick={toggleDrawer(false)}
                  key={item.text}
                >
                  <ListItemText
                    primary={item.text}
                    sx={{
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": { color: "red", transform: "scale(1.05)" }
                    }}
                  />
                </ListItem>
              ))}
              <ListItem>
                <a href="https://forms.gle/pD89BmSfZhioPFK99">
                  <CustomButton text={"Apply For Internship"} />
                </a>
              </ListItem>
              <ListItem>
                <Link to={"/helpus"}>
                  <CustomButton text={"Help Now"} />
                </Link>
              </ListItem>
            </List>
          </div>
        </Drawer>
        <ul id="navbar" className="hidden lg:flex items-center space-x-6">
          {[
            { text: "Home", to: "/" },
            { text: "Events", to: "/events" },
            { text: "Gallery", to: "/gallery" },
            { text: "Our Donors", to: "/donors" },
            { text: "Contact", to: "/contact" }
          ].map((item) => (
            <li className=" whitespace-nowrap	" key={item.text}>
              <Link
                to={item.to}
                className="hover:text-yellow-500 transition-colors duration-300 font-semibold"
              >
                {item.text}
              </Link>
            </li>
          ))}
          <li className="mx-2">
            <a href="https://forms.gle/pD89BmSfZhioPFK99">
              <CustomButton text={"Apply For Internship"} />
            </a>
          </li>
          <li className="mx-2">
            <Link to={"/helpus"}>
              <CustomButton text={"Help Now"} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
