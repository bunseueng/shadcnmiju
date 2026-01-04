"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LabelWithDescription() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="johndoe" />
          <p className="text-sm text-muted-foreground">
            This is your public display name.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Input id="bio" placeholder="Tell us about yourself" />
          <p className="text-sm text-muted-foreground">
            You can @mention other users and organizations.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="url">URL</Label>
          <Input id="url" type="url" placeholder="https://example.com" />
          <p className="text-sm text-muted-foreground">
            Add links to your website, blog, or social media profiles.
          </p>
        </div>
      </div>
    </div>
  );
}
