import TreatmentHero from "../../components/Treatment/TreatmentHero";
import Description from "../../components/Treatment/Description";
import ExploreOurTreatments from "../../components/Treatment/ExploreOurTreatments";
import ReadyToExperienceRelief from "../../components/Treatment/ReadyToExperienceRelief";
import GetInTouch from "../../utils/GetInTouch";
import CallNow from "../../utils/CallNow";

function Treatment() {
  return (
    <div>
      <TreatmentHero />
      <Description />
      <ExploreOurTreatments />
      <ReadyToExperienceRelief />
      <CallNow />
      <GetInTouch />
    </div>
  );
}

export default Treatment;
