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
  ExpandLess,
  ExpandMore,
  HelpOutline,
  KeyboardArrowDown,
  SettingsOutlined,
} from "@mui/icons-material";
import Fastab_Close from "../images/fastab_logo.png";
import Fastab_Open from "../images/fastab_open.png";
import { ReactNode, useState } from "react";
import {
  Avatar,
  Collapse,
  Divider,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import { menuItems, restaurants } from "../utils/data";
import { Link } from "react-router-dom";

interface ISidebarProps {
  children: ReactNode;
}
const drawerWidth = 240;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  padding-top: 10px;
`;
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
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
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

export default function MiniDrawer({ children }: ISidebarProps) {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const [openConfig, setOpenConfig] = useState<boolean>(false);
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
  const handleConfig = () => {
    setOpenConfig(!openConfig);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        open={open}
        sx={{
          bgcolor: "white",
          color: "gray",
          boxShadow: "none",
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
                sx={{
                  paddingLeft: "15px",
                  display: { xs: "block", lg: "none" },
                }}
              >
                <img src={Fastab_Close}></img>
              </Box>
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
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                slotProps={{
                  paper: {
                    style: {
                      maxHeight: 200,
                      width: "20ch",
                      marginTop: "42px",
                    },
                  },
                }}
              >
                <MenuItem>My Profile</MenuItem>
                <MenuItem>Change Password</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "end", padding: "4px" }}>
          <Typography variant="caption" sx={{ paddingRight: "15px" }}>
            Last Logged In: 07/04/2024 11:08 PM
          </Typography>
        </Box>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ display: "flex", justifyContent: "center" }}>
          {fastabImage === Fastab_Open ? (
            <FastabOpenImage src={fastabImage} alt="Fastab Logo Open" />
          ) : (
            <ImageContainer src={fastabImage} alt="Fastab Logo Close" />
          )}
        </DrawerHeader>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "22ch" },
            display: { xs: "flex", lg: "none" },
            flexDirection: "column",
            paddingTop: "20px",
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
        <List sx={{ mt: 2 }}>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block", paddingTop: "10px" }}
            >
              <StyledLink
                to={item.link}
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  paddingTop: "10px",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: "center",
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
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.primaryText}
                    color="inherit"
                    sx={{
                      opacity: open ? 1 : 0,
                    }}
                  />
                </ListItemButton>
              </StyledLink>
            </ListItem>
          ))}
          <ListItemButton
            onClick={handleConfig}
            sx={{
              "&:hover": {
                backgroundColor: "#EEFBFE",
                color: "#0CA0F5",
                "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                  color: "#0CA0F5",
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: "unset", marginRight: "18px" }}>
              <SettingsOutlined sx={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText primary="Configurations" color="inherit" />
            {openConfig ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openConfig} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ listStyle: "inherit" }}>
              <ListItemButton
                sx={{
                  paddingLeft: 10,
                  minHeight: 48,
                  justifyContent: "initial",
                  "&:hover": {
                    backgroundColor: "#EEFBFE",
                    color: "#0CA0F5",
                    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                      color: "#0CA0F5",
                    },
                  },
                  "&::before": {
                    content: "'\\2022'",
                    display: "inline-block",
                    fontSize: "2em",
                    marginLeft: "0em",
                    lineHeight: 1,
                    width: "0.5em",
                  },
                }}
              >
                <ListItemText primary="POS" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 18,
          px: 5,
          minHeight: "100vh",
          bgcolor: "#F7F7F7",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
