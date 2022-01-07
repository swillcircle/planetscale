import Github from './subComponents/Github'
import NewRelic from './subComponents/NewRelic'
import Airbnb from './subComponents/Airbnb'
import SlackSVG from './subComponents/SlackSVG'
import SquareSVG from './subComponents/SquareSVG'
import Figma from './subComponents/Figma'
import Community from './subComponents/Community'
import Affirm from './subComponents/Affirm'

const Logosection = () => {
  return (
  <section className="relative bg-gray-800 px-12 sm:pl-6">
    <div className="container py-12 mx-auto lg:px-12">
      <h3 className="mb-6 text-base font-normal text-center text-gray-400 heading-base">Trusted by</h3>
      <div className="grid items-center justify-center grid-cols-2 mx-auto gap-x-2 sm:px-10 lg:grid-cols-4 sm:gap-x-10 gap-y-10 text-gray-50">
        <div className="mr-auto sm:mx-auto py-4 lg:py-6">
          <Github/>
        </div>
        <div className="ml-auto sm:mx-auto py-4 lg:py-6">
          <NewRelic/>
        </div>
        <div className="mr-auto sm:mx-auto py-4 lg:py-6">
          <SlackSVG />
        </div>
        <div className="ml-auto sm:mx-auto py-4 lg:py-6">
          <SquareSVG />
        </div>
        <div className="mr-auto sm:mx-auto py-4 lg:py-6">
          <Airbnb/>
        </div>
        <div className="ml-auto sm:mx-auto py-4 lg:py-6">
          <Figma/>
        </div>
        <div className="mr-auto sm:mx-auto py-4 lg:py-6">
          <Community/>
        </div>
        <div className="ml-auto sm:mx-auto py-4 lg:py-6">
          <Affirm/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Logosection