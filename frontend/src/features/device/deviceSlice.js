import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import deviceService from './deviceService';

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

export const fetchAll = createAsyncThunk(
    'device/fetchAll',
    async (_, thunkAPI) => {
        try{
            return await deviceService.fetchAll()
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
  )

export const deleteDevice = createAsyncThunk(
    'device/delete',
    async (device_id, thunkAPI) => {
        try{
            return await deviceService.deleteDevice(device_id)
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
  )

const initialState = {
    devices: [],
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
          state.devices.push = action.payload
          state.isLoading = false
        })
        .addCase(register.rejected, (state) => {
          state.isLoading = false
        })
        .addCase(fetchAll.fulfilled, (state, action)=>{
          state.devices = action.payload
          state.isLoading = false
        })
        .addCase(deleteDevice.fulfilled, (state) => {
          state.isLoading = false
        })
    }
})

export default deviceSlice.reducer