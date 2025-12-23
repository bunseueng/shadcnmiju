import { Badge } from "@/components/ui/badge";

import { AlertCircle, Check, Clock, Info, Shield, Star, X, Zap } from "lucide-react";

const IconBadge = () => {
  return (
      <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="gap-1">
              <Check className="h-3 w-3" />
              Verified
            </Badge>
            <Badge variant="outline" className="gap-1">
              <X className="h-3 w-3" />
              Rejected
            </Badge>
            <Badge variant="outline" className="gap-1">
              <AlertCircle className="h-3 w-3" />
              Warning
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Info className="h-3 w-3" />
              Info
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Clock className="h-3 w-3" />
              Scheduled
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Star className="h-3 w-3" />
              Featured
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Zap className="h-3 w-3" />
              Premium
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Shield className="h-3 w-3" />
              Secure
            </Badge>
          </div>
  )
};

export default IconBadge;
