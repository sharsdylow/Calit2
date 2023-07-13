import React from 'react'
import { useSelector } from 'react-redux'
import SensorGroup from '../../components/sensors/SensorGroup'

export default function SensorsGroup() {
  const sensors = useSelector(state => state.sensors)
  console.log(sensors)
  const groupsList = Object.values(
    sensors.reduce((acc, sensor)=>{
        const groupID = sensor.group
        if (!acc[groupID]){
            acc[groupID] = {id: groupID, sensors:[]}
        }
        acc[groupID].sensors.push(sensor)
        return acc
    }, {})
  )
  console.log(groupsList)
  return (
    <div>
        {groupsList.map(group =>(<h5>{group.id}</h5>))}
    </div>
  )
}
