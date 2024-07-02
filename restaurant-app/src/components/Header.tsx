import {
  Contacts,
  Fastfood,
  Home,
  Info,
  Menu,
  MenuBook,
  RestaurantMenu,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color="goldenrod"
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1, padding: 1 }}
      >
        <Fastfood /> My Restaurant
      </Typography>
      <Divider></Divider>
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6" color="textPrimary">
                  Home
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/menu">
              <ListItemIcon>
                <RestaurantMenu />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6" color="textPrimary">
                  Menu
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/about">
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6" color="textPrimary">
                  About
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/contact">
              <ListItemIcon>
                <Contacts />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6" color="textPrimary">
                  Contact
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
          <Typography
            color="goldenrod"
            variant="h6"
            component={"div"}
            sx={{ flexGrow: 1 }}
          >
            <Fastfood /> My Restaurant
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <List sx={{ display: "flex" }}>
              <ListItem>
                <Link to="/">
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary="Home" sx={{ color: "white" }} />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/menu">
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary="Menu" sx={{ color: "white" }} />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/about">
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary="About" sx={{ color: "white" }} />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/contact">
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary="Contact" sx={{ color: "white" }} />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component={"nav"}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}

export default Header;
