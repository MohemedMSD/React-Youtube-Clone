import { Stack, Typography } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";
const Sidebar = ({ selectCat, setselectCat }) => {
  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { md: "column" },
        overflowY: "auto",
        height: { sx: "auto", md: "93%" },
      }}
    >
      {categories.map((cat) => (
        <button
          onClick={() => setselectCat(cat.name)}
          key={cat.name}
          style={{
            background: cat.name === selectCat && "#FC1503",
          }}
          className="category-btn"
        >
          <span
            className="span"
            style={{
              marginRight: "13px",
              color: cat.name !== selectCat ? "#FC1503" : "white",
            }}
          >
            {cat.icon}
          </span>
          <Typography
            className="span"
            color={cat.name === selectCat ? "white" : "text.primary"}
          >
            {cat.name}
          </Typography>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
