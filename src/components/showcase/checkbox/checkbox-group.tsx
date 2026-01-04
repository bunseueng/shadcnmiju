import { Checkbox } from "@/components/ui/checkbox";

const CheckboxGroup = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold">Select your interests</h3>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="design" defaultChecked />
          <label htmlFor="design" className="text-sm cursor-pointer">
            Design
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="development" defaultChecked />
          <label htmlFor="development" className="text-sm cursor-pointer">
            Development
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="marketing" />
          <label htmlFor="marketing" className="text-sm cursor-pointer">
            Marketing
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="sales" />
          <label htmlFor="sales" className="text-sm cursor-pointer">
            Sales
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckboxGroup;
