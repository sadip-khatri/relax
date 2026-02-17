import React from "react";
import WhyChooseUsHero from "../../components/WhyChooseUs/WhyChooseUsHero";
import WhyDesc from "../../components/WhyChooseUs/WhyDesc";
import FeaturesGrid from "../../components/WhyChooseUs/FeaturesGrid";
import TestimonialsCarousel from "../../components/WhyChooseUs/TestimonialsCarousel";
import ExperienceDifference from "../../components/WhyChooseUs/ExperienceDifference";

function WhyChooseUs() {
  return (
    <div>
      <WhyChooseUsHero />
      <WhyDesc />
      <FeaturesGrid />
      <TestimonialsCarousel />
      <ExperienceDifference />
    </div>
  );
}

export default WhyChooseUs;
