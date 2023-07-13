//a sensor has groupID, name, status, show
//get initial state from backend
import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: '1', group: '1', online: true, visible: true},
    {id: '2', group: '2', online: true, visible: true},
    {id: '3', group: '3', online: true, visible: true},
    {id: '4', group: '1', online: true, visible: true},
    {id: '5', group: '2', online: true, visible: true},
    {id: '6', group: '3', online: true, visible: true},
    {id: '7', group: '1', online: true, visible: true},
    {id: '8', group: '2', online: true, visible: true},
    {id: '9', group: '3', online: true, visible: true},
]
export const sensorsSlice = createSlice({
    name: 'Sensors',
    initialState,
    reducers: {
        setVisibility: (state, action) =>{
            state.map(sensor => {
                if(sensor.id==action.payload){
                    sensor.visible=!sensor.visible
                }
            })
        }
    }
})

export const {setVisibility} = sensorsSlice.actions

export default sensorsSlice.reducer