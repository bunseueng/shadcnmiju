"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

const InputOTPForm = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = () => {
    if (value.length !== 6) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium text-foreground">Verification Code</h3>
        <p className="text-sm text-muted-foreground">
          Enter the 6-digit code sent to your email
        </p>
      </div>
      <InputOTP maxLength={6} value={value} onChange={setValue} disabled={isSuccess}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button
        className="w-full max-w-[200px]"
        onClick={handleSubmit}
        disabled={value.length !== 6 || isLoading || isSuccess}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Verifying
          </>
        ) : isSuccess ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Verified
          </>
        ) : (
          "Verify"
        )}
      </Button>
      {!isSuccess && (
        <button className="text-sm text-muted-foreground hover:text-foreground">
          Didn&apos;t receive code? Resend
        </button>
      )}
    </div>
  );
};

export default InputOTPForm;
