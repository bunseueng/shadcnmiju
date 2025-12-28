import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Facebook, Link, Linkedin, Twitter } from "lucide-react";

const SocialButtonGroup = () => {
  return (
    <ButtonGroup>
      <Button variant="outline" size="sm">
        <Twitter />
      </Button>
      <Button variant="outline" size="sm">
        <Facebook />
      </Button>
      <Button variant="outline" size="sm">
        <Linkedin />
      </Button>
      <Button variant="outline" size="sm">
        <Link />
      </Button>
    </ButtonGroup>
  );
};

export default SocialButtonGroup;
