const PricingContact = () => {
  return (
  <section className="relative bg-gray-800 pb-48 sm:pb-44 px-6">
    <div className="container mx-auto lg:px-24">
      <div className="relative lg:gap-x-11">
        <div className="order-2 lg:order-1 px-[1px] py-[1px] bg-gradient-to-br from-purple-300 via-purple-600 to-purple-800 rounded button-box-shadow ">
          <div className="relative h-full  pt-8 pb-12 rounded-[3px] bg-custom-grad-purple lg:px-12">
            <h3 className="text-lg text-center text-purple-400 comment pb-4">Enterprise cloud pricing</h3>
            <h4 className="text-[40px] text-center leading-[44px] text-gray-50 inter pb-6 px-2">Introducing resource-based <br />pricing for organizations.</h4>
            <p className="text-xl text-center text-gray-300 px-2">Ignore all the other pricing. No matter what you need we can put together a quote for you. </p>
            <div className="flex flex-col justify-center items-center sm:flex-row lg:opacity-95 mt-6">
              <a className="text-center leading-none whitespace-nowrap font-medium rounded text-lg max-w-fit mx-3 my-3 py-3 px-6 cursor-pointer bg-purple-500 border-purple-500 hover:bg-purple-600 text-gray-50 transition button-box-shadow" href="#">
                Contact sales
              </a>
              <a className="text-center leading-none whitespace-nowrap font-medium rounded text-lg max-w-fit mx-3 my-3 py-3 px-6 cursor-pointer bg-transparent  border-purple-500 border-solid border-[1px]  text-gray-50 button-box-shadow hover:bg-gray-50 hover:text-purple-500 transition" href="#">
                Get started
                <svg className="inline mb-1 ml-2 arrow-hover transition-transform" width="8" height="8" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.919312 9.19995L4.15257 5.32004C4.30709 5.13462 4.30709 4.86528 4.15257 4.67986L0.919311 0.799952" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PricingContact