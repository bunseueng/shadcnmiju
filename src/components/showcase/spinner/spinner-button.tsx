"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const SpinnerButton = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <Button onClick={handleClick} disabled={loading} className="min-w-32">
        {loading ? (
          <>
            <Spinner className="mr-2 size-4" />
            Loading...
          </>
        ) : (
          "Click me"
        )}
      </Button>
      <Button variant="outline" disabled={loading} className="min-w-32">
        {loading && <Spinner className="mr-2 size-4" />}
        {loading ? "Processing..." : "Submit"}
      </Button>
      <Button variant="secondary" disabled={loading} className="min-w-32">
        {loading ? (
          <>
            <Spinner className="mr-2 size-4" />
            Please wait
          </>
        ) : (
          "Save Changes"
        )}
      </Button>
    </div>
  );
};

export default SpinnerButton;
