"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const LoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Simulate async operation
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Button onClick={handleClick} disabled={isLoading}>
      {isLoading && <Spinner />}
      {isLoading ? "Loading..." : "Click me"}
    </Button>
  );
};

export default LoadingButton;
