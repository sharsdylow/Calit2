import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import Box from '@mui/material/Box'
import Grid from '@mui/system/Unstable_Grid';
import { searchData } from '../../lib/SearchData';
import StatisticSensorChart from './StatisticSensorChart';

export default function DataSearch() {
    const [start, setStart] = React.useState('');
    const [end, setEnd] = React.useState('');
    const [group, setGroup] = React.useState('');
    const [num, setNum] = React.useState('');
  
    const handleGroupChange = (event) => {
      setGroup(event.target.value);
    };
  
    const handleNumChange = (event) => {
      setNum(event.target.value);
    };

    const handleStart = (event) => {
        console.log(event.target.value)
        setStart(event.target.value);
      };
    
    const handleEnd = (event) => {
    setEnd(event.target.value);
    };

    const data = []
    // const data = [{x: '2016-12-25', y: 20}, {x: '2016-12-26', y: 10}]
    const handleSearch = async (event) =>{
        event.preventDefault()
        data = await searchData(start, end, group, num)
    }

  return (
    <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker 
            label="Start Time"
            viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
            }}
            sx={{ m: 2 }}
            // onChange={handleStart}
            />
        </DemoContainer>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker 
            label="End Time"
            viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
            }}
            sx={{ m: 2 }}
            // onChange={handleEnd}
            />
        </DemoContainer>
        </LocalizationProvider>
      {/* sensor selector */}
      <Box sx={{ m: 2}}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <FormControl sx={{width:1}}>
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
          </Grid>
          <Grid xs={6}>
            <FormControl sx={{width:1}}>
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
          </Grid>
        </Grid>
      </Box>
      {/* search button */}
      <FormControl sx={{ m: 2 }}>
        <Button 
        variant='outlined' 
        size='large' 
        onClick={handleSearch}
        >
        Search
        </Button>
      </FormControl>
      <StatisticSensorChart sensorData={data} />
    </div>
  );
}
