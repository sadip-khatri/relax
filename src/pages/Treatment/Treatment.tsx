import TreatmentHero from "../../components/Treatment/TreatmentHero";
import Description from "../../components/Treatment/Description";
import ExploreOurTreatments from "../../components/Treatment/ExploreOurTreatments";
import ReadyToExperienceRelief from "../../components/Treatment/ReadyToExperienceRelief";
import GetInTouch from "../../utils/GetInTouch";

function Treatment() {
  return (
    <div>
      <TreatmentHero />
      <Description />
      <ExploreOurTreatments />
      <ReadyToExperienceRelief />
      <GetInTouch />
    </div>
  );
}

export default Treatment;
