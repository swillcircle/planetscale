import LogoSVG from './subComponents/LogoSVG'
import FacebookSVG from './subComponents/FacebookSVG'
import TwitterSVG from './subComponents/TwitterSVG'
import LinkedInSVG from './subComponents/LinkedInSVG'

const Footer = () => {
  return (
<footer className="text-primary bg-gray-900 bg-primary pt-20 pb-8 px-6 lg:px-24 xl:px-56">
    <div className="container mx-auto">
      <div className="text-gray-100 grid grid-cols-6 gap-x-4 gap-y-8">
        <div className="text-gray-50 col-span-2 col-start-2 sm:col-auto">
          <LogoSVG/>
        </div>
        <div className="text-xs col-span-2 col-start-2  sm:col-span-1">
          <h6 className="text-sm font-semibold text-gray-400 pb-5">Company</h6>
          <ul>
            <li className='pb-3'>
              <a href="">News & Press</a>
            </li>
            <li className='pb-3'>
              <a href="">About Us</a>
            </li>
            <li className='pb-3'>
              <a href="">Careers</a>
            </li>
            <li className='pb-3'>
              <a href="">Partners</a>
            </li>
            <li className='pb-3'>
              <a href="">Media</a>
            </li>
            <li className='pb-3'>
              <a href="">Events</a>
            </li>
            <li className='pb-3'>
              <a href="">Events</a>
            </li>
            <li className='pb-3'>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div className="text-xs col-span-2 col-start-4  sm:col-span-1">
          <h6 className="text-sm font-semibold text-gray-400 pb-5">Products</h6>
          <ul>
          <li className='pb-3'>
              <a href="">Login / Sign Up</a>
            </li>
            <li className='pb-3'>
              <a href="">Product overview</a>
            </li>
            <li className='pb-3'>
              <a href="">CLI</a>
            </li>
            <li className='pb-3'>
              <a href="">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="text-xs col-span-2 col-start-2  sm:col-span-1">
          <h6 className="text-sm font-semibold text-gray-400 pb-5">Open Source</h6>
          <ul>
            <li className='pb-3'>
              <a href="">Vitess</a>
            </li>
            <li className='pb-3'>
              <a href="">Community</a>
            </li>
            <li className='pb-3'>
              <a href="">Downloads</a>
            </li>
            <li className='pb-3'>
              <a href="">Partners</a>
            </li>
          </ul>
        </div>
        <div className="text-xs col-span-2 col-start-4  sm:col-span-1">
          <h6 className="text-sm font-semibold text-gray-400 pb-5">Support</h6>
          <ul>
            <li className='pb-3'>
              <a href="">Open Support Ticket</a>
            </li>
            <li className='pb-3'>
              <a href="">Status</a>
            </li>
          </ul>
        </div>
        <div className="text-xs col-span-2 col-start-2  sm:col-span-1">
          <h6 className="text-sm font-semibold text-gray-400 pb-5">Talk To Us</h6>
          <ul>
            <li className='pb-3'>
              <a href="">Call +1-669-237-1085</a>
            </li>
            <li className='pb-3'>
              <a href="">Contact Sales</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-6 sm:flex sm:justify-between sm:flex-row text-xs pt-16 sm:pt-4">
        <div className='flex text-gray-400 mt-auto col-start-2 col-end-5 col-span-6'>
          <a href="">
            <FacebookSVG/>
          </a>
          <a href="" className=' px-4'>
            <TwitterSVG/>
          </a>
          <a href="">
            <LinkedInSVG/>
          </a>
        </div>
        <div className='relative col-start-2 col-end-6 col-span-6 mt-10'>
          <form className="flex flex-col gap-1 sm:flex-row text-gray-50">
            <input type="email" name="email" aria-label="Enter your email to subscribe to our newsletter" className="input mr-2 text-xs bg-transparent border-b border-gray-400 outline-none text-primary w-full text-gray-50" placeholder="Get our newsletter" required=""></input>
              <button type="submit" className="box-border inline-flex items-center justify-center text-center no-underline leading-none whitespace-nowrap font-semibold rounded transition select-none py-2 px-2.5 cursor-pointer mt-2 border border-solid border-purple-500 text-gray-50 text-xs">Subscribe</button>
          </form>
          <div className="flex flex-wrap text-gray-50 mt-10 sm:mb-0">
            <a href="">Privacy</a>
            <a href="" className='mx-5'>Terms</a>
            <div className='w-full sm:w-auto'><p className='text-gray-400 col-span-6'>©2021 PlanetScale Inc. All rights reserved</p></div>
          </div>
        </div>
      </div>
    </div>
</footer>
  )
}

export default Footer