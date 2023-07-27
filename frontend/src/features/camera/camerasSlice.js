import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import deviceService from '../device/deviceService'
import axios from 'axios'

const initialState = {
    cameras: []
}

export const fetchCameras = createAsyncThunk(
    'cameras/fetchCameras',
    async (_, thunkAPI) => {
        try{
            const filter = {
                field_name: 'category',
                field_value: 'camera'
            }
            return await deviceService.fetchByFilter(filter)
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const camerasSlice = createSlice({
    name: 'cameras',
    initialState,
    reducers: {
        fetchStream: (state) => {
            state.cameras.forEach(async(camera)=>{
                try{
                    const res = await axios.get('http://localhost:8000/start-stream', {
                        params: {url: camera.ip_address, port: camera.port, key: camera.name}
                    });
                    console.log(res.data.message);
                }catch(error){
                    console.error('Error fetching camara stream:', error)
                }
            })
          }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCameras.fulfilled, (state, action) =>{
                state.cameras = action.payload
                // console.log(state.cameras)
            })
    }
})

export const {fetchStream} = camerasSlice.actions

export default camerasSlice.reducer