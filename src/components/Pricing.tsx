import { useState } from "react";
// mock db
import { pricingOptions } from "../pricingData";
// custom hooks
import useFormSubscription from "../hooks/useFormSubscription";
// utility tools
import getImageUrl from "../utils/importAssets";

const Pricing = () => {
  const { paymentPlan, updateSetPaymentPlan } = useFormSubscription();
  const [isYearly, setIsYearly] = useState(false);
  const pricingPlan = pricingOptions.filter(
    (pricingPlan) => pricingPlan.perYear === isYearly,
  );
  const pricingPlanContent = pricingPlan.map((billingPlan) => {
    const numberToCurrency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
    return (
      <li
        key={billingPlan.id}
        className={`flex cursor-pointer items-center gap-4 rounded-lg border px-4 py-3 hover:border-purplish-blue tablet:flex-1  tablet:flex-col tablet:items-start tablet:gap-16 tablet:px-6 tablet:py-7	 ${
          billingPlan.id === paymentPlan.id
            ? "border-purplish-blue bg-magnolia"
            : "border-light-gray bg-transparent"
        }`}
        tabIndex={0}
        onClick={() => {
          updateSetPaymentPlan(billingPlan);
        }}
        onKeyDown={(e) => {
          e.key === "Enter" && updateSetPaymentPlan(billingPlan);
        }}
      >
        <img
          src={getImageUrl(billingPlan.iconUrl)}
          alt={`${billingPlan.mode} icon`}
          className="tablet:w-14"
        />
        <div className="flex flex-col font-medium">
          <span className="text-xl capitalize tablet:font-bold">
            {billingPlan.mode}
          </span>
          <span className="text-cool-gray tablet:text-lg">
            {numberToCurrency.format(billingPlan.price)}/
            {billingPlan.perYear ? "yr" : "mo"}
          </span>
          {billingPlan.bonus && (
            <span className="mt-1">{billingPlan.bonus}</span>
          )}
        </div>
      </li>
    );
  });

  return (
    <>
      <h1 className="mb-2 text-2xl font-bold tablet:mb-3 tablet:text-5xl">
        Select Your Plan
      </h1>
      <p className="mb-4 text-cool-gray tablet:mb-11 tablet:text-xl">
        You have the option of monthly or yearly billing
      </p>
      <ul className="mb-8 flex flex-col gap-4 tablet:mb-11 tablet:flex-row tablet:gap-7">
        {pricingPlanContent}
      </ul>
      <div className="flex items-center justify-center	gap-6 rounded-lg bg-magnolia py-4 font-medium">
        <label
          htmlFor="monthly"
          className={`tablet:text-lg ${
            !isYearly ? "text-marine-blue" : "text-cool-gray"
          } cursor-pointer`}
        >
          Monthly
        </label>
        <div className="relative flex gap-1 rounded-3xl">
          <span
            className={`absolute top-[3px] z-10 aspect-square w-[16px] rounded-[inherit] bg-white transition-all ${
              !isYearly ? "left-[3px]" : "left-[calc(65%-3px)]"
            }`}
          ></span>
          <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-marine-blue"></span>
          <input
            type="radio"
            name="billing-period"
            id="monthly"
            onChange={() => {
              setIsYearly(false);
            }}
            checked={!isYearly}
            className={`aspect-square w-[22px] ${
              !isYearly ? "cursor-default" : "cursor-pointer"
            }`}
          />
          <input
            type="radio"
            name="billing-period"
            id="yearly"
            onChange={() => {
              setIsYearly(true);
            }}
            checked={isYearly}
            className={`aspect-square w-[22px] ${
              isYearly ? "cursor-default" : "cursor-pointer"
            }`}
          />
        </div>
        <label
          htmlFor="yearly"
          className={`tablet:text-lg ${
            isYearly ? "text-marine-blue" : "text-cool-gray"
          } cursor-pointer`}
        >
          Yearly
        </label>
      </div>
    </>
  );
};
export default Pricing;
