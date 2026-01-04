import { Checkbox } from "@/components/ui/checkbox";

const CheckboxSizes = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="small" className="h-3 w-3" />
        <label htmlFor="small" className="text-xs cursor-pointer">
          Small checkbox
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="default" defaultChecked />
        <label htmlFor="default" className="text-sm cursor-pointer">
          Default checkbox
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="large" className="h-6 w-6" defaultChecked />
        <label htmlFor="large" className="text-lg cursor-pointer">
          Large checkbox
        </label>
      </div>
    </div>
  );
};

export default CheckboxSizes;
