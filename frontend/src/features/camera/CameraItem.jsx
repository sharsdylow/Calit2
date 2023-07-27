import React from 'react'
import JsmpegPlayer from '../../components/JsmpegPlayer';
import '../../App.css'

const ffmpegIP = "localhost";
const videoOptions = {
    autoplay: true,
  }
export default function CameraItem({camera}) {
  return (
    <div key={camera.device_id}>
      <h3>{camera.name}</h3>
      <JsmpegPlayer wrapperClassName="video-wrapper"
          videoUrl={`ws://${ffmpegIP}:${camera.port}/`}
          options={videoOptions}
          overlayOptions={{}}
      />
    </div>
  )
}
