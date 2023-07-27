import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCameras, fetchStream } from './camerasSlice';
import { toast } from 'react-toastify';
import CameraItem from './CameraItem';

export default function IPCamera() {
  const {cameras} = useSelector(state => state.cameras)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchCameras()).unwrap().catch(toast.error)
    dispatch(fetchStream())
  }, [dispatch]);

  console.log(cameras)

  const cameraList = cameras.map(camera => {
    return (
      <CameraItem camera={camera} key={camera.device_id}></CameraItem>
    )
  })
  
  return (
    <div>
      {cameraList}
    </div>
  )
}
