import React from 'react'
import RealtimeSensorChart from '../components/RealtimeSensorChart'

export default function Home() {
  const groups = [1, 2, 3];
  return (
    <div>
      {groups.map(group => (
        <div>
        <h3>Group {group}</h3>
        <RealtimeSensorChart group={group} />
        </div>
      ))}
    </div>
  );
}
