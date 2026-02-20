import AboutHero from "../../components/About/AboutHero";
import OurStory from "../../components/About/OurStory";
import CoreValues from "../../components/About/CoreValues";
import MeetTherapist from "../../components/About/MeetTherapist";
import PrivateTreatmentSpace from "../../components/About/PrivateTreatmentSpace";
import GetInTouch from "../../utils/GetInTouch";
import VisionStory from "../../components/About/VisionStory";

function About() {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <CoreValues />
      <VisionStory />
      <MeetTherapist />
      <PrivateTreatmentSpace />
      <GetInTouch />
    </div>
  );
}

export default About;
