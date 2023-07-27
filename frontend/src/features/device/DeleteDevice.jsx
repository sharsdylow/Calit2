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

import { useDispatch, useSelector } from 'react-redux'
import { register, deleteDevice, fetchAll } from './deviceSlice';
// import { useNavigate } from 'react-router-dom'

export default function DeleteDevice() {
    const [deviceData, setDeviceData] = useState({
        name: 'Sensor 1',
        location: '1',
    })
    const {name, location} = deviceData
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
        if(!(name&&location)){
            toast.error('Please fill all required fields!')
        }   
        
        const device = devices.find(device => device.name === name && device.location === location)
        // console.log(device)
        if (device){
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
        else{
            toast.error('Device does not exist!')
        }
       
    }
    
    const locations = new Set()
    devices.forEach(device => {
        locations.add(device.location)
    })
    const locationsMenu = Array.from(locations).map(location => {
        return <MenuItem value={location}>{location}</MenuItem>
    })

    const names = new Set()
    devices.forEach(device => {
        if(device.location === location){
            names.add(device.name)
        }
    })
    const namesMenu = Array.from(names).map(name => {
        return <MenuItem value={name}>{name}</MenuItem>
    })

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
                {locationsMenu}
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl required sx={{ width: 1 }}>
            <InputLabel id="name">Name</InputLabel>
            <Select
                value={name}
                label="name"
                name="name"
                onChange={handleDeviceData}
            >
                {namesMenu}
            </Select>
            </FormControl>
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
        {deviceDel}
        {deleteButton}
        <ToastContainer />
    </div>
  )
}
