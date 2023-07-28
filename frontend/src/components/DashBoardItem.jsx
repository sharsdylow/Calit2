import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import RealtimeSensorChart from "../features/sensors/RealtimeSensorChart"
import SensorSwitch from "../features/sensors/SensorSwitch"
import CameraItem from '../features/camera/CameraItem'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

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
        <Box sx={{ml:2, mr:2}}>
            {/* <Typography m={0} variant="h5">{location}</Typography> */}
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
        </Box>
    )
}
