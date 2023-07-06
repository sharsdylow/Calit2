import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SensorSelector() {
  const [group, setGroup] = React.useState('');
  const [num, setNum] = React.useState('');

  const handleGroupChange = (event) => {
    setGroup(event.target.value);
  };

  const handleNumChange = (event) => {
    setNum(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 2, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-helper-label">Group</InputLabel>
        <Select
          value={group}
          label="Group"
          onChange={handleGroupChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 2, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-helper-label">No.</InputLabel>
        <Select
          value={num}
          label="No."
          onChange={handleNumChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}