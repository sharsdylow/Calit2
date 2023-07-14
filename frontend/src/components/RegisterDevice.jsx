import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import Box from '@mui/material/Box'
import Grid from '@mui/system/Unstable_Grid';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterDevice() {
    const [deviceData, setDeviceData] = useState({
        category: 'sensor',
        name: '',
        type: '',
        location:'',
        ipAddress:'',
        port:''
    })
    const {category, name, type, location, ipAddress, port} = deviceData
    
    const handleDeviceData = (event) => {
        setDeviceData((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    };

    const register = (event)=>{
        event.preventDefault()

        if(category=='sensor'){
            if(!(name&&type&&location&&ipAddress&&port)){
                toast.error('Please fill all required feilds!')
            }
            const sensorData = {
                name,
                type,
                location,
                ipAddress,
                port
            }
        }
    }


    const categorySelect = (
        <Box sx={{m:2}}>
            <FormControl required sx={{ width:1 }}>
            <InputLabel id="category-select">Category</InputLabel>
            <Select
                id="category-select"
                value={category}
                label="Category"
                name="category"
                onChange={handleDeviceData}
            >
                <MenuItem value={'sensor'}>Sensor</MenuItem>
                <MenuItem value={'camera'}>Camera</MenuItem>
            </Select>
            <FormHelperText>Choose the categorty of device</FormHelperText>
            </FormControl>
        </Box>
    )

    const sesnsorReg = (
        <Box sx={{p:2}}>
        <Grid container spacing={4}>
        <Grid item xs={6}>
            <TextField
            required
            name="name"
            label="Name"
            value={name}
            sx={{width: 1}}
            onChange={handleDeviceData}
            />
        </Grid>
        <Grid item xs={6}>
            <FormControl required sx={{ width: 1 }}>
            <InputLabel id="sensor-type">Type</InputLabel>
            <Select
                value={type}
                label="Type"
                name="type"
                onChange={handleDeviceData}
            >
                <MenuItem value={'Temperature'}>Temperature</MenuItem>
                <MenuItem value={'Motion'}>Motion</MenuItem>
                <MenuItem value={'Light'}>Light</MenuItem>
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl required sx={{ width: 1 }}>
            <InputLabel id="location">Location</InputLabel>
            <Select
                value={location}
                label="Location"
                name="location"
                onChange={handleDeviceData}
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <TextField
            required
            id="ipAddress"
            name="ipAddress"
            label="IP Address"
            value={ipAddress}
            sx={{width: 1}}
            onChange={handleDeviceData}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
            required
            id="port"
            name="port"
            label="Port"
            value={port}
            sx={{width: 1}}
            onChange={handleDeviceData}
            />
        </Grid>
        </Grid>
    </Box>)

    const cameraReg = (
        <Box sx={{p:2}}>
        <Grid container spacing={2}>
        <Grid item xs={6}>
            <FormControl sx={{ width: 1 }}>
            <InputLabel id="demo-simple-select-helper-label">Group</InputLabel>
            <Select
                // value={group}
                label="Group"
                // onChange={handleGroupChange}
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
            </Select>
            </FormControl>
        </Grid>
        </Grid>
    </Box>)

    const registerButton = (
        <FormControl sx={{ m: 2 }}>
            <Button 
            variant='outlined' 
            size='large'
            onClick={register} 
            >
            Register
            </Button>
        </FormControl>
    )

  return (
    <div>
        {categorySelect}
        {category==='camera'&&cameraReg}
        {category==='sensor'&&sesnsorReg}
        {registerButton}
        <ToastContainer />
    </div>
  )
}
