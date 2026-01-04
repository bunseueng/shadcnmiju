"use client";

import { Settings, Bell, Shield, CreditCard } from "lucide-react";
import { Switch } from "@/components/ui/switch";
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

export default function ItemMuted() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <ItemGroup>
          <Item variant="muted">
            <ItemMedia variant="icon">
              <Settings />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Account Settings</ItemTitle>
              <ItemDescription>
                Manage your account preferences and settings
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Switch defaultChecked />
            </ItemActions>
          </Item>

          <ItemSeparator />

          <Item variant="muted">
            <ItemMedia variant="icon">
              <Bell />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Push Notifications</ItemTitle>
              <ItemDescription>
                Receive notifications about important updates
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Switch defaultChecked />
            </ItemActions>
          </Item>

          <ItemSeparator />

          <Item variant="muted">
            <ItemMedia variant="icon">
              <Shield />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Two-Factor Authentication</ItemTitle>
              <ItemDescription>
                Add an extra layer of security to your account
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Switch />
            </ItemActions>
          </Item>

          <ItemSeparator />

          <Item variant="muted">
            <ItemMedia variant="icon">
              <CreditCard />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Billing & Payments</ItemTitle>
              <ItemDescription>
                Manage your subscription and payment methods
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Switch />
            </ItemActions>
          </Item>
        </ItemGroup>
      </div>
    </div>
  );
}
