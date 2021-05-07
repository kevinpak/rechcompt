import Router from 'next/router'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from './../components/header'
import styles from './../styles/components/page-error.module.scss'

const ErrorPage = () => {

  const goToHom = (): void => {
    Router.push('/')
  }

  return (
    <>
    <div className={styles.pageError+ ' page-error'}>
      <Header />
      <Container>
        <Row>
          <Col sm={12}>
            <div className={styles.inner}>
              <h1  className={styles.title}>404</h1>
              <div  className={styles.subTitle}>Page inexistante</div>
              <div  className={styles.text}>
                <p>Nous sommes désolés,</p>
                <p>La page que vous recherchez n'a pas été trouvée...</p>
              </div>
              <button className={styles.btn+ ' cpn-btn cpn-btn__orange'} onClick={goToHom}>Retour à la page d'accueil</button>
              <span className={styles.fontElem+' icon-font-404 icon-inner '+styles.fontElem_1}></span>
              <span className={styles.fontElem+' icon-font-404 icon-inner '+styles.fontElem_2}></span>
              <span className={styles.fontElem+' icon-font-404 icon-inner '+styles.fontElem_3}></span>
              <span className={styles.fontElem+' icon-font-404 icon-inner '+styles.fontElem_4}></span>
              <span className={styles.fontElem+' icon-font-404 icon-inner '+styles.fontElem_5}></span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default ErrorPage