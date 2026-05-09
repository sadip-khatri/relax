import { Helmet } from "react-helmet-async";
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
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Relax & Go Massage – Calm Body, Clear Mind</title>
        <meta
          name="description"
          content="Relax & Go Massage offers professional spa and massage treatments in London. Experience deep relaxation, stress relief & rejuvenation."
        />
        <meta
          name="keywords"
          content="spa massage London, professional massage London, relaxation spa UK"
        />

        {/* Open Graph (Facebook/LinkedIn) */}
        <meta
          property="og:title"
          content="Relax & Go Massage – Calm Body, Clear Mind"
        />
        <meta
          property="og:description"
          content="Relax & Go Massage delivers massage services in London for stress relief and total wellbeing."
        />
        <meta
          property="og:image"
          content="https://relaxandgomassage.co.uk/assets/Logo-e9xu4b_a.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://relaxandgomassage.co.uk/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://relaxandgomassage.co.uk/#spa",
            name: "Relax & Go Massage",
            url: "https://relaxandgomassage.co.uk/",
            logo: "https://relaxandgomassage.co.uk/assets/Logo-e9xu4b_a.png",
            description:
              "Professional spa and massage treatments in London focused on relaxation, stress relief and overall wellbeing.",
            telephone: "+44 07848930217",
            address: {
              "@type": "PostalAddress",
              streetAddress: "29 Creek Road, East Molesey KT8BE",
              addressLocality: "London",
              postalCode: "KT8 9BE",
              addressCountry: "GB",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 51.515,
              longitude: -0.144,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "07:00",
                closes: "19:00",
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Page Content */}
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
