import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming';

Chart.register(StreamingPlugin);

const RealtimeSensorChart = ({sensors}) => {
  const borderColors = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(60, 179, 113)']
  const dataSets = sensors.map((sensor,index) =>{
    return {
      label: sensor,
      backgroundColor: borderColors.at(index),
      borderColor: borderColors.at(index),
      fill: false,
      data: []
    }
  })
  return (
    <Line
      data={{
        datasets: dataSets
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
                  // var data = getLatestData(dataset.lable);
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