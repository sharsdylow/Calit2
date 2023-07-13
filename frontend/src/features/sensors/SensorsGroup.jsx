import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import RealtimeSensorChart from './RealtimeSensorChart'
import SensorSwitch from './SensorSwitch'

export default function SensorsGroup() {
  const sensors = useSelector(state => state.sensors)
  // console.log(sensors)
  const groupList = Object.values(
    sensors.reduce((acc, sensor)=>{
        const groupID = sensor.group
        if (!acc[groupID]){
            acc[groupID] = (
            <div>
              <h3>Group {groupID}</h3>
              <Box sx={{flexGrow: 1}}>
                  <Grid container spacing={2}>
                      <Grid item xs={10}>
                          <RealtimeSensorChart group={groupID} />
                      </Grid>
                      <Grid item xs={2}>
                          <SensorSwitch group={groupID} />
                      </Grid>
                  </Grid>
              </Box>
            </div>
          )
        }
        return acc
    }, {})
  )
  return (
    <div>
        {groupList}
    </div>
  )
}
