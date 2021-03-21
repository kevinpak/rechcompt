import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PayMode from './../pay-mode/pay-mode'

import styles from './../../styles/components/how-it-work.module.scss'

import Link from 'next/link'
import Router from 'next/router'

const HowItWork = () => {
  /*
  *
  */
  const goToRegister = () => {
    Router.push('/register')
  }


  return (
    <div className={styles.howItWork} id="how-it-work">
      <Container>
        <Row>
          <Col sm={12}>
            <div className={styles.inner}>
              <h2 className={styles.title}>Comment ça marche ?</h2>
              <ul className={styles.list}>
                <li  className={styles.listItem}>
                  <h3 className={styles.listItemTitle}>Inscription</h3>
                  <div className={styles.listItemText}>
                    Anim officia nisi commodo pariatur velit cillum in minim exercitation nulla.
                    Minim in nulla aute do cillum laborum sint dolor ullamco et. Et excepteur consectetur
                    reprehenderit cillum aute magna non.
                  </div>
                </li>
                <li  className={styles.listItem}>
                  <h3 className={styles.listItemTitle}>Achat de carte prépayé</h3>
                  <div className={styles.listItemText}>
                    Anim officia nisi commodo pariatur velit cillum in minim exercitation nulla.
                    Minim in nulla aute do cillum laborum sint dolor ullamco et. Et excepteur consectetur
                    reprehenderit cillum aute magna non.
                  </div>
                </li>
                <li  className={styles.listItem}>
                  <h3 className={styles.listItemTitle}>Achat de code coupon</h3>
                  <div className={styles.listItemText}>
                    Anim officia nisi commodo pariatur velit cillum in minim exercitation nulla.
                    Minim in nulla aute do cillum laborum sint dolor ullamco et. Et excepteur consectetur
                    reprehenderit cillum aute magna non.
                  </div>
                </li>
                <li  className={styles.listItem}>
                  <h3 className={styles.listItemTitle}>Demande de rembourcement</h3>
                  <div className={styles.listItemText}>
                    Anim officia nisi commodo pariatur velit cillum in minim exercitation nulla.
                    Minim in nulla aute do cillum laborum sint dolor ullamco et. Et excepteur consectetur
                    reprehenderit cillum aute magna non.
                  </div>
                </li>
              </ul>
              <PayMode />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HowItWork
