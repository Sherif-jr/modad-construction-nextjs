"use client";
import React from "react";
import YouTube from "react-youtube";

const YouTubePlayer = () => {
  return (
    <YouTube
      className="w-[105%] h-full -left-3 -right-3 absolute"
      videoId="bY7_wrd21iE"
      opts={{
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          rel: 0,
          fullscreen: 0
        },
      }}
    />
  );
};

export default YouTubePlayer;
