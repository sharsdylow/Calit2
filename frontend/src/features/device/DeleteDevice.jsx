import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import Box from '@mui/material/Box'
import Grid from '@mui/system/Unstable_Grid';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

import { useDispatch, useSelector } from 'react-redux'
import { register, deleteDevice, fetchAll } from './deviceSlice';
// import { useNavigate } from 'react-router-dom'

export default function DeleteDevice() {
    const [deviceData, setDeviceData] = useState({
        category: 'sensor',
        name: 'Sensor 1',
        location: '1',
    })
    const {category, name, location} = deviceData
    const {devices} = useSelector((state => state.device))
    
    const handleDeviceData = (event) => {
        setDeviceData((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    };

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAll()).unwrap().catch(toast.error)
    }, [dispatch])

    console.log(devices)

    const handleClick = (event)=>{
        // event.preventDefault()
        if(!(name&&location&&category)){
            toast.error('Please fill all required fields!')
        }   
        
        const device = devices.find(device => device.name === name && device.location === location)
        // console.log(device)
        dispatch(deleteDevice(device.device_id))
                .unwrap()
                .then(() => {
                // NOTE: by unwrapping the AsyncThunkAction we can navigate the device after
                // getting a good response from our API or catch the AsyncThunkAction
                // rejection to show an error message
                toast.success(`Deleted device - ${name}`)
                // navigate('/')
                })
                .catch(toast.error)
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

    const deviceDel = (
        <Box sx={{p:2}}>
        <Grid container spacing={4}>
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
            name="name"
            label="Name"
            value={name}
            sx={{width: 1}}
            onChange={handleDeviceData}
            />
        </Grid>
        </Grid>
    </Box>)

    const deleteButton = (
        <FormControl sx={{ m: 2 }}>
            <Button 
            variant='outlined' 
            size='large'
            onClick={handleClick} 
            >
            Delete
            </Button>
        </FormControl>
    )

  return (
    <div>
        {categorySelect}
        {deviceDel}
        {deleteButton}
        <ToastContainer />
    </div>
  )
}
