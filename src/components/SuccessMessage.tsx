// utility tools
import getImageUrl from "../utils/importAssets";

const SuccessMessage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center py-12">
      <img
        src={getImageUrl("icon-thank-you")}
        alt="check icon"
        className="w-[_clamp(40px,40px+5vw,85px)]"
      />
      <h1 className="mt-8 text-2xl font-bold tablet:mb-3 tablet:text-5xl">Thank You!</h1>
      <p className="mt-3 text-center text-cool-gray tablet:text-xl">
        {" "}
        Thanks for confirming your subscription! We hope you have fun using our
        platform. IF you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
export default SuccessMessage;
