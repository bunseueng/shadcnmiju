"use client";

import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";

export default function ItemWithImage() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <ItemGroup>
          <Item>
            <ItemMedia variant="image">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Sarah Johnson</ItemTitle>
              <ItemDescription>Product Designer • San Francisco, CA</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Follow
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </ItemActions>
          </Item>

          <ItemSeparator />

          <Item>
            <ItemMedia variant="image">
              <div className="bg-gradient-to-br from-green-500 to-teal-500" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Michael Chen</ItemTitle>
              <ItemDescription>Software Engineer • New York, NY</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Follow
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </ItemActions>
          </Item>

          <ItemSeparator />

          <Item>
            <ItemMedia variant="image">
              <div className="bg-gradient-to-br from-orange-500 to-red-500" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Emma Williams</ItemTitle>
              <ItemDescription>Marketing Manager • Austin, TX</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Follow
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </ItemActions>
          </Item>
        </ItemGroup>
      </div>
    </div>
  );
}
