import React from "react";
import IPCamera from "../components/IPCamera";

export default function Camera() {
  //TODO Get camera info from DB
  const cameras = [
    {
    name: "Camara 1", 
    url: "rtsp://admin:Calit2@128.195.151.231:554/h264Preview_01_main",
    port: "6789"
    },
  ]
  
  return (
    <div>
      {cameras.map(camera => (
        <div>
        <h3>{camera.name}</h3>
        <IPCamera camera={camera}/>
        </div>
      ))}
    </div>
  )
}
