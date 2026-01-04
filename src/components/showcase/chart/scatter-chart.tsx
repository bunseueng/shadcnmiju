"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart as RechartsScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

const data01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const data02 = [
  { x: 300, y: 300, z: 200 },
  { x: 400, y: 500, z: 260 },
  { x: 200, y: 700, z: 400 },
  { x: 340, y: 350, z: 280 },
  { x: 560, y: 500, z: 500 },
  { x: 230, y: 780, z: 200 },
];

const ScatterChartComponent = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Correlation Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid className="stroke-muted" />
            <XAxis type="number" dataKey="x" name="stature" className="text-xs sm:text-sm" />
            <YAxis type="number" dataKey="y" name="weight" className="text-xs sm:text-sm" />
            <ZAxis type="number" dataKey="z" range={[60, 400]} name="score" />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "14px" }} />
            <Scatter name="Group A" data={data01} fill="hsl(var(--primary))" />
            <Scatter name="Group B" data={data02} fill="hsl(var(--chart-2))" />
          </RechartsScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ScatterChartComponent;
