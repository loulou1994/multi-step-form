import useFormSubscription from "../hooks/useFormSubscription";

const PersonalInfo = () => {
  const {
    personalInfo: { name, emailAddress, phoneNumber },
    updatePersonalInfo,
    validatePersonalInfo,
  } = useFormSubscription();

  return (
    <>
      <h1 className="mb-2 text-2xl font-bold tablet:mb-3 tablet:text-5xl">
        Personal Info
      </h1>
      <p className="mb-4 text-cool-gray tablet:mb-11 tablet:text-xl">
        Please provide your name, email address, and phone number
      </p>
      <div className="mb-7 flex flex-col gap-1">
        <label
          htmlFor="name"
          className="flex justify-between text-lg font-normal"
        >
          <span>Name</span>
          {!validatePersonalInfo.name && (
            <span className="font-medium text-straw-red">
              This field is invalid
            </span>
          )}
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            updatePersonalInfo(e);
          }}
          id="name"
          name="name"
          placeholder="e.g. Stephen King"
          className={`cursor-pointer rounded border bg-transparent py-2 pl-4 font-medium outline-none placeholder:font-medium focus:border-purplish-blue ${
            validatePersonalInfo.name ? "border-light-gray" : "border-straw-red"
          }`}
          pattern="^[a-zA-Z]{2,}$"
        />
      </div>
      <div className="mb-7 flex flex-col gap-1">
        <label
          htmlFor="email-address"
          className="flex justify-between text-lg font-normal"
        >
          <span>Email Address</span>
          {!validatePersonalInfo.emailAddress && (
            <span className="font-medium text-straw-red">
              This field is invalid
            </span>
          )}
        </label>
        <input
          type="text"
          value={emailAddress}
          onChange={updatePersonalInfo}
          id="emailAddress"
          name="email-address"
          placeholder="e.g. stephenking@lorem.com"
          className={`cursor-pointer rounded border bg-transparent py-2 pl-4 font-medium outline-none placeholder:font-medium focus:border-purplish-blue ${
            validatePersonalInfo.emailAddress
              ? "border-light-gray"
              : "border-straw-red"
          }`}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="phone-number"
          className="flex justify-between text-lg font-normal"
        >
          <span>Phone Number</span>
          {!validatePersonalInfo.phoneNumber && (
            <span className="font-medium text-straw-red">
              This field is invalid
            </span>
          )}
        </label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={updatePersonalInfo}
          id="phoneNumber"
          name="phone-number"
          placeholder="e.g +1 234 567 890"
          className={`cursor-pointer rounded border border-light-gray bg-transparent py-2 pl-4 font-medium outline-none placeholder:font-medium focus:border-purplish-blue ${
            validatePersonalInfo.phoneNumber
              ? "border-light-gray"
              : "border-straw-red"
          }`}
        />
      </div>
    </>
  );
};
export default PersonalInfo;
