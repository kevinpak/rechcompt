import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../styles/layouts/back-office.module.scss'
import link from 'next/link'

const BackOffice = () => {
  return (
    <>
      <div className={styles.backOffice}>
        <Container>
          <Row>
            <Col sm={12}>
              <div className={styles.inner}>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default BackOffice