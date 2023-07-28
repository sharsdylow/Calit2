import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import RealtimeSensorChart from "../features/sensors/RealtimeSensorChart"
import SensorSwitch from "../features/sensors/SensorSwitch"
import CameraItem from '../features/camera/CameraItem'
import { useSelector } from 'react-redux'

export default function DashBoardItem({location}) {
//   console.log(location)
    const {cameras} = useSelector(state => state.cameras)
    // console.log(cameras)
    const camera_group = cameras.filter(camera => camera.location === location)
    // console.log(camera_group)

    const cameraList = camera_group.map(camera => {
        return <CameraItem key={camera.device_id} camera={camera} />
    })

    return (
        <div>
            <h3>{location}</h3>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <RealtimeSensorChart location={location} />
                    </Grid>
                    <Grid item xs={2}>
                        <SensorSwitch location={location} />
                    </Grid>
                </Grid>
                {cameraList}
            </Box>
        </div>
    )
}
