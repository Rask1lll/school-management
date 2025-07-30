"use client";
import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 2000,
    fill: "#ffff",
  },
  {
    name: "Boys",
    count: 1000,
    fill: "#A5FAF2",
  },
  {
    name: "Girl",
    count: 1200,
    fill: "#F8FAA5",
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <div>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
