import React from "react";

const Video = () => {
  return (
    <>
      <div className="h-full w-full">
        <video
          // src="public/video.mp4"
          src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1759035734~exp=1759039334~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=c87e9b82fb56ce3d60a0fa0152fe493129cf1d51731fdf9f9deaebe3b85b8ff9&r=dXMtZWFzdDE%3D"
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
