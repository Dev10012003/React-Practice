import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { Box, Stack } from "@mui/system";
import Feed from "./components/Feed";
import Add from "./components/Add";
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar></Navbar>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode}></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
        <Add></Add>
      </Box>
    </ThemeProvider>
  );
}

export default App;
