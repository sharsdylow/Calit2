import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = [
{
    name: "Camara1", 
    location: '',
    url: "rtsp://admin:Calit2@128.195.151.231:554/h264Preview_01_main",
    port: "6789"
},
// {
//     name: "Camara2", 
//     location: '',
//     url: "rtsp://admin:Calit2@128.195.151.231:554/h264Preview_01_main",
//     port: "6789"
// }
]

export const camerasSlice = createSlice({
    name: 'cameras',
    initialState,
    reducers: {
        fetchStream: (state) => {
            state.forEach(async(camera)=>{
                try{
                    const res = await axios.get('http://localhost:8000/start-stream', {
                        params: {url: camera.url, port: camera.port, key: camera.name}
                    });
                    console.log(res.data.message);
                }catch(error){
                    console.error('Error fetching camara stream:', error)
                }
            })
          }
    }
})

export const {fetchStream} = camerasSlice.actions

export default camerasSlice.reducer