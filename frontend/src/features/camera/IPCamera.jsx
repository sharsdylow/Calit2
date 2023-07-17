import React from 'react';
import { useSelector } from 'react-redux';
import { fetchStream } from './camerasSlice';
import JSMpeg from "@cycjimmy/jsmpeg-player";
import { useDispatch } from 'react-redux';

const ffmpegIP = "localhost";

export default function IPCamera() {
  const cameras = useSelector(state => state.cameras)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchStream())
    cameras.forEach(camera => {
      var videoUrl = `ws://${ffmpegIP}:${camera.port}/`;
      var wrapper = "#"+camera.name
      var player = new JSMpeg.VideoElement(wrapper, videoUrl, {
        autoplay: true,
      });
      // console.log(player.player.video.decodedTime);
      // setTimeout(function () {console.log(player.player.video.decodedTime)}, 5000)
    })
  });

  const cameraList = cameras.map(camera => {
    return (
      <div>
      <h3>{camera.name}</h3>
      <div id={camera.name} style={{ height: "360px", width: "480px" }}></div>
      </div>
    )
  })
  
  return (
    <div>
      {cameraList}
    </div>
  )
}
