"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { subject: "Design", A: 120, B: 110, fullMark: 150 },
  { subject: "Development", A: 98, B: 130, fullMark: 150 },
  { subject: "Testing", A: 86, B: 130, fullMark: 150 },
  { subject: "Marketing", A: 99, B: 100, fullMark: 150 },
  { subject: "Sales", A: 85, B: 90, fullMark: 150 },
  { subject: "Support", A: 65, B: 85, fullMark: 150 },
];

const RadarChartComponent = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Team Performance Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid className="stroke-muted" />
            <PolarAngleAxis dataKey="subject" className="text-xs sm:text-sm" />
            <PolarRadiusAxis className="text-xs sm:text-sm" />
            <Radar
              name="Team A"
              dataKey="A"
              stroke="hsl(var(--primary))"
              fill="hsl(var(--primary))"
              fillOpacity={0.6}
            />
            <Radar
              name="Team B"
              dataKey="B"
              stroke="hsl(var(--chart-2))"
              fill="hsl(var(--chart-2))"
              fillOpacity={0.6}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "14px" }} />
          </RechartsRadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RadarChartComponent;
