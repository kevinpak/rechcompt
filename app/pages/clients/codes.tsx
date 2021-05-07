import {useState} from 'react'
import Clients from './../../layouts/clients'
import link from 'next/link'
import styles from './../../styles/components/clients/codes.module.scss'
import Cards from './../../components/cards/cards'
import TableCpn from './../../components/_M-UI/table/table'
import ModalCpn from './../../components/_M-UI/modal/modal'


const Codes = () => {

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Clients title="Codes">
      <div className={styles.codes}>
        <div className={styles.inner}>
          <ul className={styles.listBtns}>
            <li className={styles.item}>
              <button className={`${styles.itemBtn} ${styles.buy} icon-cart icon-left`} onClick={handleShow}>Acheter</button>
            </li>
            <li className={styles.item}>
              <button className={`${styles.itemBtn} ${styles.exchange} icon-wallet icon-left`} onClick={handleShow}>Récupérer</button>
            </li>
          </ul>
          <Cards className={styles.card}>
            <TableCpn />
          </Cards>
        </div>
      </div>
      <ModalCpn show={show} onHide={handleClose}>
        <div className="cpn-form-row">
          <label htmlFor="rrr" className="cpn-form-row__label">Montant</label>
          <input type="text" className="cpn-field"/>
        </div>
      </ModalCpn>
    </Clients>
  )
}

export default Codes