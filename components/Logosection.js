import SVG from "react-inlinesvg";

const Logosection = () => {
  return (
    <section className="relative bg-gray-800 px-12 sm:pl-6">
      <div className="container py-12 mx-auto lg:px-12">
        <h3 className="mb-6 text-base font-normal text-center text-gray-400 heading-base">
          Trusted by
        </h3>
        <div className="grid items-center justify-center grid-cols-2 mx-auto gap-x-2 sm:px-10 lg:grid-cols-4 sm:gap-x-10 gap-y-10 text-gray-50">
          <div className="mr-auto sm:mx-auto py-4 lg:py-6">
            <SVG src="/svg/GitHub.svg" />
          </div>
          <div className="ml-auto sm:mx-auto py-4 lg:py-6">
            <SVG src="/svg/NewRelic.svg" />
          </div>
          <div className="mr-auto sm:mx-auto py-4 lg:py-6">
            <SVG src="/svg/Slack.svg" />
          </div>
          <div className="ml-auto sm:mx-auto py-4 lg:py-6">
            <SVG src="/svg/Square.svg" />
          </div>
          <div className="mr-auto sm:mx-auto py-4 lg:py-6">
            <SVG src="/svg/Airbnb.svg" />
          </div>
          <div className="ml-auto sm:mx-auto py-4 lg:py-6">
            <SVG src="/svg/Figma.svg" />
          </div>
          <div className="mr-auto sm:mx-auto py-4 lg:py-6">
            <div className="max-w-[185px]">
              <SVG src="/svg/Community.svg" />
            </div>
          </div>
          <div className="ml-auto sm:mx-auto py-4 lg:py-6">
            <SVG src="/svg/Affirm.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logosection;
