import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'REPEAT VISITS',
    value1: 120
  },
  {
    name: 'REPEAT PURCHASES',
    value2: 80
  },
  {
    name: 'CASHBACK GIVEN',
    value3: 150
  },
  {
    name: 'CASHBACK REDEEMED',
    value4: 52
  }
];

export default class BarChartWrapper extends PureComponent {
  render() {
    return (
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        > 
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="value1" barSize={42} stackId="a" fill="#2BC5B4" />
          <Bar dataKey="value2" barSize={42} stackId="a" fill="#FECD54" />
          <Bar dataKey="value3" barSize={42} stackId="a" fill="#F7617D" />
          <Bar dataKey="value4" barSize={42} stackId="a" fill="#F79256" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
