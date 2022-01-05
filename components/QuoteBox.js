const QuoteBox = () => {
  return (
    <section className="relative bg-custom-grad px-6 lg:px-48">
      <div className="container px-0 mx-auto">
        <div className="relative before-screen">
          <div className="z-10 h-fit bg-gradient-to-b lg:bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 flex flex-col justify-center content-center xl:flex-row lg:items-center relative w-full max-w-[1220px] rounded text-white overflow-hidden mx-auto px-8 py-16 lg:pr-12 lg:pl-20 lg:py-10 button-box-shadow ">
            <div className="pb-5">
              <svg width="251" height="48" viewBox="0 0 251 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.1315 15.7615C33.0238 24.6508 16.9148 6.85786 0.807124 15.4784C0.634905 15.571 0.427979 15.4457 0.427979 15.2487V2.79293C0.427979 2.69636 0.479386 2.60762 0.562926 2.56194C16.6706 -6.32736 32.7796 11.4656 48.8873 2.84512C49.0595 2.75247 49.2665 2.87775 49.2665 3.07479V15.5305C49.2665 15.6258 49.215 15.7158 49.1315 15.7615Z" fill="#FAFBFC"/>
                <path d="M49.1314 32.7267C33.0238 41.6161 16.9148 23.823 0.807117 32.4435C0.634899 32.5362 0.427979 32.4109 0.427979 32.2139V19.758C0.427979 19.6615 0.479386 19.5727 0.562925 19.527C16.6706 10.6377 32.7796 28.4308 48.8873 19.8102C49.0595 19.7176 49.2664 19.8429 49.2664 20.0399V32.4958C49.2664 32.591 49.215 32.681 49.1314 32.7267Z" fill="#FAFBFC"/>
                <path d="M0.427979 36.7039V47.1005C0.427979 47.3328 0.704299 47.4489 0.866241 47.2845L13.8302 34.1213C13.8302 34.1213 10.1288 33.6098 6.22688 34.3784C2.87889 35.0387 1.00633 36.1753 0.542364 36.4846C0.470392 36.5342 0.427979 36.6164 0.427979 36.7039Z" fill="#FAFBFC"/>
                <path d="M72.4307 10.2067C77.0345 10.2067 80.1368 12.6453 81.1374 16.8453H76.1004C75.5665 15.2534 74.3326 14.2372 72.3972 14.2372C69.7958 14.2372 68.0609 16.2357 68.0609 19.8937C68.0609 23.5518 69.7958 25.5162 72.3972 25.5162C74.3326 25.5162 75.533 24.6357 76.1004 22.9421H81.1374C80.1368 26.9389 77.0345 29.5808 72.4307 29.5808C67.0932 29.5808 63.2908 25.7872 63.2908 19.8937C63.2908 14.0002 67.0932 10.2067 72.4307 10.2067Z" fill="#FAFBFC"/>
                <path d="M93.0006 29.5808C87.6631 29.5808 83.6266 25.7872 83.6266 19.8937C83.6266 13.9663 87.7966 10.2067 93.134 10.2067C98.4709 10.2067 102.641 13.9663 102.641 19.8937C102.641 25.7872 98.3709 29.5808 93.0006 29.5808ZM93.0006 25.4485C95.4691 25.4485 97.8371 23.6195 97.8371 19.8937C97.8371 16.134 95.5355 14.3389 93.067 14.3389C90.5984 14.3389 88.3633 16.134 88.3633 19.8937C88.3633 23.6195 90.4985 25.4485 93.0006 25.4485Z" fill="#FAFBFC"/>
                <path d="M130.073 18.911C130.073 15.9303 128.772 14.3722 126.304 14.3722C123.802 14.3722 122.501 15.9303 122.501 18.911V29.2756H117.831V18.911C117.831 15.9303 116.53 14.3722 114.062 14.3722C111.527 14.3722 110.226 15.9303 110.226 18.911V29.2756H105.555V10.5109H110.226V12.7803C111.393 11.2222 113.027 10.24 115.329 10.24C118.198 10.24 120.233 11.4932 121.501 13.8303C122.701 11.6964 124.803 10.24 127.505 10.24C131.942 10.24 134.744 13.0851 134.744 18.2674V29.2756H130.073V18.911Z" fill="#FAFBFC"/>
                <path d="M162.732 18.911C162.732 15.9303 161.431 14.3722 158.962 14.3722C156.461 14.3722 155.16 15.9303 155.16 18.911V29.2756H150.49V18.911C150.49 15.9303 149.189 14.3722 146.72 14.3722C144.185 14.3722 142.884 15.9303 142.884 18.911V29.2756H138.213V10.5109H142.884V12.7803C144.051 11.2222 145.686 10.24 147.988 10.24C150.856 10.24 152.891 11.4932 154.159 13.8303C155.36 11.6964 157.461 10.24 160.163 10.24C164.6 10.24 167.402 13.0851 167.402 18.2674V29.2756H162.732V18.911Z" fill="#FAFBFC"/>
                <path d="M187.262 29.1939H182.559V26.8229C181.391 28.4148 179.69 29.431 177.388 29.431C173.085 29.431 170.316 26.5858 170.316 21.4375V10.4294H174.987V20.7601C174.987 23.7745 176.287 25.4003 178.755 25.4003C181.291 25.4003 182.559 23.7745 182.559 20.7601V10.4294H187.262V29.1939Z" fill="#FAFBFC"/>
                <path d="M203.007 18.8217C203.007 15.8072 201.706 14.1814 199.237 14.1814C196.702 14.1814 195.401 15.8072 195.401 18.8217V29.1862H190.731V10.4217H195.401V12.7588C196.603 11.1668 198.27 10.1508 200.639 10.1508C204.942 10.1508 207.677 12.9959 207.677 18.1782V29.1862H203.007V18.8217Z" fill="#FAFBFC"/>
                <path d="M210.66 4.38789C210.66 2.82983 211.861 1.61047 213.529 1.61047C215.163 1.61047 216.398 2.82983 216.398 4.38789C216.398 5.94595 215.163 7.16528 213.529 7.16528C211.861 7.16528 210.66 5.94595 210.66 4.38789ZM211.16 10.4169H215.83V29.1813H211.16V10.4169Z" fill="#FAFBFC"/>
                <path d="M220.945 14.3116H218.744V10.4164H220.945V5.776H225.649V10.4164H227.454L229.118 14.3116H225.649V23.3891C225.649 24.6423 226.149 25.1843 227.617 25.1843H229.118V29.181H226.85C223.314 29.181 220.945 27.6568 220.945 23.3552V14.3116Z" fill="#FAFBFC"/>
                <path d="M245.078 10.4169H250.048L238.607 38.0554H233.636L237.639 28.7071L230.233 10.4169H235.471L240.241 23.5249L245.078 10.4169Z" fill="#FAFBFC"/>
              </svg>
            </div>
            <div className="relative">
              <div className="flex flex-col py-5 my-auto lg:flex-row lg:ml-10 h-fit">
                <div className="lg:translate-x-[-10px] lg:translate-y-[-10px]">
                  <svg width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50"><path d="M30.5149 40.8978V0.0263672L48 19.4346V40.8978H30.5149ZM0 40.8978V0.0263672L17.4851 19.4346V40.8978H0Z" fill="#ffffff"></path></svg>
                </div>
                <div>
                  <p className="text-2xl lg:text-[28px] text-color-gray-50">The last thing we wanted to pay for was an engineering team to host our own database, especially when we were trying to get a product in the market. You dont need to hire engineers to manage databases if you can pay somebody else to do it.</p>
                </div>
              </div>
              <div className="flex flex-col my-auto xl:flex-row xl:justify-end lg:ml-[5.5rem] h-fit xl:ml-[5.5rem]">
                <div>
                  <p className="font-semibold text-xl lg:text-2xl">Karl Matthias</p>
                  <p className="text-purple-200 text-lg lg:text-[22px]">Engineering Director, Community.com</p>
                </div>
                <div className="pt-5 xl:ml-12 xl:pt-0">
                  <a className="box-border relative inline-flex items-center justify-center text-center no-underline leading-none whitespace-nowrap font-semibold rounded text-sm sm:text-base py-3 px-6 cursor-pointer mt-2 lg:mt-0 text-[18px] bg-gray-50 text-gray-800 button-box-shadow" href="#">
                    Read the case study
                    <svg className="transition-transform inline mb-xs ml-2 arrow-hover"width="8" height="8" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.919312 9.19995L4.15257 5.32004C4.30709 5.13462 4.30709 4.86528 4.15257 4.67986L0.919311 0.799952" stroke="#2B2C34" strokeLinecap="round" strokeLinejoin="round"/></svg>
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