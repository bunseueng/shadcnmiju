"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

const InputOTPControlled = () => {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-4">
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm text-muted-foreground">
        {value === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: <span className="font-medium text-foreground">{value}</span></>
        )}
      </div>
    </div>
  );
};

export default InputOTPControlled;
