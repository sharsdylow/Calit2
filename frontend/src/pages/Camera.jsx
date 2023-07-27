import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCameras, fetchStream } from '../features/camera/camerasSlice';
import { toast } from 'react-toastify';
import CameraItem from '../features/camera/CameraItem';

export default function Camera() {
  const {cameras} = useSelector(state => state.cameras)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchCameras()).unwrap().catch(toast.error)
  }, [dispatch]);

  cameras.forEach(camera => {
    dispatch(fetchStream(camera)).unwrap().catch(toast.error)
  })
  // console.log(cameras)

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
