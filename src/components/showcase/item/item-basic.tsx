"use client";

import { Mail, Calendar, User } from "lucide-react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";

export default function ItemBasic() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <ItemGroup>
          <Item>
            <ItemMedia variant="icon">
              <Mail />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>New Message</ItemTitle>
              <ItemDescription>
                You have a new message from John Doe
              </ItemDescription>
            </ItemContent>
          </Item>

          <ItemSeparator />

          <Item>
            <ItemMedia variant="icon">
              <Calendar />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Meeting Reminder</ItemTitle>
              <ItemDescription>
                Team standup starts in 15 minutes
              </ItemDescription>
            </ItemContent>
          </Item>

          <ItemSeparator />

          <Item>
            <ItemMedia variant="icon">
              <User />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Profile Update</ItemTitle>
              <ItemDescription>
                Your profile has been successfully updated
              </ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </div>
    </div>
  );
}
