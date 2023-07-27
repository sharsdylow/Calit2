//a sensor has groupID, name, status, show
//get initial state from backend
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import deviceService from '../device/deviceService'

const initialState = {
    sensors: []
}

export const fetchSensors = createAsyncThunk(
    'sensors/fetchSensors',
    async (_, thunkAPI) => {
        try{
            const filter = {
                field_name: 'category',
                field_value: 'sensor'
            }
            return await deviceService.fetchByFilter(filter)
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
export const sensorsSlice = createSlice({
    name: 'sensors',
    initialState,
    reducers: {
        setVisibility: (state, action) =>{
            state.sensors.forEach(sensor => {
                if(sensor.device_id==action.payload){
                    sensor.hidden=!sensor.hidden
                }
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSensors.fulfilled, (state, action) =>{
            state.sensors = action.payload
            // console.log(state)
        })
    }
})

export const {setVisibility} = sensorsSlice.actions

export default sensorsSlice.reducer