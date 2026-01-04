"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Legend, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    fill: "hsl(var(--chart-1))",
  },
  {
    name: "25-34",
    uv: 26.69,
    fill: "hsl(var(--chart-2))",
  },
  {
    name: "35-44",
    uv: 15.69,
    fill: "hsl(var(--chart-3))",
  },
  {
    name: "45-54",
    uv: 8.22,
    fill: "hsl(var(--chart-4))",
  },
  {
    name: "55+",
    uv: 8.63,
    fill: "hsl(var(--chart-5))",
  },
];

const RadialChartComponent = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Age Demographics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={10}
            data={data}
          >
            <RadialBar background dataKey="uv" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              align="right"
              wrapperStyle={{ fontSize: "14px" }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RadialChartComponent;
