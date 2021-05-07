import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './../styles/components/header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Router from 'next/router'


const Header = () => {
  const [fixedHeader, setFixedHeader] = useState(false)
  const [mobilMenu, setMobilMenu] = useState(false)

  /*
  *
  */
  const goToRegister = () => {
    Router.push('/register')
  }

  /*
  *
  */
  const goToLogin = () => {
    Router.push('/login')
  }

  /*
  *
  */
  const OpenCloseMobilMenu = () => {
    setMobilMenu(!mobilMenu)
  }


 /* useEffect(() => {
    const setPosition = () => {
      let scrollPosition = window.pageYOffset
      if(scrollPosition > 200) {
        setFixedHeader(true)
        //console.log(scrollPosition)
      }else {
        setFixedHeader(false)
      }
    }
    setPosition()

    window.onscroll = function (e) {  
      //console.log('scroll')
      setPosition()     
    } 

  }, [fixedHeader])*/


  return (
    <header className={`${styles.header} ${fixedHeader? styles.headerFixed: ''}`}>
      <Container>
        <Row>
          <Col sm={12}>
            <div className={styles.inner}>
              <div className={styles.logo}>
                <Link href="/" >
                  <a className={styles.logoLink}>
                    <img src="/images/svg/RechCompt-logo.svg" alt="logo"/>
                  </a>
                </Link>
              </div>
              <div className={`${styles.headerRight}  ${mobilMenu?styles.MobilMenuOpen:''}`}>
                <ul className={styles.menu}>
                  <li className={styles.menuItem}>
                    <Link href="#home-banner" >
                      <a className={styles.menuItemLink + ' '+styles.active }>Accueil</a>
                    </Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="#services" >
                      <a className={styles.menuItemLink}>Nos services</a>
                    </Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="#how-it-work" >
                      <a className={styles.menuItemLink}>Comment ça marche?</a>
                    </Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="#forme-contact" >
                      <a className={styles.menuItemLink}>Contacts</a>
                    </Link>
                  </li>
                </ul>
                <ul className={styles.btns}>
                <li className={styles.btnsItem}>
                  <button className={`${styles.btnsItemBtn} cpn-btn cpn-btn__white`} onClick={goToLogin}><span>Connexion</span></button>
                </li>
                <li className={styles.btnsItem}>
                  <button className={`${styles.btnsItemBtn} cpn-btn cpn-btn__orange`} onClick={goToRegister}><span>Inscription</span></button>
                </li>
              </ul>
              <button className={`${styles.mobilBtnClose}`} onClick={OpenCloseMobilMenu}><i className="icon-close icon-inner"></i></button>
              </div>
              <button className={`${styles.mobilBtn}`} onClick={OpenCloseMobilMenu}><i className="icon-hamburger-menu icon-inner"></i></button>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
