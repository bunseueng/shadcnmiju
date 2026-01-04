"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Mon", users: 4000, sessions: 2400 },
  { name: "Tue", users: 3000, sessions: 1398 },
  { name: "Wed", users: 2000, sessions: 9800 },
  { name: "Thu", users: 2780, sessions: 3908 },
  { name: "Fri", users: 1890, sessions: 4800 },
  { name: "Sat", users: 2390, sessions: 3800 },
  { name: "Sun", users: 3490, sessions: 4300 },
];

const AreaChartComponent = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Weekly User Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsAreaChart data={data}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
              </linearGradient>
            </defs>
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
              dataKey="users"
              stroke="hsl(var(--primary))"
              fillOpacity={1}
              fill="url(#colorUsers)"
            />
            <Area
              type="monotone"
              dataKey="sessions"
              stroke="hsl(var(--chart-2))"
              fillOpacity={1}
              fill="url(#colorSessions)"
            />
          </RechartsAreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default AreaChartComponent;
