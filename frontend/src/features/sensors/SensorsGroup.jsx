import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import RealtimeSensorChart from './RealtimeSensorChart'
import SensorSwitch from './SensorSwitch'
import { fetchSensors } from './sensorsSlice'
import { toast } from 'react-toastify';

export default function SensorsGroup() {
  const {sensors} = useSelector(state => state.sensors)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchSensors()).unwrap().catch(toast.error)
  }, [dispatch])

  console.log(sensors)
  const groups = new Set()
  sensors.forEach(sensor => {
    groups.add(sensor.location)
  })

  const groupList = Array.from(groups).map(groupID => {
    return (
      <div key={groupID}>
        <h3>Group {groupID}</h3>
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <RealtimeSensorChart location={groupID} />
                </Grid>
                <Grid item xs={2}>
                    <SensorSwitch group={groupID} />
                </Grid>
            </Grid>
        </Box>
      </div>
    )
  })

  return (
    <div>
        {groupList}
    </div>
  )
}
