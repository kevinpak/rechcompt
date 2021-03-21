import Head from 'next/head'
import Header from './../components/header'
import Footer from './../components/footer'
import GoUpThePage from './../components/anchors/go-up-the-page'

const LandingPage = (props) => {
  return (
    <>
      <Head>
      </Head>
      <div className="wrapper">
        <Header />
        <main className="main">
          {props.children}
        </main>
        <Footer />
      </div>
      <GoUpThePage />
    </>
  )
}

export default LandingPage