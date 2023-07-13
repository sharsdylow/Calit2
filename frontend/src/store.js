import {configureStore} from '@reduxjs/toolkit'
import sensorsReducer from './features/sensors/sensorsSlice'

export default configureStore({
    reducer:{
        sensors: sensorsReducer
    }
})