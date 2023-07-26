import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCameras, fetchStream } from './camerasSlice';
import JsmpegPlayer from '../../components/JsmpegPlayer';
import { toast } from 'react-toastify';
import '../../App.css'

const ffmpegIP = "localhost";

export default function IPCamera() {
  const {cameras} = useSelector(state => state.cameras)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchCameras()).unwrap().catch(toast.error)
    dispatch(fetchStream())
  }, [dispatch]);

  console.log(cameras)

  const videoOptions = {
        autoplay: true,
      }

  const cameraList = cameras.map(camera => {
    return (
      <div key={camera.device_id}>
      <h3>{camera.name}</h3>
      <JsmpegPlayer wrapperClassName="video-wrapper"
          videoUrl={`ws://${ffmpegIP}:${camera.port}/`}
          options={videoOptions}
          overlayOptions={{}}
          // onRef={ref => jsmpegPlayer = ref} 
      />
      </div>
    )
  })
  
  return (
    <div>
      {cameraList}
    </div>
  )
}
