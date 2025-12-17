import { Button } from "@/components/ui/button";

import { DownloadCloud } from "lucide-react";

const IconButton = () => {
  return (
    <Button variant="default" size="icon">
      <DownloadCloud className="h-4 w-4" />
    </Button>
  );
};

export default IconButton;
