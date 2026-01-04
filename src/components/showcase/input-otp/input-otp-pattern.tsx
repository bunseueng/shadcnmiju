"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

const InputOTPPattern = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Digits only (default)</p>
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Alphanumeric</p>
        <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
};

export default InputOTPPattern;
