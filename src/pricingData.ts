import {
  PricingOptionstype,
  AddOnsListType,
} from "./types/subscriptionFormTypes";

export const pricingOptions: PricingOptionstype = [
  {
    id: 1,
    mode: "arcade",
    price: 9,
    perYear: false,
    iconUrl: "icon-arcade",
  },
  {
    id: 2,
    mode: "advanced",
    price: 12,
    perYear: false,
    iconUrl: "icon-advanced",
  },
  {
    id: 3,
    mode: "pro",
    price: 15,
    perYear: false,
    iconUrl: "icon-pro",
  },
  {
    id: 4,
    mode: "arcade",
    price: 90,
    perYear: true,
    bonus: "2 months free ",
    iconUrl: "icon-arcade",
  },
  {
    id: 5,
    mode: "advanced",
    price: 120,
    perYear: true,
    bonus: "2 months free",
    iconUrl: "icon-advanced",
  },
  {
    id: 6,
    mode: "pro",
    price: 150,
    perYear: true,
    bonus: "2 months free",
    iconUrl: "icon-pro",
  },
];

export const listOfAddOns: AddOnsListType = [
  {
    id: 1,
    addonName: "Online service",
    addonDescription: "Access to multiple games",
    addonCharge: 1,
    perYear: false,
  },
  {
    id: 3,
    addonName: "Larger storage",
    addonDescription: "Extra 1TB of cloud save",
    addonCharge: 2,
    perYear: false,
  },
  {
    id: 2,
    addonName: "Customizable profile",
    addonDescription: "Custom theme on your profile",
    addonCharge: 2,
    perYear: false,
  },
  {
    id: 4,
    addonName: "Online service",
    addonDescription: "Access to multiple games",
    addonCharge: 10,
    perYear: true,
  },
  {
    id: 5,
    addonName: "Larger storage",
    addonDescription: "Extra 1TB of cloud save",
    addonCharge: 20,
    perYear: true,
  },
  {
    id: 6,
    addonName: "Customizable profile",
    addonDescription: "Custom theme on your profile",
    addonCharge: 20,
    perYear: true,
  },
];
