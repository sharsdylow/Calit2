import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming';

Chart.register(StreamingPlugin);

const RealtimeSensorChart = ({group}) => {
  return (
    <Line
      data={{
        datasets: [{
          label: 'Sensor 1',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgb(255, 99, 132)',
          borderDash: [8, 4],
          fill: false,
          data: []
        }, {
          label: 'Sensor 2',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgb(54, 162, 235)',
          cubicInterpolationMode: 'monotone',
          fill: false,
          data: []
        }]
      }}
      options={{
        scales: {
          x: {
            type: 'realtime',
            realtime: {
              delay: 1000,
              refresh: 1000,
              onRefresh: chart => {
                chart.data.datasets.forEach(dataset => {
                  // var data = getLatestData();
                  // TODO query latest data and get the array of {x: timestamp, y: value} objects from backend
                  dataset.data.push({
                    x: Date.now(),
                    y: Math.random()
                  });
                });
              }
            }
          }
        }
      }}
    />
  );
}

export default RealtimeSensorChart;