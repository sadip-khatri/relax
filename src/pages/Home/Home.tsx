import HomeHero from "../../components/Home/HomeHero";
import PrivateTreatment from "../../components/Home/PrivateTreatment";
import Treatments from "../../components/Home/Treatments";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import ContactSection from "../../components/Home/ContactSection";
import TestimonialsCarousel from "../../components/WhyChooseUs/TestimonialsCarousel";
import GetInTouch from "../../utils/GetInTouch";
import CallNow from "../../utils/CallNow";

function Home() {
  return (
    <div>
      <HomeHero />
      <PrivateTreatment />
      <Treatments />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <ContactSection />
      <CallNow />
      <GetInTouch />
    </div>
  );
}

export default Home;
