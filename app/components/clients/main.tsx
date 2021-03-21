
import styles from './../../styles/components/clients/main-clients.module.scss'
import link from 'next/link'

const MainClients = (props) => {
  return (
    <>
      <div className={styles.mainClients}>
        {props.children}
      </div>
    </>
  )
}

export default MainClients