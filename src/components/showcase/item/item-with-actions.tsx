"use client";

import { FileText, Image, Video } from "lucide-react";
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

export default function ItemWithActions() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <ItemGroup>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <FileText />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Project Proposal.pdf</ItemTitle>
              <ItemDescription>2.4 MB • Updated 2 hours ago</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                View
              </Button>
              <Button variant="outline" size="sm">
                Download
              </Button>
            </ItemActions>
          </Item>

          <ItemSeparator />

          <Item variant="outline">
            <ItemMedia variant="icon">
              <Image />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Screenshot_2024.png</ItemTitle>
              <ItemDescription>1.8 MB • Updated yesterday</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                View
              </Button>
              <Button variant="outline" size="sm">
                Download
              </Button>
            </ItemActions>
          </Item>

          <ItemSeparator />

          <Item variant="outline">
            <ItemMedia variant="icon">
              <Video />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Product Demo.mp4</ItemTitle>
              <ItemDescription>15.2 MB • Updated last week</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                View
              </Button>
              <Button variant="outline" size="sm">
                Download
              </Button>
            </ItemActions>
          </Item>
        </ItemGroup>
      </div>
    </div>
  );
}
