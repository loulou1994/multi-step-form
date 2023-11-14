import useFormSubscription from "../hooks/useFormSubscription";

type Props = {
  updateCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const Summary = ({ updateCurrentStep }: Props) => {
  const { paymentPlan, addonsList } = useFormSubscription();
  const numberToCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  let addonContent: JSX.Element[] = [];
  let totalCharge: number = paymentPlan.price;

  if (addonsList.length) {
    addonContent = addonsList.map((addonData) => {
      totalCharge += addonData.addonCharge;
      return (
        <li className="flex justify-between" key={addonData.id}>
          <span className="text-cool-gray tablet:text-lg tablet:font-medium">
            {addonData.addonName}
          </span>
          <span className="tablet:text-lg tablet:font-medium">
            +{numberToCurrency.format(addonData.addonCharge)}/
            {addonData.perYear ? "yr" : "mo"}
          </span>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="mb-2 text-2xl font-bold tablet:mb-3 tablet:text-5xl">
        Finishing up
      </h1>
      <p className="mb-4 text-cool-gray tablet:mb-11 tablet:text-xl">
        Double-check everything looks OK before confirming
      </p>
      <div className="rounded-lg bg-magnolia p-4 tablet:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex flex-col items-start">
            <span className="font-medium capitalize tablet:text-xl tablet:font-bold">
              {paymentPlan.mode}{" "}
              {paymentPlan.perYear ? "(Yearly)" : "(Monthly)"}
            </span>
            <button
              className="text-cool-gray underline hover:text-purplish-blue tablet:font-medium"
              onClick={() => {
                // resetForm()
                updateCurrentStep(2);
              }}
            >
              Change
            </button>
          </div>
          <span className="font-medium tablet:text-xl tablet:font-bold">
            {numberToCurrency.format(paymentPlan.price)}/
            {paymentPlan.perYear ? "yr" : "mo"}
          </span>
        </div>
        {addonContent.length ? (
          <>
            <hr className="border-light-gray" />
            <ul className="mt-6 flex flex-col gap-3">{addonContent}</ul>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="mt-7 flex justify-between px-4 tablet:px-8">
        <span className="text-cool-gray tablet:text-lg tablet:font-medium">
          Total (per {paymentPlan.perYear ? "year" : "month"})
        </span>
        <span className="font-medium text-purplish-blue tablet:text-2xl tablet:font-bold">
          +{numberToCurrency.format(totalCharge)}/
          {paymentPlan.perYear ? "yr" : "mo"}
        </span>
      </div>
    </>
  );
};
export default Summary;
