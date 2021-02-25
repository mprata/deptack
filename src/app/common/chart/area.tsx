import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
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
          height={this.props.height}
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
            dataKey="uv"
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
