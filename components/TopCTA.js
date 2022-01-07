import Arrow from './subComponents/Arrow'
import CloseX from './subComponents/CloseX'


const TopCTA = () => {
  return (

<section className="bg-purple-600 relative">
  <div className="container mx-auto">
    <div className="flex justify-center items-center relative py-4 ">
        <p className='text-[12px] sm:text-[16px] font-semibold text-gray-50'>New deployment and branch regions
        <span>
          <a href="" className='text-gray-200 hover:text-gray-50'>&nbsp;&nbsp;Read More<Arrow/>
          </a>
        </span>
        </p>
        <a href="" className='absolute right-5 text-white flex justify-center'>
          <CloseX/>
        </a>
      </div>
  </div>
</section>
  )
}

export default TopCTA