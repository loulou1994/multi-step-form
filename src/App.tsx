import { useState } from "react";
// styles
import "./index.css";
// components
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Pricing from "./components/Pricing";
import SuccessMessage from "./components/SuccessMessage";
import Summary from "./components/Summary";
import AdditionalFeatures from "./components/AdditionalFeatures";
import StepsNavigation from "./components/StepsNavigation";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  let stepContent = <></>;

  switch (currentStep) {
    case 1:
      stepContent = <PersonalInfo />;
      break;
    case 2:
      stepContent = <Pricing />;
      break;
    case 3:
      stepContent = <AdditionalFeatures />;
      break;
    case 4:
      stepContent = <Summary updateCurrentStep={setCurrentStep} />;
      break;
    default:
      stepContent = <SuccessMessage />;
  }

  return (
    <>
      <Header currentStep={currentStep} />
      <section className="relative start-1/2 top-[-20vw] mb-8 w-11/12 max-w-lg -translate-x-2/4 rounded-xl bg-white	px-6 py-8 shadow-[0_8px_30px_-3px_rgba(0,0,0,0.12)] tablet:static tablet:m-auto tablet:translate-x-0 tablet:px-0 tablet:py-0 tablet:pb-0 tablet:shadow-none tablet:max-w-[43.12rem] tablet:min-h-[33.125rem]">
        {stepContent}
      </section>
      <StepsNavigation
        updateCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
    </>
  );
}

export default App;
