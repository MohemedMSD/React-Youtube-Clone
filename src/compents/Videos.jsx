import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard, LoadingCom } from "./";
const Videos = ({ videos, direction }) => {
  if (!videos) return <LoadingCom />;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      gap={2}
      justifyContent={{ xs: "start", md: "center" }}
    >
      {videos.map((item, index) => (
        <Box key={index} sx={{ width: { md: "320px", xs: "100%", sm: "48%" } }}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channeldetails={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
