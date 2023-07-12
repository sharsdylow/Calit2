import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SensorSwitch({sensors}) {
  const switches = sensors.map(sensor =>
    <FormControlLabel control={<Switch defaultChecked />} label={sensor} />
  )
  return (
    <div>
      <FormGroup>
        {switches}
      </FormGroup>
    </div>
  )
}
