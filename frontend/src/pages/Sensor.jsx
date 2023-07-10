import React from 'react'
import RealtimeSensorChart from '../components/RealtimeSensorChart';
import DataSearch from '../components/DataSearch';

function Sensor() {
    // TODO data source 
    const groups = [1, 2, 3];
    return (
      <div>
        {groups.map(group => (
          <div>
          <h3>Group {group}</h3>
          <RealtimeSensorChart group={group} />
          </div>
        ))}
        <h3>Data Logs</h3>
        <DataSearch />
      </div>
    );
}

export default Sensor