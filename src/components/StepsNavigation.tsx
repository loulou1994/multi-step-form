import useFormSubscription from "../hooks/useFormSubscription";

type Props = {
  currentStep: number;
  updateCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const StepsNavigation = ({ currentStep, updateCurrentStep }: Props) => {
  const { allInputsAreValid, isEmptyPaymentPlan } = useFormSubscription();
  let content = <></>;

  const handleNextStep = () => {
    let nextStep = currentStep;
    if (
      (currentStep === 1 && !allInputsAreValid()) ||
      (currentStep === 2 && isEmptyPaymentPlan())
    ) {
      --nextStep;
    }
    updateCurrentStep(nextStep + 1);
  };

  const handlePreviousStep = () => {
    updateCurrentStep(currentStep - 1);
  };

  if (currentStep <= 4) {
    content = (
      <div className="absolute bottom-0 grid w-full grid-cols-2 bg-white px-5 py-4 tablet:static tablet:col-start-2	tablet:row-start-2 tablet:mx-auto tablet:mb-3 tablet:w-11/12 tablet:max-w-[43.12rem] tablet:p-0 tablet:text-lg">
        {currentStep > 1 && (
          <button
            className="w-28 justify-self-start text-left font-medium text-cool-gray hover:text-marine-blue tablet:tablet:w-auto tablet:rounded-lg tablet:py-3 tablet:pr-7"
            onClick={() => {
              handlePreviousStep();
            }}
          >
            Go Back
          </button>
        )}
        <button
          className={`col-start-2 w-28 justify-self-end rounded-[4px] px-4 py-2 font-medium text-white tablet:tablet:w-auto tablet:rounded-lg tablet:px-7 tablet:py-3 ${
            currentStep > 3
              ? "bg-purplish-blue hover:bg-[hsl(243,100%,75%)]"
              : "bg-marine-blue hover:bg-pastel-blue "
          }`}
          onClick={() => {
            handleNextStep();
          }}
        >
          {currentStep < 4 ? <span>Next Step</span> : <span>Confirm</span>}
        </button>
      </div>
    );
  }
  return content;
};
export default StepsNavigation;
