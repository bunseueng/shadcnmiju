"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function InputGroupWithSelect() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <div className="flex gap-2">
            <Select defaultValue="+1">
              <SelectTrigger className="w-[110px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+1">+1 (US)</SelectItem>
                <SelectItem value="+44">+44 (UK)</SelectItem>
                <SelectItem value="+91">+91 (IN)</SelectItem>
                <SelectItem value="+86">+86 (CN)</SelectItem>
              </SelectContent>
            </Select>
            <Input id="phone" type="tel" placeholder="123-456-7890" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Duration</Label>
          <div className="flex gap-2">
            <Input
              id="duration"
              type="number"
              placeholder="0"
              defaultValue="30"
            />
            <Select defaultValue="minutes">
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seconds">Seconds</SelectItem>
                <SelectItem value="minutes">Minutes</SelectItem>
                <SelectItem value="hours">Hours</SelectItem>
                <SelectItem value="days">Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="currency-amount">Amount</Label>
          <div className="flex gap-2">
            <Select defaultValue="usd">
              <SelectTrigger className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
                <SelectItem value="gbp">GBP</SelectItem>
                <SelectItem value="jpy">JPY</SelectItem>
              </SelectContent>
            </Select>
            <Input
              id="currency-amount"
              type="number"
              placeholder="0.00"
              defaultValue="100.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
