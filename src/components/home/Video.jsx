/*eslint-disable */
import React from "react";

const Video = () => {
  const video_links = [
    "https://www.pexels.com/download/video/31974459/",
    "https://www.pexels.com/download/video/4156092/",
    "https://www.pexels.com/download/video/4377752/",
    "https://www.pexels.com/download/video/4508069/",
  ];
  const random_link_pass = () => {
    const randomIndex = Math.floor(Math.random() * video_links.length);
    return video_links[randomIndex];
  };

  return (
    <>
      <div className="h-full w-full">
        <video
          // src="public/video.mp4"
          src={random_link_pass()}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        ></video>
      </div>
    </>
  );
};

export default Video;
