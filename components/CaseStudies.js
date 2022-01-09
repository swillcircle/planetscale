import SVG from 'react-inlinesvg'


const CaseStudies = () => {
  return (
  <section className="relative bg-gray-800 pb-48 sm:py-36 px-6 lg:pb-28">
    <div className="container mx-auto lg:px-24">
      <h3 className="text-lg text-center text-purple-400 comment">Case studies</h3>
      <h4 className="text-[54px] text-center text-gray-50 inter pb-16 leading-none">What are we doing <span className="text-gray-400">for our customers</span></h4>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-x-11 gap-y-12">
        <div className="px-[1px] py-[1px] bg-gradient-to-b from-purple-300 via-purple-500 to-purple-500 rounded button-box-shadow transition-transform transform-scale">
          <div className="relative h-full bg-gradient-to-b from-purple-500 via-purple-600 to-purple-700 px-12 pt-8 pb-8 rounded-[3px] ">
            <a href="">
              <div className="flex justify-between text-gray-50 pb-9">
                <SVG src='/svg/Square.svg'/>
                <SVG src='/svg/NewWindow.svg'/>
              </div>
              <div className="flex text-gray-50">
                <div>
                  <SVG src='/svg/CheckMark.svg'/>
                </div>
                <p className="text-xl text-gray-50">Enabled ‘near unlimited scale’ for Cash App</p>
              </div>
              <div className="flex  text-gray-50 pt-4">
                <div>
                  <SVG src='/svg/CheckMark.svg'/>
                </div>
                <p className="text-xl text-gray-50">Only 5% of the system had to be changed to implement Vitess</p>
              </div>
              <div className="flex  text-gray-50 pt-4">
                <div>
                  <SVG src='/svg/CheckMark.svg'/>
                </div>
                <p className="text-xl text-gray-50">10 shard splits a week with less than 1 second of downtime</p>
              </div>
            </a>
          </div>
        </div>
        <div className="bg-gray-700 px-[1px] py-[1px] rounded button-box-shadow transition-transform transform-scale">
          <div className="h-full bg-gray-800 px-12 pt-8 pb-12 rounded-[3px]">
            <a href="">
                <div className="flex justify-between text-gray-300 pb-9">
                  <SVG src='/svg/Slack.svg'/>
                  <SVG src='/svg/NewWindow.svg'/>
                </div>
                <div className="flex  text-green-500">
                  <div>
                    <SVG src='/svg/CheckMark.svg'/>
                  </div>
                  <p className="text-xl text-gray-300">~500,000 queries per second at peak times</p>
                </div>
                <div className="flex  text-green-500 pt-4">
                  <div>
                    <SVG src='/svg/CheckMark.svg'/>
                  </div>
                  <p className="text-xl text-gray-300 ">Added connection latency with Vitess is only around 1 millisecond on average</p>
                </div>
                <div className="flex  text-green-500 pt-4">
                  <div>
                    <SVG src='/svg/CheckMark.svg'/>
                  </div>
                  <p className="text-xl text-gray-300">~20 billion total queries per day</p>
                </div>
              </a>
          </div>
        </div>
        </div>
    </div>
  </section>
  )
}

export default CaseStudies