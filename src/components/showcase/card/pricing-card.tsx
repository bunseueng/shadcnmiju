import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

const pricingData = [
  {
    plan: "Starter",
    price: 0,
    description: "Perfect for individuals jsut getting started.",
    features: [
      {
        feature: "Basic analytics",
        supported: true,
      },
      {
        feature: "1 Team member",
        supported: true,
      },
      {
        feature: "Community support",
        supported: true,
      },
      {
        feature: "Basic support",
        supported: false,
      },
    ],
  },
  {
    plan: "Pro",
    price: 9,
    description: "For growing teams that need more power.",
    features: [
      {
        feature: "Advanced analytics",
        supported: true,
      },
      {
        feature: "Unlimited team members",
        supported: true,
      },
      {
        feature: "Priority email support",
        supported: true,
      },
      {
        feature: "Custom Domains",
        supported: true,
      },
      {
        feature: "API Access",
        supported: true,
      },
    ],
  },
  {
    plan: "Enterprise",
    price: 49,
    description: "Advanced security and control for large orgs.",
    features: [
      {
        feature: "Dedicated infrastructure",
        supported: true,
      },
      {
        feature: "SSO & SAML",
        supported: true,
      },
      {
        feature: "Dedicated account manager",
        supported: true,
      },
      {
        feature: "24/7 Phone support",
        supported: true,
      },
      {
        feature: "Audit logs",
        supported: true,
      },
    ],
  },
];

const PricingCard = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      {pricingData.map((data, index) => (
        <Card key={index} className="w-87.5 h-120 border-ring text-start">
          <CardContent className="space-y-4">
            <h3>{data.plan}</h3>
            <p className="text-xl md:text-2xl text-muted-foreground">
              <strong className="text-primary">${data.price}</strong>/mo
            </p>
            <p>{data.description}</p>
            <Button className="bg-ring text-foreground w-full">
              Getting Start
            </Button>
            <div className="border border-muted-foreground" />

            {/* Features Lists */}
            <ul className="space-y-4">
              {data.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span>
                    {feature.supported ? (
                      <Check className="text-ring" />
                    ) : (
                      <X className="text-muted-foreground" />
                    )}
                  </span>
                  <span
                    className={cn(
                      "ml-2",
                      feature.supported
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {feature.feature}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PricingCard;
