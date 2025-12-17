import { Button } from "@/components/ui/button";

import { Trash2 } from "lucide-react";

const DeleteButton = () => {
  return (
    <Button variant="destructive" className="gap-2">
      <Trash2 className="h-4 w-4" />
      Delete
    </Button>
  );
};

export default DeleteButton;
