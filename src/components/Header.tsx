type Props = {
  currentStep: number;
};

const StepsNavigation = ({ currentStep }: Props) => {
  return (
    <header className="relative bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat pt-[46%] tablet:row-span-2 tablet:bg-[url('./assets/images/bg-sidebar-desktop.svg')] tablet:rounded-lg tablet:pl-[9%] tablet:pt-8">
      <div className="absolute left-[50%] top-[20%] flex translate-x-[-50%] gap-4 font-medium tablet:flex-col tablet:static tablet:translate-x-[0%]">
        <div className="gap-4 tablet:flex">
          <div
            aria-hidden={true}
            className={`flex aspect-square w-9 items-center justify-center rounded-full border tablet:self-center	 ${
              currentStep === 1
                ? "text-marine-blue border-none bg-light-blue"
                : "border-white text-white"
            }
            `}
          >
            1
          </div>
          <div className="sr-only text-lg leading-snug tablet:not-sr-only tablet:flex tablet:flex-col">
            <span className="text-cool-gray">Step 1</span>
            <span className="text-white">YOUR PLAN</span>
          </div>
        </div>
        <div className="gap-4 tablet:flex">
          <div
            aria-hidden={true}
            className={`flex aspect-square w-9 items-center justify-center rounded-full border tablet:self-center	 ${
              currentStep === 2
                ? "text-marine-blue border-none bg-light-blue"
                : "border-white text-white"
            }`}
          >
            2
          </div>
          <div className="sr-only text-lg leading-snug tablet:not-sr-only tablet:flex tablet:flex-col">
            <span className="text-cool-gray">Step 2</span>
            <span className="text-white">SELECT PLAN</span>
          </div>
        </div>
        <div className="gap-4 tablet:flex">
          <div
            aria-hidden={true}
            className={`flex aspect-square w-9 items-center justify-center rounded-full border tablet:self-center	 ${
              currentStep === 3
                ? "text-marine-blue border-none bg-light-blue"
                : "border-white text-white"
            }`}
          >
            3
          </div>
          <div className="sr-only text-lg leading-snug tablet:not-sr-only tablet:flex tablet:flex-col">
            <span className="text-cool-gray">Step 3</span>
            <span className="text-white">ADD-ONS</span>
          </div>
        </div>
        <div className="gap-4 tablet:flex">
          <div
            aria-hidden={true}
            className={`flex aspect-square w-9 items-center justify-center rounded-full border tablet:self-center	 ${
              currentStep > 3
                ? "text-marine-blue border-none bg-light-blue"
                : "border-white text-white"
            }`}
          >
            4
          </div>
          <div className="sr-only text-lg leading-snug tablet:not-sr-only tablet:flex tablet:flex-col">
            <span className="text-cool-gray">Step 4</span>
            <span className="text-white">SUMMARY</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StepsNavigation;
