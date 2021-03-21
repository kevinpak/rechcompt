import Clients from './../../layouts/clients'
import styles from './../../styles/components/clients/home.module.scss'
import link from 'next/link'

const Home = () => {
  return (
    <Clients title="Accuiel">
      <div className={styles.home}>
        <div className={styles.inner}>
          <h2 className={styles.title}>Bienvenue sur RechCount</h2>
        </div>
      </div>
    </Clients>
  )
}

export default Home