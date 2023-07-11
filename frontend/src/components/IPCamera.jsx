import React from 'react'
import JSMpeg from "@cycjimmy/jsmpeg-player";
import axios from 'axios';

const ffmpegIP = "localhost";
export default function IPCamera({camera: {name, url, port}}) {
  React.useEffect(() => {
    fetchStream();
    var videoUrl = `ws://${ffmpegIP}:${port}/`;
    var player = new JSMpeg.VideoElement("#video-canvas", videoUrl, {
      autoplay: true,
    });
    console.log(player);
  });
  const fetchStream = async () => {
    try{
        const res = await axios.get('http://localhost:8000/start-stream', {
            params: {url: url, port: port, key: name}
        });
        console.log(res);
    }catch(error){
        console.error('Error fetching camara stream:', error)
    }
  };
  return (
    <div>
      <div id="video-canvas" style={{ height: "480px", width: "640px" }}></div>
    </div>
  )
}
