import React from 'react'
import RealtimeSensorChart from '../components/RealtimeSensorChart';
import DataSearch from '../components/DataSearch';
import SensorSwitch from '../components/SensorSwitch';

function Sensor() {
    // TODO data source 
    const groups = [{id: 1, sensors:[1, 2, 3]}, {id:2, sensors:[1, 2, 3]}, {id:3, sensors:[1, 2, 3]}];
    return (
      <div>
        {groups.map(group => (
          <div>
          <h3>Group {group.id}</h3>
          <div style={{display: 'flex'}}>
          <RealtimeSensorChart group={group} />
          <SensorSwitch group={group} />
          </div>
          </div>
        ))}
        <h3>Data Logs</h3>
        <DataSearch />
      </div>
    );
}

export default Sensor