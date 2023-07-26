import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import deviceService from './deviceService';
// Get device from localstorage
const device = JSON.parse(localStorage.getItem('device'))

export const register = createAsyncThunk(
    'device/register',
    async (device, thunkAPI) => {
      try {
        return await deviceService.register(device)
      } catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  )

const initialState = {
    device: device ? device : null,
    isLoading: false,
  }

export const deviceSlice = createSlice({
    name: 'device',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending, (state) => {
            state.isLoading = true
          })
          .addCase(register.fulfilled, (state, action) => {
            state.device = action.payload
            state.isLoading = false
          })
          .addCase(register.rejected, (state) => {
            state.isLoading = false
          })
    }
})

export default deviceSlice.reducer