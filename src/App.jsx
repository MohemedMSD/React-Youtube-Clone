import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, Paper, ThemeProvider } from "@mui/material";
import {
  Navbar,
  Feed,
  Videodetails,
  Channelsdetails,
  SearchFeed,
} from "./compents";
import { useDispatch, useSelector } from "react-redux";
import { Change_Mode_APP, Select_Mode_APP } from "./redux/features/manageState";
const App = () => {
  const Dark_Mode = useSelector(Select_Mode_APP);
  const Dispatch = useDispatch();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Mode"));
    if (data) {
      Dispatch(Change_Mode_APP(!data));
    }
  }, [Dark_Mode]);

  const theme = createTheme({
    palette: {
      mode: Dark_Mode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Paper sx={{ borderRadius: "0" }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" exact element={<Videodetails />} />
            <Route path="/channel/:id" exact element={<Channelsdetails />} />
            <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
          </Routes>
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
