import React from "react";
import AboutHero from "../../components/About/AboutHero";
import OurStory from "../../components/About/OurStory";
import CoreValues from "../../components/About/CoreValues";
import MeetTherapist from "../../components/About/MeetTherapist";
import PrivateTreatmentSpace from "../../components/About/PrivateTreatmentSpace";

function About() {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <CoreValues />
      <MeetTherapist />
      <PrivateTreatmentSpace />
    </div>
  );
}

export default About;
