"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { LoadingOutlined } from "@ant-design/icons";
const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});

const YoutubePlayer = ({ url }: { url: string }) => {
  return (
    <div className="w-full h-full pointer-events-none bg-black">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-full w-full">
            <LoadingOutlined color="white" />
          </div>
        }
      >
        <ReactPlayer
          playing
          loop
          controls={false}
          config={{
            youtube: {
              playerVars: {
                disablekb: 1,
                modestbranding: 1,
              },
            },
          }}
          muted
          url={url}
          style={{
            width: "100%",
            height: "100%",
          }}
          height="100%"
          width="100%"
        />
      </Suspense>
    </div>
  );
};

export default YoutubePlayer;
