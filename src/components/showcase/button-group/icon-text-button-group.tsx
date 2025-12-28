import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";

import { Copy, Delete, Edit } from "lucide-react";

const IconWithTextButtonGroup = () => {
  return (
    <ButtonGroup>
      <Button variant="outline" size="sm">
        <Copy /> Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="sm">
        <Edit /> Edit
      </Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="sm">
        <Delete /> Delete
      </Button>
    </ButtonGroup>
  );
};

export default IconWithTextButtonGroup;
