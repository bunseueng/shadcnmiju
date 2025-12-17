import { Button } from "@/components/ui/button";

const ButtonGroup = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button>Save</Button>
        <Button variant="outline">Cancel</Button>
      </div>
      <div className="flex gap-2">
        <Button variant="outline">Previous</Button>
        <Button>Next</Button>
      </div>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <Button variant="outline" className="rounded-r-none">
          Left
        </Button>
        <Button variant="outline" className="rounded-none border-l-0">
          Middle
        </Button>
        <Button variant="outline" className="rounded-l-none border-l-0">
          Right
        </Button>
      </div>
    </div>
  );
};

export default ButtonGroup;
