import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch, useSelector } from 'react-redux'
import { setVisibility } from '../../features/sensors/sensorsSlice';


export default function SensorSwitch({location}) {
  const {sensors} = useSelector(state => state.sensors)
  const dispatch = useDispatch()
  const switches = sensors.map(sensor =>{
    if (sensor.location==location){
      return <FormControlLabel key={sensor.device_id}control={<Switch defaultChecked onChange={() => dispatch(setVisibility(sensor.device_id))}/>} label={sensor.name} />
    }
  })
  return (
    <div>
      <FormLabel sx={{fontSize: 12}} component="legend">Choose Sensor</FormLabel>
      <FormGroup>
        {switches}
      </FormGroup>
    </div>
  )
}
