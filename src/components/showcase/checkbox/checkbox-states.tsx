import { Checkbox } from "@/components/ui/checkbox";

const CheckboxStates = () => {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Default State</h4>
        <div className="flex items-center space-x-2">
          <Checkbox id="state1" />
          <label htmlFor="state1" className="text-sm cursor-pointer">
            Default unchecked
          </label>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Checked State</h4>
        <div className="flex items-center space-x-2">
          <Checkbox id="state2" defaultChecked />
          <label htmlFor="state2" className="text-sm cursor-pointer">
            Default checked
          </label>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Disabled State</h4>
        <div className="flex items-center space-x-2">
          <Checkbox id="state3" disabled />
          <label htmlFor="state3" className="text-sm cursor-pointer opacity-50">
            Disabled unchecked
          </label>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Disabled Checked State</h4>
        <div className="flex items-center space-x-2">
          <Checkbox id="state4" disabled defaultChecked />
          <label htmlFor="state4" className="text-sm cursor-pointer opacity-50">
            Disabled checked
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckboxStates;
