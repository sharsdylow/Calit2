import React, { useEffect } from "react";
import JSMpeg from "@cycjimmy/jsmpeg-player";

const ffmpegIP = "localhost";

export default function Camera() {
  useEffect(() => {
    var videoUrl = `ws://${ffmpegIP}:6789/`;
    var player = new JSMpeg.VideoElement("#video-canvas", videoUrl, {
      autoplay: true,
    });
    console.log(player);
  });

  return (
    <div>
      <h3>Camera 1</h3>
      <div id="video-canvas" style={{ height: "480px", width: "640px" }}></div>
    </div>
  )
}
