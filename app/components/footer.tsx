import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './../styles/components/footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col sm={12}>
            <div className={styles.top}>
              <div className={styles.webmaster}>Réaliser par <a href="#" className={styles.webmasterLink}><span>KevinpakCode</span></a></div>
              <ul className={styles.rsList}>
                <li className={styles.rsListItem}>
                  <a href="#" className={styles.rsListItemLink+' '+styles.twitter+' icon-twitter icon-inner'}></a>
                </li>
                <li className={styles.rsListItem}>
                  <a href="#" className={styles.rsListItemLink+' '+styles.instagram+' icon-instagram icon-inner'}></a>
                </li>
                <li className={styles.rsListItem}>
                  <a href="#" className={styles.rsListItemLink+' '+styles.faceboock+' icon-faceboock icon-inner'}></a>
                </li>
              </ul>
              <ul className={styles.user}>
                <li className={styles.listItem}>
                  <Link href="/login" >
                    <a className={styles.listItemLink+' '+styles.login}>Connexion</a>
                  </Link>
                  
                </li>
                <li className={styles.listItem}>
                  <Link href="/register" >
                    <a className={styles.listItemLink+' '+styles.register}>Inscription</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.bottom}>
              <div className={styles.copyrights}>Copyrights © 2021 RechCompt.</div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer