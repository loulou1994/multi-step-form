export type PersonalInfoType = {
  name: string;
  emailAddress: string;
  phoneNumber: number;
};

export type ValidPersonalInfoType = {
  name: boolean;
  emailAddress: boolean;
  phoneNumber: boolean;
};

export type BillingModes = {
  arcade: 9 | 90;
  advanced: 12 | 120;
  pro: 15 | 150;
};

export type BillingPlan<T extends keyof BillingModes> = {
  id: number;
  mode: T;
  price: BillingModes[T];
  perYear: boolean;
  iconUrl: string;
  bonus?: string;
};

type AddOnsNameType =
  | "Online service"
  | "Larger storage"
  | "Customizable profile";
type AddOnsChargeType = 1 | 2 | 10 | 20;

export type AddOnsType = {
  id: number;
  addonName: AddOnsNameType;
  addonDescription: string;
  addonCharge: AddOnsChargeType;
  perYear: boolean;
};

export type AddOnsListType = AddOnsType[];
export type PricingOptionstype = BillingPlan<keyof BillingModes>[];
