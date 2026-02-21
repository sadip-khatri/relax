import ContactHero from "../../components/Contact/ContactHero";
import ContactSection from "../../components/Home/ContactSection";
import VisitOurLocation from "../../components/Contact/VisitOurLocation";
import BusinessHours from "../../components/Contact/BusinessHours";
import ReadyToBook from "../../components/Contact/ReadyToBook";
import GetInTouch from "../../utils/GetInTouch";
import CallNow from "../../utils/CallNow";

function Contact() {
  return (
    <div>
      <ContactHero />
      <ContactSection />
      <VisitOurLocation />
      <BusinessHours />
      <ReadyToBook />
      <CallNow />
      <GetInTouch />
    </div>
  );
}

export default Contact;
