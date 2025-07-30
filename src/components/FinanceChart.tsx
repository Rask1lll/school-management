"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 14000,
    expense: 22400,
  },
  {
    name: "Feb",
    income: 33000,
    expense: 11398,
  },
  {
    name: "Mar",
    income: 22000,
    expense: 39800,
  },
  {
    name: "Apr",
    income: 12780,
    expense: 23908,
  },
  {
    name: "May",
    income: 12890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 23900,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 34390,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 390,
    expense: 4300,
  },
  {
    name: "Sep",
    income: 13490,
    expense: 24300,
  },
  {
    name: "Oct",
    income: 13490,
    expense: 24300,
  },
  {
    name: "Nov",
    income: 13490,
    expense: 54300,
  },
  {
    name: "Dec",
    income: 113490,
    expense: 114300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
