import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  HelpOutline,
  Home,
  KeyboardArrowDown,
  LocationCity,
  Storefront,
} from "@mui/icons-material";
import Fastab_Close from "../images/fastab_logo.png";
import Fastab_Open from "../images/fastab_open.png";
import { useState } from "react";
import { Avatar, Menu, MenuItem, TextField } from "@mui/material";
import { restaurants } from "../utils/data";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px + 185px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const ImageContainer = styled("img")({
  width: 150,
  height: "auto",
});

const FastabOpenImage = styled("img")({
  width: 110,
  height: "auto",
  marginTop: 15,
});

function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [fastabImage, setFastabImage] = useState(Fastab_Close);
  const [selectedRestaurant, setSelectedRestaurant] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const handleRestaurantChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedRestaurant(event.target.value as string);
    setSelectedLocation("All Locations");
  };

  const handleLocationChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedLocation(event.target.value as string);
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
    setFastabImage(open ? Fastab_Close : Fastab_Open);
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar
        open={open}
        sx={{
          bgcolor: "white",
          color: "gray",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
              >
                <MenuIcon sx={{ fontSize: 30 }} />
              </IconButton>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 2, width: "30ch" },
                  display: { xs: "none", lg: "block" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-select-restaurant"
                  select
                  label="All Restaurants"
                  defaultValue="All"
                  value={selectedRestaurant}
                  onChange={handleRestaurantChange}
                  size="small"
                  color="info"
                  SelectProps={{
                    IconComponent: KeyboardArrowDown,
                  }}
                  sx={{
                    height: "auto",
                    "& .MuiOutlinedInput-input": {
                      py: "10px",
                    },
                  }}
                >
                  {restaurants.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="outlined-select-location"
                  select
                  label="All Locations"
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  size="small"
                  color="info"
                  SelectProps={{
                    IconComponent: KeyboardArrowDown,
                  }}
                  sx={{
                    height: "auto",
                    "& .MuiOutlinedInput-input": {
                      py: "10px",
                    },
                  }}
                >
                  {selectedRestaurant !== "All"
                    ? restaurants
                        .find((r) => r.value === selectedRestaurant)
                        ?.locations.map((location) => (
                          <MenuItem key={location.value} value={location.value}>
                            {location.label}
                          </MenuItem>
                        ))
                    : [{ value: "All Locations", label: "All Locations" }].map(
                        (location) => (
                          <MenuItem key={location.value} value={location.value}>
                            {location.label}
                          </MenuItem>
                        )
                      )}
                </TextField>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <IconButton>
                <HelpOutline sx={{ fontSize: 40, color: "lightgray" }} />
              </IconButton>
              <Box
                border="1px solid gray"
                borderRadius="20px"
                width="auto"
                height="41px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginLeft="25px"
                onClick={(e) => setOpenMenu(true)}
              >
                <Avatar />
                <div style={{ marginLeft: "8px" }}>
                  <Typography variant="caption">Welcome,</Typography>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    sx={{ paddingBottom: 0.5, lineHeight: 0.8 }}
                  >
                    Dev Dudhia
                  </Typography>
                </div>
                <KeyboardArrowDown sx={{ marginLeft: "5px" }} />
              </Box>
              <Menu
                id="basic-menu"
                open={openMenu}
                onClose={(e) => setOpenMenu(false)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <MenuItem>My Profile</MenuItem>
                <MenuItem>Change Password</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ display: "flex", justifyContent: "center" }}>
          {fastabImage === Fastab_Open ? (
            <FastabOpenImage src={fastabImage} alt="Fastab Logo Open" />
          ) : (
            <ImageContainer src={fastabImage} alt="Fastab Logo Close" />
          )}
        </DrawerHeader>
        <List sx={{ mt: 2 }}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  backgroundColor: "#EEFBFE",
                  color: "#0CA0F5",
                  "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                    color: "#0CA0F5",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Home sx={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                color="inherit"
                sx={{
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  backgroundColor: "#EEFBFE",
                  color: "#0CA0F5",
                  "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                    color: "#0CA0F5",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Storefront sx={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText
                primary="Restaurants"
                color="inherit"
                sx={{
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  backgroundColor: "#EEFBFE",
                  color: "#0CA0F5",
                  "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                    color: "#0CA0F5",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LocationCity sx={{ fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText
                primary="Locations"
                color="inherit"
                sx={{
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, minHeight: "100vh" }}
        bgcolor="#F7F7F7"
      >
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

export default Sidebar;
