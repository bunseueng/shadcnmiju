import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import { Home, LogOut, Settings, User } from "lucide-react";

const VerticleButtonGroup = () => {
  return (
    <ButtonGroup orientation="vertical" className="items-start! h-fit">
      <Button variant="outline" className="justify-start! w-full">
        <Home /> Home
      </Button>
      <Button variant="outline" className="justify-start! w-full">
        <User /> Profile
      </Button>
      <Button variant="outline" className="justify-start! w-full">
        <Settings /> Setting
      </Button>
      <Button variant="outline" className="justify-start! w-full">
        <LogOut /> Logout
      </Button>
    </ButtonGroup>
  );
};

export default VerticleButtonGroup;
