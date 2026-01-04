"use client";

import { Separator } from "@/components/ui/separator";

const SeparatorList = () => {
  const notifications = [
    {
      title: "New message",
      description: "You have a new message from John",
      time: "2 min ago",
    },
    {
      title: "Order shipped",
      description: "Your order #12345 has been shipped",
      time: "1 hour ago",
    },
    {
      title: "Payment received",
      description: "We received your payment of $99.00",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="w-full max-w-sm rounded-lg border">
      {notifications.map((notification, index) => (
        <div key={notification.title}>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">{notification.title}</p>
              <span className="text-xs text-muted-foreground">{notification.time}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {notification.description}
            </p>
          </div>
          {index < notifications.length - 1 && <Separator />}
        </div>
      ))}
    </div>
  );
};

export default SeparatorList;
