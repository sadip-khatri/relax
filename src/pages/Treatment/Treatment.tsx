import React from "react";
import TreatmentHero from "../../components/Treatment/TreatmentHero";
import Description from "../../components/Treatment/Description";
import ExploreOurTreatments from "../../components/Treatment/ExploreOurTreatments";
import ReadyToExperienceRelief from "../../components/Treatment/ReadyToExperienceRelief";

function Treatment() {
  return (
    <div>
      <TreatmentHero />
      <Description />
      <ExploreOurTreatments />
      <ReadyToExperienceRelief />
    </div>
  );
}

export default Treatment;
