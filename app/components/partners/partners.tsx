import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



import styles from './../../styles/components/partners.module.scss'

import Link from 'next/link'

const Partners = () => {
  return (
    <div className={styles.partners}>
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className={styles.title}>Nos partenaires</h2>
            <div className={styles.subTitle}>Qui laborum reprehenderit sint eu incididunt. Mollit velit dolor mollit duis est do pariatur cillum dolore officia. Sit voluptate fugiat minim non officia Lorem. Qui laborum reprehenderit sint eu incididunt.</div>
            <div className={styles.inner}>
              <div className={styles.slider}>
 
              </div>
                
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Partners
