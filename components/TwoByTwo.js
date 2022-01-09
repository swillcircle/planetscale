import SVG from 'react-inlinesvg'


const TwoByTwo = () => {
  return (
    <section className="relative bg-gray-800 px-6 py-48 sm:py-36 lg:pt-64">
      <div className="container mx-auto">
        {/* Section One  */}
        <div className="relative grid grid-cols-1 pb-48 lg:grid-cols-2 lg:pb-64 overflow-visible">
          <div className="relative order-2 lg:order-1 2xl:mr-32 overflow-visible">
            <div className="absolute z-10 hidden sm:block">
              <SVG src='/svg/DeployBg.svg'/>
            </div>
            <div className="relative z-20 sm:mt-20 sm:ml-28 overflow-visible button-box-shadow">
              <SVG src='/svg/DeployFrt.svg'/>
            </div>
          </div>
          <div className="order-1 pb-24 lg:pb-0 lg:order-2 lg:ml-32 lg:mr-4 xl:max-w-[410px]">
            <div>
              <SVG src='/svg/WorkflowIcon.svg'/>
            </div>
            <div>
              <p className="text-base md:text-lg text-yellow-200 font-mono mt-8 mb-6">Developer Workflow</p>
              <h3 className="text-3xl text-gray-50 mb-6">Accelerate development</h3>
              <p className="text-xl text-gray-50">Your developers love PlanetScale. With PlanetScale’s unique data-branching there is no need for cumbersome internal orchestration to make sure you don’t hurt production. Get automated and seamless schema changes out of the box and fully integrated with your database using the programming languages your developers already know.</p>
            </div>
          </div>
        </div>
        {/* Two  */}
        <div className="relative grid grid-cols-1 pb-24 lg:grid-cols-2 lg:pb-64">
          <div className="order-1 pb-24 lg:pb-0 lg:ml-20 lg:mr-4">
            <div>
              <SVG src='/svg/ScalingIcon.svg'/>
            </div>
            <div>
              <p className="text-base md:text-lg text-yellow-200 font-mono mt-8 mb-6">Horizontal Scaling</p>
              <h3 className="text-3xl text-gray-50 mb-6"><span className="text-gray-300">Scale</span> at your fingertips</h3>
              <p className="text-xl text-gray-50">With PlanetScale your developers have more tools to scale. PlanetScale gives your dev teams unlimited numbers of database shards (horizontal scaling) and unlimited client connections -- all without adding complexity to your application.</p>
            </div>
          </div>
          <div className="relative order-2 grid grid-cols-12 grid-rows-5 max-h-[400px] lg:max-h-[550px]">
            <div className="z-10 col-start-1 col-end-6 row-start-1 row-end-4 ml-[-50px]">
              <SVG src='/svg/DeveloperWorkflowBG.svg'/>
            </div>
            <div className="z-20 col-start-3 col-end-10 row-start-2 row-end-4 mt-4 ml-0 md:mt-12 md:ml-4 lg:mt-4 lg:ml-4">
              <SVG src='/svg/DeveloperWorkflowMid.svg'/>
            </div>
            <div className="z-30 col-start-3 col-end-13 row-start-2 row-end-5 mt-16 ml-12 md:mt-24 md:ml-16 lg:mt-16 lg:ml-16">
              <SVG src='/svg/DeveloperWorkflowFrt.svg'/>
            </div>
          </div>
        </div>
        {/* Three  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 2xl:flex">
          <div className="order-2 lg:col-span-7 lg:pr-4 lg:order-1 max-w-[840px]">
            <div className="relative grid grid-cols-1 items-center justify-items-center">
              <div className="z-10 w-full col-start-1 col-end-1 row-start-1 row-end-1">
                <SVG src='/svg/PowerModuleBG.svg'/>
              </div>
              <div className="relative z-20 grid grid-cols-3 col-start-1 col-end-1 row-start-1 row-end-1 px-12 gap-x-2 md:px-24 sm:gap-x-4 lg:px-16 lg:gap-x-3 xl:px-24 xl:gap-x-4">
              <div>
                <SVG src='/svg/BoatWheel.svg'/>
              </div>
                <div>
                  <SVG src='/svg/MySQL.svg'/>
                </div>
                <div>
                  <SVG src='/svg/VpScale.svg'/>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 pb-24 lg:col-span-5 lg:order-2  lg:pb-0 2xl:max-w-[510px]">
            <div>
              <SVG src='/svg/GearIcon.svg'/>
            </div>
            <div>
              <p className="text-base md:text-lg text-yellow-200 font-mono mt-8 mb-6">Reliability</p>
              <h3 className="text-3xl text-gray-50 mb-6">Battle tested technology</h3>
              <p className="text-xl text-gray-50">Don’t let your data layer take down your business. Rely on the tech that powers Slack, GitHub and everyone who needs to truly never lose a write to their database. MySQL has been reliable forever, now it’s also easy to manage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        )
      }

      export default TwoByTwo