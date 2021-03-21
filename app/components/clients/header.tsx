import {useState, useEffect} from 'react'
import styles from './../../styles/components/clients/header.module.scss'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import PopoverBtn from './../../components/_M-UI/popover/popover'

const Header = () => {

  const label = (
    <>
      <span className={styles.avatar}></span>
      <span className={styles.name}>Kevinpak Code</span>
    </>
  ) 

  const content = (
    <>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="#">
            <a ></a>
          </Link>
        </li>
        <li className={styles.listItem+' '+styles.lastChild}>
          <button className={styles.listItem}>Se déconnecter</button>
        </li>
      </ul>
    </>
  )

  
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <button className={styles.hamburgerMenu+' icon-hamburger-menu icon-inner'}></button>
          <div className={styles.user}>
            <PopoverBtn label={label} content={content} className="user" />
          </div>
        </div>
      </header>
      <style jsx global>
        {`
          button.user {
            width: 160px;
          }
        `}
      </style>
    </>
  )
}

export default Header