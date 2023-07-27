import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import RealtimeSensorChart from "../features/sensors/RealtimeSensorChart"
import SensorSwitch from "../features/sensors/SensorSwitch"
import IPCamera from "../features/camera/IPCamera";

export default function DashBoardItem({location}) {
  console.log(location)
  return (
    <div>
        <h3>{location}</h3>
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <RealtimeSensorChart location={location} />
                </Grid>
                <Grid item xs={2}>
                    <SensorSwitch group={location} />
                </Grid>
            </Grid>
        </Box>
      </div>
  )
}
