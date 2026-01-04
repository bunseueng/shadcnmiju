"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SelectForm = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="grid gap-1.5">
        <Label htmlFor="country">Country</Label>
        <Select>
          <SelectTrigger id="country">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="au">Australia</SelectItem>
            <SelectItem value="de">Germany</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="language">Language</Label>
        <Select defaultValue="en">
          <SelectTrigger id="language">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="fr">French</SelectItem>
            <SelectItem value="de">German</SelectItem>
            <SelectItem value="jp">Japanese</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button className="w-full mt-2">Save Preferences</Button>
    </div>
  );
};

export default SelectForm;
