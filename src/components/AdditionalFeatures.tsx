import useFormSubscription from "../hooks/useFormSubscription";
import { listOfAddOns } from "../pricingData";

const AdditionalFeatures = () => {
  const {
    paymentPlan: { perYear },
    addonsList,
    updateAddonsList,
  } = useFormSubscription();
  const addOnsOptions = listOfAddOns.filter(
    (addonData) => addonData.perYear === perYear,
  );
  const addonsContent = addOnsOptions.map((addOnsData) => {
    const numberToCurrency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

    return (
      <li
        key={addOnsData.id}
        className={`grid cursor-pointer grid-cols-[max-content_max-content_1fr] items-center gap-[13px] rounded-lg border border-light-gray p-4 hover:border-purplish-blue tablet:gap-6 tablet:px-8 tablet:py-7 ${
          addonsList.includes(addOnsData)
            ? "border-purplish-blue bg-magnolia"
            : "border-light-gray bg-transparent"
        }`}
        onClick={() => {
          updateAddonsList(addOnsData);
        }}
        onKeyDown={(e) => {
          e.key === "Enter" && updateAddonsList(addOnsData);
        }}
        tabIndex={0}
      >
        <label htmlFor={`addon-${addOnsData.id}`} className="sr-only">
          {addOnsData.addonName}
        </label>
        <input
          type="checkbox"
          name="addon"
          id={`addon-${addOnsData.id}`}
          onChange={(event) => {
            event.stopPropagation();
            updateAddonsList(addOnsData);
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="aspect-square w-[18px] tablet:w-6"
          checked={addonsList.includes(addOnsData)}
        />
        <div>
          <h2 className="text-sm font-medium tablet:text-lg" aria-hidden={true}>{addOnsData.addonName}</h2>
          <p className="text-xs font-medium text-cool-gray tablet:tablet:text-base">
            {addOnsData.addonDescription}
          </p>
        </div>
        <span className="sr-only">charge:</span>
        <span className="justify-self-end text-sm font-medium text-purplish-blue tablet:text-lg">
          +{numberToCurrency.format(addOnsData.addonCharge)}/
          {addOnsData.perYear ? "yr" : "mo"}
        </span>
      </li>
    );
  });
  return (
    <>
      <h1 className="mb-2 text-2xl font-bold tablet:mb-3 tablet:text-5xl">Pick Add-ons</h1>
      <p className="mb-4 text-cool-gray tablet:mb-11 tablet:text-xl">
        Add-ons help enhance your gaming experience
      </p>
      <ul className="mb-8 flex flex-col gap-4">{addonsContent}</ul>
    </>
  );
};
export default AdditionalFeatures;
