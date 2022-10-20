import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Sidebar, Videos, ErrorCom, LoadingCom } from "./";
import FeatchData from "../utils/FeatchFromAPI";
const Feed = () => {
  // state for category
  const [selectCat, setselectCat] = useState("New");
  // state for videos
  const [videos, setvideos] = useState([]);

  // state for error
  const [error, seterror] = useState(false);
  const [errorMSG, seterrorMSG] = useState("");

  // state for loading
  const [Loading, setLoading] = useState(false);

  // for get data in reload
  useEffect(() => {
    setLoading(true);
    setvideos([]);

    FeatchData(`search?part=snippet&q=${selectCat}`)
      .then((data) => {
        setLoading(false);
        setvideos(data.items);
        seterror(false);
      })
      .catch((error) => {
        setLoading(false);
        seterror(true);
        seterrorMSG(error.message);
      });
  }, [selectCat]);

  return (
    <Stack
      bgcolor="background.default"
      sx={{ flexDirection: { sx: "column", md: "row" }, height: "95vh" }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          overflowY: "auto",
          borderRight: "1px solid #3D3D3D",
          px: { sx: 0, md: 2 },
          py: { sx: 0, md: 1 },
        }}
      >
        <Sidebar selectCat={selectCat} setselectCat={setselectCat} />
        <Typography className="copyright" variant="body2">
          Copy Right 2022 MHD MSD
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" mb={2}>
          {selectCat}
          <span
            style={{ color: "#FC1503", fontWeight: "bold", marginLeft: "12px" }}
          >
            Videos
          </span>
        </Typography>
        {Loading ? <LoadingCom /> : <Videos videos={videos} />}
        {error ? <ErrorCom err={errorMSG} /> : <Videos videos={videos} />}
      </Box>
    </Stack>
  );
};

export default Feed;
