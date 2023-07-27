import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import deviceService from '../device/deviceService'
import cameraService from './cameraService'

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

export const fetchStream = createAsyncThunk(
    'cameras/fetchStream',
    async (camera, thunkAPI) => {
        try{
            return await cameraService.startStream(camera)
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const camerasSlice = createSlice({
    name: 'cameras',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCameras.fulfilled, (state, action) =>{
                state.cameras = action.payload
                // console.log(state.cameras)
            })
            
    }
})

export default camerasSlice.reducer