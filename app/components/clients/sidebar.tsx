import styles from './../../styles/components/clients/sidebar.module.scss'
import Logo from './../../components/common/logo'
import Link from 'next/link'
import {useRouter} from 'next/router'

const SideBar = () => {
  const router = useRouter()
  const pathPage = router.asPath

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <Logo />
          </div>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href="/clients" >
                  <a className={`${styles.itemLink} icon-home icon-left ${(pathPage==='/clients')?styles.active:null}`}>Accuiel</a>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/clients/codes" >
                  <a className={`${styles.itemLink} icon-barcode icon-left ${(pathPage==='/clients/codes')?styles.active:null}`}>Codes</a>
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/clients/cards" >
                  <a className={`${styles.itemLink} icon-credit-carte icon-left ${(pathPage==='/clients/cards')?styles.active:null}`}>cartes prépayées</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.footer}>
            <div className={styles.webMaster}>
              Réalisé par <a href="/" className={styles.link}>KevinpakCode</a>
            </div>
           
          </div>
        </div>
      </aside>
    </>
  )
}

export default SideBar