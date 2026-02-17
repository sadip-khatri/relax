import React from "react";
import PricingHero from "../../components/Pricing/PricingHero";
import PriceDescription from "../../components/Pricing/PriceDescription";
import OurPricing from "../../components/Pricing/OurPricing";
import WhatsIncluded from "../../components/Pricing/WhatsIncluded";
import ReadyToBookSession from "../../components/Pricing/ReadyToBookSession";

function Pricing() {
  return (
    <div>
      <PricingHero />
      <PriceDescription />
      <OurPricing />
      <WhatsIncluded />
      <ReadyToBookSession />
    </div>
  );
}

export default Pricing;
