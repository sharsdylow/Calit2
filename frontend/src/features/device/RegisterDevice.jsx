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
import { useDispatch, useSelector } from 'react-redux'
import { register } from './deviceSlice';
// import { useNavigate } from 'react-router-dom'

export default function RegisterDevice() {
    const [deviceData, setDeviceData] = useState({
        category: 'sensor',
        name: 'Sensor 1',
        type: 'Light',
        location: '1',
        ipAddress: '192.168.1.1',
        port: '3001',
        url: ''
    })
    const {category, name, type, location, ipAddress, port, url} = deviceData
    
    const handleDeviceData = (event) => {
        setDeviceData((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    };

    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const handleClick = (event)=>{
        // event.preventDefault()
        var data = {}
        if(category=='sensor'){
            if(!(name&&type&&location&&ipAddress&&port)){
                toast.error('Please fill all required fields!')
            }   
            else{
                data = {
                    name,
                    type,
                    location,
                    ipAddress,
                    port
                }
            }
            
        }
        if(category=='camera'){
            if(!(name&&location&&url&&port)){
                toast.error('Please fill all required fields!')
            }   
            else{
                data = {
                    name,
                    location,
                    url,
                    port
                }
            }
        }
        dispatch(register(data))
                .unwrap()
                .then(() => {
                // NOTE: by unwrapping the AsyncThunkAction we can navigate the device after
                // getting a good response from our API or catch the AsyncThunkAction
                // rejection to show an error message
                toast.success(`Registered new device - ${data.name}`)
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
            id="url"
            name="url"
            label="URL"
            value={url}
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

    const registerButton = (
        <FormControl sx={{ m: 2 }}>
            <Button 
            variant='outlined' 
            size='large'
            onClick={handleClick} 
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
