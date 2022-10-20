import { CheckCircle } from "@mui/icons-material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import FeatchData from "../utils/FeatchFromAPI";
import { Videos, LoadingCom, ErrorCom } from "./";

const Videodetails = () => {
  const [videoDetails, setvideoDetails] = useState(null);
  const [videos, setvideos] = useState(null);
  const [error, seterror] = useState(false);
  const [errorMSG, seterrorMSG] = useState("");

  const [errorVD, seterrorVD] = useState(false);
  const [errorMSG_VD, seterrorMSG_VD] = useState("");
  const { id } = useParams();
  useEffect(() => {
    // get statistics for the vedio
    FeatchData(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setvideoDetails(data.items[0]);
      })
      .catch((error) => {
        seterror(true);
        seterrorMSG(error.message);
      });

    // get video related for this vd
    FeatchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setvideos(data.items))
      .catch((error) => {
        seterrorVD(false);
        seterrorMSG_VD(error.message);
      });
  }, [id]);
  if (error) {
    return <ErrorCom err={errorMSG} />;
  } else if (!videoDetails?.snippet) {
    return <LoadingCom />;
  }
  const {
    snippet: { channelId, title, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;
  return (
    <Box minHeight="95vh" bgcolor="background.default">
      <Stack direction={{ xs: "column", md: "row" }}>
        {error ? (
          <ErrorCom error={errorMSG} />
        ) : (
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
              <Typography variant="h5" p={2}>
                {title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                px="10px"
                py={1}
                color="text.primary"
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography
                    sx={{ typography: { xs: "subtitle1", md: "h6" } }}
                    position="relative"
                    color="text.primary"
                  >
                    {channelTitle}
                    <CheckCircle
                      sx={{
                        fontSize: "13px",
                        ml: "5px",
                        color: "gray",
                      }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="8px">
                  <Typography variant="body1" color="text.secondary">
                    {parseInt(viewCount).toLocaleString("EN")} views
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    position="relative"
                  >
                    {parseInt(likeCount).toLocaleString("EN")} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        )}
        <Box
          px={2}
          py={{ xs: 5, md: 1 }}
          alignItems="center"
          justifyContent="center"
        >
          {errorVD ? (
            <Error error={errorMSG_VD} />
          ) : (
            <Videos videos={videos} direction="column" />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default Videodetails;
