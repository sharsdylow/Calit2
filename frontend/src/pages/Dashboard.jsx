import React, {useEffect} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'
import { fetchAll } from '../features/device/deviceSlice';
import { fetchCameras, fetchStream } from '../features/camera/camerasSlice';
import DashBoardItem from '../components/DashBoardItem';

export default function Dashboard() {
  const {devices} = useSelector(state => state.device)
  const {cameras} = useSelector(state => state.cameras)

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchAll()).unwrap().catch(toast.error)
      dispatch(fetchCameras()).unwrap().catch(toast.error)
  }, [dispatch])

  cameras.forEach(camera => {
    dispatch(fetchStream(camera)).unwrap().catch(toast.error)
  })
  // console.log(devices)

  const locations = new Set()
  devices.forEach(device => {
      locations.add(device.location)
  })

  // console.log(locations)
  const dashBoardList = Array.from(locations).map(location => {
    return <DashBoardItem location={location} key={location}/>
  })
  return (
    <div>{dashBoardList}</div>
  )
}
