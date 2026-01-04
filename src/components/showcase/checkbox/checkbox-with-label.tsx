import { Checkbox } from "@/components/ui/checkbox";

const CheckboxWithLabelExample = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-3">
        <Checkbox id="terms" className="mt-1" />
        <div className="space-y-1">
          <label htmlFor="terms" className="text-sm font-medium cursor-pointer">
            Accept terms and conditions
          </label>
          <p className="text-xs text-muted-foreground">
            You agree to our terms of service and privacy policy.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <Checkbox id="newsletter" className="mt-1" defaultChecked />
        <div className="space-y-1">
          <label
            htmlFor="newsletter"
            className="text-sm font-medium cursor-pointer"
          >
            Subscribe to newsletter
          </label>
          <p className="text-xs text-muted-foreground">
            Get updates about new features and improvements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckboxWithLabelExample;
