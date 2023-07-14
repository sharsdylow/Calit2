import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming';
import { useSelector } from 'react-redux'

Chart.register(StreamingPlugin);

const RealtimeSensorChart = ({group}) => {
  const sensorsAll = useSelector(state => state.sensors)
  const borderColors = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(60, 179, 113)']
  const sensors = sensorsAll.filter((sensor) => sensor.group===group)

  const dataSets = sensors.map((sensor,index) =>{
    return {
      label: sensor.id,
      backgroundColor: borderColors.at(index),
      borderColor: borderColors.at(index),
      fill: false,
      data: [], //TODO get initial data from backend
      hidden: sensor.hidden
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
              duration: 10000,// data in the past 20000 ms will be displayed
              refresh: 1000,    // onRefresh callback will be called every 1000 ms
              delay: 1000,      // delay of 1000 ms, so upcoming values are known before plotting a line
              pause: false,     // chart is not paused
              frameRate: 30,    // data points are drawn 30 times every second
              onRefresh: chart => {
                chart.data.datasets.forEach((dataset) => {
                  // var data = getLatestData(dataset.lable);
                  // TODO query latest data and get the array of {x: timestamp, y: value} objects from backend
                  sensors.forEach(sensor=>{
                    if(dataset.id==sensor.id){
                      dataset.hidden = sensor.hidden
                    }
                  })
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