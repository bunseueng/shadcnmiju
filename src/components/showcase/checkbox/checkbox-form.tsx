"use client";

import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";

import { useState } from "react";

const CheckboxForm = () => {
  const [checked, setChecked] = useState({ agree: false, newsletter: false });

  return (
    <form className="space-y-4">
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="agree"
            checked={checked.agree}
            onCheckedChange={(value) =>
              setChecked((prev) => ({ ...prev, agree: value as boolean }))
            }
          />
          <label htmlFor="agree" className="text-sm cursor-pointer">
            I agree to the terms
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="newsletter2"
            checked={checked.newsletter}
            onCheckedChange={(value) =>
              setChecked((prev) => ({ ...prev, newsletter: value as boolean }))
            }
          />
          <label htmlFor="newsletter2" className="text-sm cursor-pointer">
            Subscribe to newsletter
          </label>
        </div>
      </div>
      <Button disabled={!checked.agree} className="w-full">
        Submit
      </Button>
    </form>
  );
};

export default CheckboxForm;
