"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Q1", desktop: 4000, mobile: 2400, tablet: 2400 },
  { name: "Q2", desktop: 3000, mobile: 1398, tablet: 2210 },
  { name: "Q3", desktop: 2000, mobile: 9800, tablet: 2290 },
  { name: "Q4", desktop: 2780, mobile: 3908, tablet: 2000 },
];

const StackedBarChartComponent = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Quarterly Device Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="name" className="text-xs sm:text-sm" />
            <YAxis className="text-xs sm:text-sm" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "14px" }} />
            <Bar dataKey="desktop" stackId="a" fill="hsl(var(--chart-1))" radius={[0, 0, 0, 0]} />
            <Bar dataKey="mobile" stackId="a" fill="hsl(var(--chart-2))" radius={[0, 0, 0, 0]} />
            <Bar dataKey="tablet" stackId="a" fill="hsl(var(--chart-3))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default StackedBarChartComponent;
