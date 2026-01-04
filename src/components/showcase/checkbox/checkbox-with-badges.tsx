import { Checkbox } from "@/components/ui/checkbox";

const CheckboxWithBadges = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between p-2 hover:bg-accent rounded">
        <div className="flex items-center space-x-2">
          <Checkbox id="badge1" defaultChecked />
          <label htmlFor="badge1" className="text-sm cursor-pointer">
            Premium feature
          </label>
        </div>
        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
          Pro
        </span>
      </div>
      <div className="flex items-center justify-between p-2 hover:bg-accent rounded">
        <div className="flex items-center space-x-2">
          <Checkbox id="badge2" />
          <label htmlFor="badge2" className="text-sm cursor-pointer">
            Advanced analytics
          </label>
        </div>
        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
          New
        </span>
      </div>
      <div className="flex items-center justify-between p-2 hover:bg-accent rounded">
        <div className="flex items-center space-x-2">
          <Checkbox id="badge3" />
          <label htmlFor="badge3" className="text-sm cursor-pointer">
            API access
          </label>
        </div>
        <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
          Beta
        </span>
      </div>
    </div>
  );
};

export default CheckboxWithBadges;
