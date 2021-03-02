import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    name: 'Page A',
    value: 5,
  },
  {
    name: 'Page B',
    value: 3,
  },
  {
    name: 'Page C',
    value: 10,
  },
  {
    name: 'Page D',
    value: 5,
  },
  {
    name: 'Page E',
    value: 15,
  },
  {
    name: 'Page F',
    value: 10,
  },
  {
    name: 'Page G',
    value: 20,
  },
  {
    name: 'Page G',
    value: 10,
  },
  {
    name: 'Page G',
    value: 30,
  },
  {
    name: 'Page G',
    value: 10,
  },
  {
    name: 'Page G',
    value: 12,
  },
  {
    name: 'Page G',
    value: 5,
  }
];

export interface areaProps {
  type: string;
  height: number;
  width: number;
  stroke: string;
  fill: string;
  strokDash: string;
  inverted: boolean;
}

export default class AreaChartWrapper extends React.Component<areaProps> {

  render() {
    const fillUrl = `url(#${this.props.type})`;
    return (
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <defs>
            {!this.props.inverted && (
              <linearGradient id={this.props.type} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={this.props.fill} stopOpacity={0.3} />
                <stop offset="95%" stopColor={this.props.fill} stopOpacity={0} />
              </linearGradient>
            )}
            {this.props.inverted && (
              <linearGradient id={this.props.type} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={this.props.fill} stopOpacity={0} />
                <stop offset="95%" stopColor={this.props.fill} stopOpacity={0.3} />
              </linearGradient>
            )}
          </defs>
          <Tooltip />
          {this.props.inverted && <YAxis reversed hide />}
          <Area
            type="monotone"
            dataKey="value"
            stroke={this.props.stroke}
            strokeDasharray={this.props.strokDash}
            fillOpacity={1}
            fill={fillUrl}
          >
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
