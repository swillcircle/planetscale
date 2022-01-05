const TopCTA = () => {
  return (
<section className="bg-purple-600 relative">
  <div className="container mx-auto">
    <div className="flex justify-center items-center relative py-4 ">
        <p className='text-[12px] sm:text-[16px] font-semibold text-gray-50'>New deployment and branch regions
        <span>
          <a href="" className='text-gray-200 hover:text-gray-50'>&nbsp;&nbsp;Read More
            <svg className="inline mb-xs ml-2"width="4.8" height="8.6" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.919312 9.19995L4.15257 5.32004C4.30709 5.13462 4.30709 4.86528 4.15257 4.67986L0.919311 0.799952" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </span>
        </p>
        <a href="" className='absolute right-5 text-white flex justify-center'>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 0.5L0.5 7.5" stroke="#FAFBFC" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M0.5 0.5L7.5 7.5" stroke="#FAFBFC" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
  </div>
</section>
  )
}

export default TopCTA