import Head from 'next/head'
import Image from 'next/image'
import TopCTA from '../components/TopCTA'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import Logosection from '../components/Logosection'
import Scalesection from '../components/Scalesection'
import QuoteBox from '../components/QuoteBox'
import TwoByTwo from '../components/TwoByTwo'
import CaseStudies from '../components/CaseStudies'
import PricingContact from '../components/PricingContact'
import Footer from '../components/Footer'




export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create PlanetScale</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className=''>
        <TopCTA/>
        <Navbar/>
        <Herosection/>
        <Logosection/>
        <Scalesection/>
        <QuoteBox />
        <TwoByTwo/>
        <CaseStudies />
        <PricingContact/>
        <Footer/>
      </div>
      <footer className=''>
      </footer>
    </div>
  )
}
