import {configureStore} from '@reduxjs/toolkit'
import sensorsReducer from './features/sensors/sensorsSlice'
import deviceReducer from './features/device/deviceSlice'

export default configureStore({
    reducer:{
        sensors: sensorsReducer,
        device: deviceReducer
    }
})