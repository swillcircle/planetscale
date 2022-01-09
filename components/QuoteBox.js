import SVG from 'react-inlinesvg'


const QuoteBox = () => {
  return (
    <section className="relative bg-custom-grad px-6 lg:px-48">
      <div className="container px-0 mx-auto">
        <div className="relative before-screen">
          <div className="z-10 h-fit bg-gradient-to-b lg:bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 flex flex-col justify-center content-center xl:flex-row lg:items-center relative w-full max-w-[1220px] rounded text-white overflow-hidden mx-auto px-8 py-16 lg:pr-12 lg:pl-20 lg:py-10 button-box-shadow ">
            <div className="pb-5 mr-auto max-w-full xl:w-full">
              <SVG src='/svg/Community.svg'/>
            </div>
            <div className="relative mr-auto">
              <div className="flex flex-col py-5 my-auto lg:flex-row lg:ml-7 h-fit">
                <div className="lg:translate-x-[-10px] lg:translate-y-[-10px]">
                  <svg width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50"><path d="M30.5149 40.8978V0.0263672L48 19.4346V40.8978H30.5149ZM0 40.8978V0.0263672L17.4851 19.4346V40.8978H0Z" fill="#ffffff"></path></svg>
                </div>
                <div>
                  <p className="text-2xl lg:text-[28px] text-color-gray-50">The last thing we wanted to pay for was an engineering team to host our own database, especially when we were trying to get a product in the market. You dont need to hire engineers to manage databases if you can pay somebody else to do it.</p>
                </div>
              </div>
              <div className="flex flex-col my-auto xl:flex-row xl:justify-end lg:ml-[4.75rem] h-fit">
                <div>
                  <p className="font-semibold text-xl lg:text-2xl">Karl Matthias</p>
                  <p className="text-purple-200 text-lg lg:text-[22px]">Engineering Director, Community.com</p>
                </div>
                <div className="pt-5 xl:ml-12 xl:pt-0">
                  <a className="box-border relative inline-flex items-center justify-center text-center no-underline leading-none whitespace-nowrap font-semibold rounded text-sm sm:text-base py-3 px-6 cursor-pointer mt-2 lg:mt-0 text-[18px] bg-gray-50 text-gray-800 button-box-shadow after-arrow" href="#">
                    Read the case study
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        )
      }

      export default QuoteBox