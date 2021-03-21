import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../../styles/components/pay-mode.module.scss'

import Link from 'next/link'
import Router from 'next/router'

const PayMode = () => {
  /*
  *
  */
  const goToRegister = () => {
    Router.push('/register')
  }

  return (
    <div className={styles.payMode}>
      <h3 className={styles.title}>Nos moyens de paiement</h3>
      <ul  className={styles.list}>
        <li className={styles.listItem+' '+styles.mtn}><img src="/images/uplode/mtn.png" alt="mtn"/></li>
        <li className={styles.listItem+' '+styles.moov}><img src="/images/uplode/moov.png" alt="moov"/></li>
        <li className={styles.listItem+' '+styles.visa}><img src="/images/uplode/visa.png" alt="visa"/></li>
        <li className={styles.listItem+' '+styles.mastercard}><img src="/images/uplode/mastercard.png" alt="mastercard"/></li>
      </ul> 
      <div className={styles.text}>
        Qui laborum reprehenderit sint eu incididunt. Mollit velit dolor mollit duis est do pariatur cillum dolore officia.
        Sit voluptate fugiat minim non officia Lorem. Qui laborum reprehenderit sint eu incididunt. Mollit velit dolor 
        mollit duis est do pariatur cillum dolore officia. Sit voluptate fugiat minim non officia Lorem. 
        Qui laborum reprehenderit sint eu incididunt.
        Mollit velit dolor mollit duis est do pariatur cillum dolore officia. Sit voluptate fugiat minim non officia Lorem.
      </div>
      <div className={styles.btnWrap}>
        <button className={styles.btn+ ' cpn-btn cpn-btn__orange'} onClick={goToRegister}>S’inscrir maintenant</button>
      </div>

    </div>
  )
}

export default PayMode
