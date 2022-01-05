import LogoSVG from './subComponents/LogoSVG'

const Navbar = () => {
  return (
    <div className="z-40 bg-primary py-[18px] bg-gray-800 px-6 lg:px-24 xl:px-56">
      <header className="container relative flex items-center justify-between mx-auto">
        <div className="relative z-50 mr-4">
          <a className="text-gray-50" href="#">
            <LogoSVG/>
          </a>
        </div>
        <nav className="transition absolute z-40 lg:bg-transparent top-12 lg:relative lg:top-0 flex items-center justify-between pointer-events-none opacity-0 lg:opacity-100 lg:pointer-events-auto">
          <div className="flex flex-col font-medium lg:flex-row">
            <a href="https://docs.planetscale.com" className="mx-[22px] py-2 text-base font-medium  text-gray-50">Docs</a>
            <a className="mx-[22px] py-2 text-base font-medium text-gray-50" href="/cli">CLI</a>
            <a className="mx-[22px] py-2 text-base font-medium text-gray-50" href="/pricing">Pricing</a>
            <a className="mx-[22px] py-2 text-base font-medium text-gray-50" href="/enterprise">Enterprise</a>
            <a className="ml-[22px] mr-[28px]  py-2 text-base font-medium text-gray-50" href="/blog">Blog</a>
          </div>
          <div className="grid grid-flow-col gap-2.5 lg:opacity-95 ">
            <a className="inline-flex items-center justify-center text-center leading-none whitespace-nowrap font-medium rounded select-none overflow-hidden focus-ring text-lg  py-2.5 px-5 cursor-pointer bg-purple-500 border-purple-500 hover:bg-purple-600 text-gray-50 transition" href="#">
              Get started
            </a>
            <a className="inline-flex items-center justify-center text-center leading-none whitespace-nowrap font-medium rounded select-none overflow-hidden focus-ring text-lg  py-2.5 px-4 cursor-pointer bg-transparent  border-purple-500  border-solid border-[1px]  text-gray-50 hover:bg-gray-50 hover:text-purple-500 transition" href="#">
              Login
            </a>
          </div>
        </nav>
        <button aria-label="Open navigation menu" className="relative z-50 flex flex-col appearance-none focus:outline-none lg:hidden">
          <div className="w-8 h-0.5 bg-gray-50 mb-[8px]"></div>
          <div className="w-8 h-0.5 bg-gray-50 mb-[8px]"></div>
          <div className="w-8 h-0.5 bg-gray-50"></div>
        </button>
      </header>
    </div>
  )
}

export default Navbar