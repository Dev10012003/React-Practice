import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Stack, styled } from "@mui/system";
import React, { useState } from "react";

const Styeledmodal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Userbox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

function Add() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Tooltip
        onClick={(e) => {
          setOpen(true);
        }}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Styeledmodal
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={450}
          height={300}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <Userbox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Remy Sharp"
              src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"
            ></Avatar>
            <Typography variant="caption" fontWeight={500}>
              John Doe
            </Typography>
          </Userbox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={3}
            defaultValue="What's on your mind ?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotions color="primary"></EmojiEmotions>
            <Image color="secondary"></Image>
            <VideoCameraBack color="success"></VideoCameraBack>
            <PersonAdd color="error"></PersonAdd>
          </Stack>
          <ButtonGroup
            sx={{ marginTop: "20px" }}
            variant="contained"
            aria-label="Basic button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange></DateRange>
            </Button>
          </ButtonGroup>
        </Box>
      </Styeledmodal>
    </>
  );
}

export default Add;
