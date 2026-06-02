import { ActivitySquare, Medal, Sparkles } from "lucide-react";
import { PricingModule } from "@/components/ui/pricing-module";

const plans = [
  {
    id: "starter",
    name: "Starter Fuel",
    description: "For students, gym beginners, and first-time nutrition coaching.",
    icon: <ActivitySquare className="h-8 w-8 text-primary" />,
    priceMonthly: 2499,
    priceYearly: 23999,
    users: "1 athlete profile",
    features: [
      { label: "Monthly meal structure", included: true },
      { label: "WhatsApp check-in once a week", included: true },
      { label: "Supplement guidance", included: false },
      { label: "Competition prep", included: false },
    ],
  },
  {
    id: "performance",
    name: "Performance Plus",
    description: "For active athletes who want structured progress and better recovery.",
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    priceMonthly: 5499,
    priceYearly: 52799,
    users: "1 athlete + progress reviews",
    features: [
      { label: "Bi-weekly nutrition revisions", included: true },
      { label: "Recovery and hydration plan", included: true },
      { label: "Supplement guidance", included: true },
      { label: "Competition prep", included: false },
    ],
    recommended: true,
  },
  {
    id: "elite",
    name: "Elite Peak",
    description: "For competitive athletes preparing for events, seasons, or stage goals.",
    icon: <Medal className="h-8 w-8 text-primary" />,
    priceMonthly: 9499,
    priceYearly: 91199,
    users: "1 athlete with high-touch support",
    features: [
      { label: "Weekly strategy calls", included: true },
      { label: "Competition prep roadmap", included: true },
      { label: "Travel and event-day nutrition", included: true },
      { label: "Priority response support", included: true },
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-shell py-24">
      <PricingModule
        title="Straightforward INR Pricing"
        subtitle="Three coaching tiers designed for realistic progress, better performance, and scalable support."
        annualBillingLabel="Switch to annual billing"
        buttonLabel="Choose Plan"
        plans={plans}
      />
    </section>
  );
}