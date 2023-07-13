import React from 'react'
import DataSearch from '../features/sensors/SensorDataSearch';
import SensorsGroup from '../features/sensors/SensorsGroup';

function Sensor() {
    // TODO data source 
    return (
      <div>
        <SensorsGroup />
        <h3>Data Logs</h3>
        <DataSearch />
      </div>
    );
}

export default Sensor