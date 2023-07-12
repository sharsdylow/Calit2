import React from 'react'
import DataSearch from '../components/sensors/SensorDataSearch';
import SensorGroup from '../components/sensors/SensorGroup';

function Sensor() {
    // TODO data source 
    const groups = [{id: 1, sensors:[1, 2, 3]}, {id:2, sensors:[1, 2, 3]}, {id:3, sensors:[1, 2, 3]}];
    return (
      <div>
        {groups.map(group => (
          <SensorGroup group={group} />
        ))}
        <h3>Data Logs</h3>
        <DataSearch />
      </div>
    );
}

export default Sensor