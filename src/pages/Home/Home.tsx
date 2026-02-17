import React from "react";
import HomeHero from "../../components/Home/HomeHero";
import PrivateTreatment from "../../components/Home/PrivateTreatment";
import Treatments from "../../components/Home/Treatments";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import ContactSection from "../../components/Home/ContactSection";

function Home() {
  return (
    <div>
      <HomeHero />
      <PrivateTreatment />
      <Treatments />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
}

export default Home;
