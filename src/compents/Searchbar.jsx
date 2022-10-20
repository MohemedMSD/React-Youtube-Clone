import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Searchbar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
  const hundelclick = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={hundelclick}
      sx={{
        bgcolor: "#fff",
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => {
          setsearchTerm(e.target.value);
        }}
        value={searchTerm}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
