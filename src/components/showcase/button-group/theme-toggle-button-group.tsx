import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggleButtonGroup = () => {
  const { theme, setTheme } = useTheme();
  return (
    <ButtonGroup>
      <Button
        variant={theme === "light" ? "default" : "outline"}
        size="icon"
        onClick={() => setTheme("light")}
      >
        <Sun />
      </Button>
      <Button
        variant={theme === "dark" ? "default" : "outline"}
        size="icon"
        onClick={() => setTheme("dark")}
      >
        <Moon />
      </Button>
      <Button
        variant={theme === "system" ? "default" : "outline"}
        size="icon"
        onClick={() => setTheme("system")}
      >
        <Monitor />
      </Button>
    </ButtonGroup>
  );
};

export default ThemeToggleButtonGroup;
