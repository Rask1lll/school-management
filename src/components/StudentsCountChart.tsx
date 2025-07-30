"use client";
import Image from "next/image";
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
    name: "Girls",
    count: 1200,
    fill: "#F8FAA5",
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <div className="w-full h-[450px] bg-white  rounded-2xl relative">
        <ResponsiveContainer width="100%" height="75%" className="">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="100%"
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="maleFemale"
          width={50}
          height={50}
          className="absolute top-37/100 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="flex w-full justify-center">
          <div className="flex gap-4">
            <div>
              <div className="rounded-full h-5 w-5 bg-[#A5FAF2]"></div>
              <div>52,k</div>
              <div>Boys(52%)</div>
            </div>

            <div>
              <div className="rounded-full h-5 w-5 bg-[#F8FAA5]"></div>
              <div className="">52,k</div>
              <div>Girls(52%)</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
