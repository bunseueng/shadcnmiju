"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { UploadCloud } from "lucide-react";
import { useState } from "react";

const UploadButton = () => {
  const [isUploading, setIsUploading] = useState(false);

  const handleClick = () => {
    setIsUploading(true);
    // Simulate async operation
    setTimeout(() => setIsUploading(false), 2000);
  };

  return (
    <Button disabled={isUploading} onClick={handleClick} className="gap-2">
      {isUploading ? <Spinner /> : <UploadCloud className="h-4 w-4" />}
      {isUploading ? "Uploading..." : "Upload"}
    </Button>
  );
};

export default UploadButton;
