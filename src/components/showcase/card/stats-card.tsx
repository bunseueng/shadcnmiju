import { Card, CardTitle } from "@/components/ui/card";

import {
  Activity,
  ArrowDown,
  ArrowUp,
  ChartNoAxesCombined,
  ShoppingCart,
  User,
} from "lucide-react";

const StatsCard = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Card className="w-87.5 px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center">
            <CardTitle>New Users</CardTitle>
            <span className="text-xl md:text-2xl font-semibold text-start tracking-tight">
              6,321
            </span>
          </div>
          <div className="bg-chart-2 rounded-full p-4">
            <User className="size-4" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center text-green-400">
            <ArrowUp /> 18.06%
          </div>
          <span className="text-muted-foreground">Since last month</span>
        </div>
      </Card>

      <Card className="w-87.5 px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center">
            <CardTitle>Active Users</CardTitle>
            <span className="text-xl md:text-2xl font-semibold text-start tracking-tight">
              1,100
            </span>
          </div>
          <div className="bg-chart-2 rounded-full p-4">
            <Activity className="size-4" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center text-green-400">
            <ArrowDown /> 1.06%
          </div>
          <span className="text-muted-foreground">Since yesturday</span>
        </div>
      </Card>
      <Card className="w-87.5 px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center">
            <CardTitle>Total Orders</CardTitle>
            <span className="text-xl md:text-2xl font-semibold text-start tracking-tight">
              823,442
            </span>
          </div>
          <div className="bg-chart-2 rounded-full p-4">
            <ShoppingCart className="size-4" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center text-green-400">
            <ArrowUp /> 66.06%
          </div>
          <span className="text-muted-foreground">Since last month</span>
        </div>
      </Card>
      <Card className="w-87.5 px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center">
            <CardTitle>Revenue</CardTitle>
            <span className="text-xl md:text-2xl font-semibold text-start tracking-tight">
              1,321
            </span>
          </div>
          <div className="bg-chart-2 rounded-full p-4">
            <ChartNoAxesCombined className="size-4" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center text-green-400">
            <ArrowDown /> 5.06%
          </div>
          <span className="text-muted-foreground">Since last month</span>
        </div>
      </Card>
    </div>
  );
};

export default StatsCard;
