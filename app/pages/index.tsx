import LandingPage from './../layouts/landing-page'
import HomeBanner from './../components/banner/home-banner'
import Services from './../components/services/services'
import Partners from './../components/partners/partners'
import HowItWork from './../components/how-it-work/how-it-work'
import Contact from './../components/contacts/contact'

const Home = () => {
  return (
    <LandingPage>
      <HomeBanner />
      <Services />
      <Partners />
      <HowItWork />
      <Contact />
    </LandingPage>
  )
}

export default Home