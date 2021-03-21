import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../../styles/components/home-banner.module.scss'

import Link from 'next/link'
import Router from 'next/router'

/*
  *
  */
const goToLogin = () => {
  Router.push('/login')
}

const HomeBanner = () => {
  return (
    <div className={styles.homeBanner} id="home-banner">
      <Container>
        <Row>
          <Col sm={12}>
            <div className={styles.inner}>
              <div className={styles.left}>
                <h1 className={styles.title}>
                  Acheter vos coupons de rechacharge, ou d'achats diverses
                </h1>
                <div className={styles.subTitle}>Ou faites vous rembourser au besoin...</div>
                <button className={styles.btn+ ' cpn-btn cpn-btn__orange'} onClick={goToLogin}><span>Acheter</span></button>
              </div>

              <div className={styles.right}>
                <div className={styles.turnstile}>
                  <div className={styles.image}>
                    <img src="/images/svg/img_1.svg" alt="banner rechcompt"/>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeBanner
