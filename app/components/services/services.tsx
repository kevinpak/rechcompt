import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../../styles/components/services.module.scss'

import Link from 'next/link'
import Router from 'next/router'

const Services = () => {
  /*
  *
  */
  const goToRegister = () => {
    Router.push('/register')
  }

  return (
    <div className={styles.services} id="services">
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className={styles.title}>Que proposons nous ?</h2>
            <div className={styles.subTitle}>Qui laborum reprehenderit sint eu incididunt. Mollit velit dolor mollit duis est do pariatur cillum dolore officia. Sit voluptate fugiat minim non officia Lorem. Qui laborum reprehenderit sint eu incididunt. Mollit velit dolor mollit duis est do pariatur cillum dolore officia. Sit voluptate fugiat</div>
            <div className={styles.inner}>
              <ul className={styles.list}>
                <li className={styles.listItem}><a href="#" className={styles.listItemLink}>Vente de Code d'achat</a></li>
                <li className={styles.listItem}><a href="#" className={styles.listItemLink}>Vente de Code de recharge</a></li>
                <li className={styles.listItem}><a href="#" className={styles.listItemLink}>Vente de Code de carte prépayée</a></li>
                <li className={styles.listItem}><a href="#" className={styles.listItemLink}>Rembourcement de Code</a></li>
                <li className={styles.listItem}><a href="#" className={styles.listItemLink}>Rechage de carte prépayée</a></li>
              </ul>

              <div className={styles.bottom}>
                  <div className={styles.text}>Pour bénéficier de nos services, veillez vous incrir</div>
                  <button className={styles.btn+' cpn-btn cpn-btn__orange'} onClick={goToRegister}> S'inscrir maintenant</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services
