import React from 'react'
import JSMpeg from "@cycjimmy/jsmpeg-player";
import axios from 'axios';

const ffmpegIP = "localhost";
export default function IPCamera({camera: {name, url, port}}) {
  const fetchStream = async () => {
    try{
        const res = await axios.get('http://localhost:8000/start-stream', {
            params: {url: url, port: port, key: name}
        });
        console.log(res.data.message);
    }catch(error){
        console.error('Error fetching camara stream:', error)
    }
  };

  React.useEffect(() => {
    fetchStream();
    var videoUrl = `ws://${ffmpegIP}:${port}/`;
    var player = new JSMpeg.VideoElement("#video-canvas", videoUrl, {
      autoplay: true,
    });
    // console.log(player.player.video.decodedTime);
    // setTimeout(function () {console.log(player.player.video.decodedTime)}, 5000)
  });
  
  return (
    <div>
      <div id="video-canvas" style={{ height: "360px", width: "480px" }}></div>
    </div>
  )
}
