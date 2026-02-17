import ContactHero from "../../components/Contact/ContactHero";
import ContactSection from "../../components/Home/ContactSection";
import VisitOurLocation from "../../components/Contact/VisitOurLocation";
import BusinessHours from "../../components/Contact/BusinessHours";
import ReadyToBook from "../../components/Contact/ReadyToBook";

function Contact() {
  return (
    <div>
      <ContactHero />
      <ContactSection />
      <VisitOurLocation />
      <BusinessHours />
      <ReadyToBook />
    </div>
  );
}

export default Contact;
