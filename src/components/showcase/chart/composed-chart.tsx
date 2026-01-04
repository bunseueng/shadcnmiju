"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart as RechartsComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", revenue: 590, profit: 800, loss: 1400 },
  { name: "Feb", revenue: 868, profit: 967, loss: 1506 },
  { name: "Mar", revenue: 1397, profit: 1098, loss: 989 },
  { name: "Apr", revenue: 1480, profit: 1200, loss: 1228 },
  { name: "May", revenue: 1520, profit: 1108, loss: 1100 },
  { name: "Jun", revenue: 1400, profit: 680, loss: 1700 },
];

const ComposedChartComponent = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Financial Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsComposedChart data={data}>
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
            <Area
              type="monotone"
              dataKey="loss"
              fill="hsl(var(--chart-3))"
              stroke="hsl(var(--chart-3))"
              fillOpacity={0.3}
            />
            <Bar dataKey="revenue" barSize={20} fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-2))" }}
            />
          </RechartsComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ComposedChartComponent;
