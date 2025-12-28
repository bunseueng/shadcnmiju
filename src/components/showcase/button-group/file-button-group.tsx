import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import { Download, RefreshCcw, Upload } from "lucide-react";

const FileButtonGroup = () => {
  return (
    <ButtonGroup>
      <Button variant="outline" size="sm">
        <Upload /> Upload
      </Button>
      <Button variant="outline" size="sm">
        <Download /> Download
      </Button>
      <Button variant="outline" size="sm">
        <RefreshCcw /> Sync
      </Button>
    </ButtonGroup>
  );
};

export default FileButtonGroup;
