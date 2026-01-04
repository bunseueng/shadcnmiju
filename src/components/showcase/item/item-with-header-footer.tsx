"use client";

import { Clock, Star, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";

export default function ItemWithHeaderFooter() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <ItemGroup>
          <Item variant="outline">
            <ItemHeader>
              <div className="flex items-center gap-3">
                <ItemMedia variant="icon">
                  <TrendingUp />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Q4 Sales Report</ItemTitle>
                  <ItemDescription>
                    Quarterly performance analysis and insights
                  </ItemDescription>
                </ItemContent>
              </div>
              <Badge>New</Badge>
            </ItemHeader>
            <ItemFooter>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>Updated 2 hours ago</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                <span>4.8 rating</span>
              </div>
            </ItemFooter>
          </Item>

          <ItemSeparator />

          <Item variant="outline">
            <ItemHeader>
              <div className="flex items-center gap-3">
                <ItemMedia variant="icon">
                  <TrendingUp />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Marketing Campaign Results</ItemTitle>
                  <ItemDescription>
                    ROI analysis and campaign performance metrics
                  </ItemDescription>
                </ItemContent>
              </div>
              <Badge variant="secondary">Draft</Badge>
            </ItemHeader>
            <ItemFooter>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>Updated yesterday</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                <span>4.5 rating</span>
              </div>
            </ItemFooter>
          </Item>

          <ItemSeparator />

          <Item variant="outline">
            <ItemHeader>
              <div className="flex items-center gap-3">
                <ItemMedia variant="icon">
                  <TrendingUp />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Annual Revenue Forecast</ItemTitle>
                  <ItemDescription>
                    Projected revenue and growth opportunities
                  </ItemDescription>
                </ItemContent>
              </div>
              <Badge variant="outline">Archived</Badge>
            </ItemHeader>
            <ItemFooter>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>Updated last week</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                <span>4.9 rating</span>
              </div>
            </ItemFooter>
          </Item>
        </ItemGroup>
      </div>
    </div>
  );
}
