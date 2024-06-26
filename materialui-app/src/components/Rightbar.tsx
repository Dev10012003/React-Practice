import {
  Avatar,
  AvatarGroup,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={400}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc"
          />
          <Avatar
            alt="Travis Howard"
            src="https://media.istockphoto.com/id/1476171646/photo/young-woman-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=oegktY4Hijr4wOelujTp81I0BJPjD6Q-lb5BpwOj0kA="
          />
          <Avatar
            alt="Cindy Baker"
            src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw="
          />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Trevor Henderson" src="" />
        </AvatarGroup>
        <Typography variant="h6" mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={120} gap={5}>
          <ImageListItem>
            <img src="https://www.savaari.com/blog/wp-content/uploads/2021/08/5.-kuruva-dweep-1024x683.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8RkLRgal0fWFdd_bawCPb9ZZYEXKbOxu4w&s" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://www.savaari.com/blog/wp-content/uploads/2021/08/5.-kuruva-dweep-1024x683.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://www.savaari.com/blog/wp-content/uploads/2021/08/5.-kuruva-dweep-1024x683.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://www.savaari.com/blog/wp-content/uploads/2021/08/5.-kuruva-dweep-1024x683.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://www.savaari.com/blog/wp-content/uploads/2021/08/5.-kuruva-dweep-1024x683.jpg" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" mt={2} mb={2}>
          Latest Conversions
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-focus-face.jpg?auto=avif,webp&format=jpg&width=944"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw="
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://media.istockphoto.com/id/1476171646/photo/young-woman-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=oegktY4Hijr4wOelujTp81I0BJPjD6Q-lb5BpwOj0kA="
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
