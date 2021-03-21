import Header from './../components/clients/header'
import Footer from './../components/clients/footer'
import SideBar from './../components/clients/sidebar'
import MainClients from './../components/clients/main'

import styles from './../styles/components/clients/clients.module.scss'
import link from 'next/link'

const Clients = (props) => {
  return (
    <>
      <div className={styles.clients}>
        <SideBar />
        <MainClients>
          <Header />
          <div className={styles.inner}>
            {props.title&&<h1 className={styles.title}>{props.title}</h1>}
            {props.children}
          </div>
          <Footer />
        </MainClients>
      </div>
    </>
  )
}

export default Clients