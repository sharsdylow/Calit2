import React from 'react'
import {Line} from 'react-chartjs-2';

export default function StatisticSensorChart({sensorData}) {
  return (
    <Line
        data={{
        labels: sensorData.map(item => item.x),
        datasets: [{
            label: 'Sensor',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            cubicInterpolationMode: 'monotone',
            fill: false,
            data: sensorData
        }]
        }}
        options={{
        responsive: true, 
        scales: {
            x: {
              type: 'time',
              time: {
                unit:'day'
              },
            },
            y: {
              beginAtZero: true,
              suggestedMax: 100,
            },
          },
        }}
    />
  )
}
