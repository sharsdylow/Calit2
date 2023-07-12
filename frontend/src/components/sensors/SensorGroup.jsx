import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import RealtimeSensorChart from './RealtimeSensorChart'
import SensorSwitch from './SensorSwitch'

export default function SensorGroup({group: {id, sensors}}) {
  return (
    <div>
      <h3>Group {id}</h3>
      <Box sx={{flexGrow: 1}}>
          <Grid container spacing={2}>
              <Grid item xs={10}>
                  <RealtimeSensorChart sensors={sensors} />
              </Grid>
              <Grid item xs={2}>
                  <SensorSwitch sensors={sensors} />
              </Grid>
          </Grid>
      </Box>
    </div>
    
  )
}

