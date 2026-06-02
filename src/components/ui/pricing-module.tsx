"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PlanFeature {
  label: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  priceMonthly: number;
  priceYearly: number;
  users: string;
  features: PlanFeature[];
  recommended?: boolean;
}

export interface PricingModuleProps {
  title?: string;
  subtitle?: string;
  annualBillingLabel?: string;
  buttonLabel?: string;
  plans: PricingPlan[];
  defaultAnnual?: boolean;
  className?: string;
}

export function PricingModule({
  title = "Pricing Plans",
  subtitle = "Choose a plan that fits your needs.",
  annualBillingLabel = "Annual billing",
  buttonLabel = "Get started",
  plans,
  defaultAnnual = false,
  className,
}: PricingModuleProps) {
  const [isAnnual, setIsAnnual] = React.useState(defaultAnnual);

  return (
    <section
      className={cn(
        "w-full rounded-[2rem] border border-blue-100/80 bg-white/80 px-4 py-20 text-foreground shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-sm md:px-8",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-2 text-4xl font-bold tracking-tight">{title}</h2>
        <p className="mb-8 text-muted-foreground">{subtitle}</p>

        <div className="mb-10 flex items-center justify-center gap-2">
          <Switch
            id="billing-toggle"
            isSelected={isAnnual}
            onChange={setIsAnnual}
          />
          <label
            htmlFor="billing-toggle"
            className="cursor-pointer text-sm text-muted-foreground"
          >
            {annualBillingLabel}
          </label>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                "relative rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-b from-white to-blue-50/60 text-left transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl",
                plan.recommended && "border-primary ring-1 ring-primary/30",
              )}
            >
              {plan.recommended && (
                <div className="absolute left-0 right-0 top-0 mx-auto w-fit -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Recommended
                </div>
              )}

              <CardHeader className="pt-8 text-center">
                <div className="mb-4 flex justify-center">{plan.icon}</div>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="text-center">
                <div className="mb-2 text-4xl font-bold tracking-tight">
                  INR {isAnnual ? plan.priceYearly : plan.priceMonthly}
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  / {isAnnual ? "year" : "month"}
                </p>

                <Button
                  variant={plan.recommended ? "default" : "outline"}
                  className="mb-6 w-full"
                >
                  {buttonLabel}
                </Button>

                <div className="text-left text-sm">
                  <h4 className="mb-2 font-semibold">Overview</h4>
                  <p className="mb-4 text-muted-foreground">✓ {plan.users}</p>

                  <h4 className="mb-2 font-semibold">Highlights</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <X className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span
                          className={feature.included
                            ? "text-muted-foreground"
                            : "text-muted-foreground/60 line-through"}
                        >
                          {feature.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}