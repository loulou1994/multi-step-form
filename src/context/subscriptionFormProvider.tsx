import { createContext, ReactElement, useState } from "react";
import {
  PersonalInfoType,
  BillingPlan,
  BillingModes,
  AddOnsListType,
  AddOnsType,
  ValidPersonalInfoType,
} from "../types/subscriptionFormTypes";

const initPersonalInfoState: PersonalInfoType = {
  name: "",
  emailAddress: "",
  phoneNumber: 0,
};

const initValidPersonalInfoState: ValidPersonalInfoType = {
  name: true,
  emailAddress: true,
  phoneNumber: true,
};

const InitPaymentPlanState: BillingPlan<keyof BillingModes> =
  {} as BillingPlan<"arcade">;

const initAddonsList: AddOnsListType = [];
const useSubscriptionFormContext = () => {
  const [personalInfo, setPersonalInfo] = useState(initPersonalInfoState);

  const [paymentPlan, setPaymentPlan] = useState(InitPaymentPlanState);

  const [addonsList, setAddonsList] = useState(initAddonsList);

  const [validatePersonalInfo, setValidatePersonalInfo] = useState(
    initValidPersonalInfoState,
  );

  function updatePersonalInfo(e: React.ChangeEvent<HTMLInputElement>) {
    setPersonalInfo((prevVal) => ({
      ...prevVal,
      [e.target.id]: e.target.value,
    }));
  }

  function updateSetPaymentPlan(paymentPlan: BillingPlan<keyof BillingModes>) {
    setPaymentPlan(paymentPlan);
    setAddonsList([]);
  }

  function updateAddonsList(addOnOb: AddOnsType) {
    setAddonsList((prevVal) => {
      if (!prevVal.includes(addOnOb)) return [...prevVal, addOnOb];
      return prevVal.filter((addOnData) => addOnData !== addOnOb);
    });
  }

  function allInputsAreValid(): boolean {
    const namingPattern = /^[a-zA-Z]{2,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumberPattern = /^[0-9]{9,14}$/;

    let allInputsValid = true;

    for (const inputName in personalInfo) {
      let validInput = true;
      switch (inputName) {
        case "name":
          validInput = namingPattern.test(personalInfo.name);
          break;
        case "emailAddress":
          validInput = emailPattern.test(personalInfo.emailAddress);
          break;
        case "phoneNumber":
          validInput = phoneNumberPattern.test(
            String(personalInfo.phoneNumber),
          );
          break;
        default:
          return allInputsValid;
      }

      if (!validInput) allInputsValid = false;

      setValidatePersonalInfo((prevVal) => ({
        ...prevVal,
        [inputName]: validInput,
      }));
    }

    return allInputsValid;
  }

  function isEmptyPaymentPlan(): boolean {
    return Object.getOwnPropertyNames(paymentPlan).length === 0;
  }

  function resetForm() {
    setPaymentPlan(InitPaymentPlanState);
    setAddonsList([]);
  }

  return {
    personalInfo,
    paymentPlan,
    validatePersonalInfo,
    addonsList,
    updatePersonalInfo,
    updateSetPaymentPlan,
    updateAddonsList,
    resetForm,
    allInputsAreValid,
    isEmptyPaymentPlan,
  };
};

export type useSubscriptionFormContextType = ReturnType<
  typeof useSubscriptionFormContext
>;

// intializing the context with default values
const initSubscriptionFormContext: useSubscriptionFormContextType = {
  personalInfo: initPersonalInfoState,
  paymentPlan: InitPaymentPlanState,
  addonsList: initAddonsList,
  validatePersonalInfo: initValidPersonalInfoState,
  updatePersonalInfo: () => {},
  updateSetPaymentPlan: () => {},
  updateAddonsList: () => {},
  resetForm: () => {},
  allInputsAreValid: () => {
    return true;
  },
  isEmptyPaymentPlan: () => {
    return true;
  },
};

export const SubscriptionFormContext =
  createContext<useSubscriptionFormContextType>(initSubscriptionFormContext);

type PropsType = { children?: ReactElement | ReactElement[] };

const SubscriptionFormProvider = ({ children }: PropsType): ReactElement => {
  return (
    <SubscriptionFormContext.Provider value={useSubscriptionFormContext()}>
      {children}
    </SubscriptionFormContext.Provider>
  );
};

export default SubscriptionFormProvider;
