import SVG from 'react-inlinesvg'

const Scalesection = () => {
  return (
    <section className="relative pt-60 pb-56 bg-gray-900 px-6">
      <div className="container relative flex flex-col justify-between mx-auto mt-3">
        <div className="relative flex flex-col lg:flex-row justify-between items-center">
          <div className=" lg:ml-auto">
            <div className=" py-7 pb-24 lg:pb-0 lg:pr-4 2xl:pr-7 mx-auto">
              <h1 className="text-base text-purple-500 comment mb-6">Scale</h1>
              <h2 className="text-5xl mb-6 font-medium text-gray-400">Scale with the <br /><span className="text-gray-50">database experts</span></h2>
              <p className="text-2xl mb-9 text-gray-300 md:max-w-none lg:max-w-[430px] font-normal leading-tight">Don&apos;t wait until it&apos;s too late to decide to scale your data. Rely on the database that is built on software that has scaled the world&apos;s biggest companies. Get ahead of your future scale today.</p>
              <a href="" className='flex items-center text-xl font-semibold text-blue-400 after-arrow'>Set up a database consultation
              </a>
            </div>
          </div>
          <div className="relative w-full lg:ml-auto max-w-[680px]">
            <SVG src='/svg/ScaleGraph.svg'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Scalesection