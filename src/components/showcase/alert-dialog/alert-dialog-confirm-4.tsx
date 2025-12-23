import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Bell, CheckCircle, RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type InfoItem = {
  label: string;
  highlight?: boolean;
};

const infoItem: InfoItem[] = [
  { label: "Your site will be indexed by search engines" },
  { label: "SSL certificate will be automatically issued" },
  { label: "CDN distribution will be optimized" },
];

const AlertDialogConfirm4 = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">
          <Bell /> Complete Task
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <AlertDialogTitle>Task Completed Successfully!</AlertDialogTitle>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-green-800">
                Operation completed successfully
              </span>
            </div>
            <AlertDialogDescription className="text-green-700">
              Your website has been deployed and is now live at: mysite.com
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        <div className="bg-secondary rounded-lg p-4">
          <AlertDialogDescription className="text-white mb-2 text-md">
            What happens next:
          </AlertDialogDescription>
          <ul className="list-disc list-inside text-sm gap-x-6 gap-y-2">
            {infoItem.map((item, index) => (
              <li key={index} className="marker:text-yellow-400">
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Badge>✨ Live</Badge>
          <Badge className="text-green-600">🔒 Secure</Badge>
        </div>
        <AlertDialogFooter className="mt-5">
          <AlertDialogAction>Visit Site</AlertDialogAction>
          <AlertDialogAction>View Dashbaord</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogConfirm4;
