const Herosection = () => {
  return (
  <section className="relative bg-gray-800 pt-24 pb-44 px-6 lg:px-24 xl:px-56">
    <div className="container relative flex items-center justify-between mx-auto">
      <div className="relative flex flex-col mr-auto lg:flex-row max-w-7xl">
        <div className="w-full">
          <div className="relative py-6 mx-auto">
            <h1 className="text-sm md:text-base text-gray-300 comment mb-6">PlanetScale Cloud</h1>
            <h2 className="text-5xl md:text-7xl mb-8 font-medium text-gray-50">Let us scale <br />your database.<div className="pt-7">You scale <br /> your business.</div></h2>
            <p className="text-xl md:text-3xl mb-12 text-gray-300 lg:max-w-[550px] font-normal leading-tight">The most reliable way to scale your MySQL database in the cloud.</p>
            <a className="inline-flex items-center justify-center text-center leading-none whitespace-nowrap font-medium rounded select-none overflow-hidden focus-ring text-lg  py-3 px-6 cursor-pointer bg-purple-500 border-purple-500 hover:bg-purple-600 text-gray-50 transition button-box-shadow" href="https://auth.planetscale.com/sign-up">
            Contact sales
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Herosection