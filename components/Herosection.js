import ContentBlock from "./ContentBlock";

const Herosection = () => {
  return (
    <section className="relative bg-gray-800 pt-24 pb-44 px-6 lg:px-24 xl:px-56">
      <div className="container relative flex items-center justify-between mx-auto">
        <div className="relative flex flex-col mr-auto lg:flex-row max-w-7xl">
          <div className="w-full">
            <div className="relative py-6 mx-auto">
              <ContentBlock
                metaTitle="PlanetScale Cloud"
                contentHeader={
                  <>
                    Let us scale <br />
                    your database.
                    <div className="pt-7">
                      You scale <br /> your business.
                    </div>
                  </>
                }
                contentDetail="The most reliable way to scale your MySQL database in the cloud."
                contentTextCta="Contact sales"
                contentTextCtaHref="#"
                isHeroContentBlock={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
