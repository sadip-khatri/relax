import WhyChooseUsHero from "../../components/WhyChooseUs/WhyChooseUsHero";
import WhyDesc from "../../components/WhyChooseUs/WhyDesc";
import FeaturesGrid from "../../components/WhyChooseUs/FeaturesGrid";
import TestimonialsCarousel from "../../components/WhyChooseUs/TestimonialsCarousel";
import ExperienceDifference from "../../components/WhyChooseUs/ExperienceDifference";
import GetInTouch from "../../utils/GetInTouch";
import CallNow from "../../utils/CallNow";

function WhyChooseUs() {
  return (
    <div>
      <WhyChooseUsHero />
      <WhyDesc />
      <FeaturesGrid />
      <TestimonialsCarousel />
      <ExperienceDifference />
      <CallNow />
      <GetInTouch />
    </div>
  );
}

export default WhyChooseUs;
