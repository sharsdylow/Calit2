//a sensor has groupID, name, status, show
//get initial state from backend
import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: '1', group: '1', online: true, hidden: false},
    {id: '2', group: '2', online: true, hidden: false},
    {id: '3', group: '3', online: true, hidden: false},
    {id: '4', group: '1', online: true, hidden: false},
    {id: '5', group: '2', online: true, hidden: false},
    {id: '6', group: '3', online: true, hidden: false},
    {id: '7', group: '1', online: true, hidden: false},
    {id: '8', group: '2', online: true, hidden: false},
    {id: '9', group: '3', online: true, hidden: false},
]
export const sensorsSlice = createSlice({
    name: 'sensors',
    initialState,
    reducers: {
        setVisibility: (state, action) =>{
            state.forEach(sensor => {
                if(sensor.id==action.payload){
                    sensor.hidden=!sensor.hidden
                }
            })
        }
    }
})

export const {setVisibility} = sensorsSlice.actions

export default sensorsSlice.reducer