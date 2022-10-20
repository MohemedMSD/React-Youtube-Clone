import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FeatchData from "../utils/FeatchFromAPI";
import { Videos, ErrorCom, LoadingCom } from "./";

const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  const [error, seterror] = useState(false);
  const [errorMSG, seterrorMSG] = useState("");
  // state for loading
  const [Loading, setLoading] = useState(false);
  const { searchTerm } = useParams();
  useEffect(() => {
    setLoading(true);
    setvideos([]);
    FeatchData(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setvideos(data.items);
        setLoading(false);
        seterror(false);
      })
      .catch((error) => {
        setLoading(false);
        seterror(true);
        seterrorMSG(error.message);
      });
  }, [searchTerm]);
  return (
    <Box
      p={2}
      sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
      bgcolor="background.default"
    >
      {error ? (
        <ErrorCom err={errorMSG} />
      ) : (
        <>
          <Typography variant="h4" mb={2}>
            Search Results for
            <span
              style={{ color: "#FC1503", fontWeight: "bold", margin: "0 12px" }}
            >
              {searchTerm}
            </span>
            videos
          </Typography>
          {Loading ? <LoadingCom /> : <Videos videos={videos} />}
        </>
      )}
    </Box>
  );
};

export default SearchFeed;
