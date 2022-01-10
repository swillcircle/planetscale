import SVG from "react-inlinesvg";
import ContentBlock from "./ContentBlock";

const Scalesection = () => {
  return (
    <section className="relative pt-60 pb-56 bg-gray-900 px-6">
      <div className="container relative flex flex-col justify-between mx-auto mt-3">
        <div className="relative flex flex-col lg:flex-row justify-between items-center">
          <ContentBlock
            metaTitle="Scale"
            contentHeader={
              <>
                <span className="text-gray-400">Scale with the</span> <br />
                database experts
              </>
            }
            contentDetail="Don't wait until it's too late to decide to scale your data. Rely on the database that is built on software that has scaled the world's biggest companies. Get ahead of your future scale today."
            contentTextCta="Set up a database consultation"
            metaTitleColor="purple"
          />
          <div className="relative w-full lg:ml-auto max-w-[680px]">
            <SVG src="/svg/ScaleGraph.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scalesection;
