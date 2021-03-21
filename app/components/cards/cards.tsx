import styles from './../../styles/components/cards.module.scss'
import link from 'next/link'

const Cards = (props) => {
  return (
    <>
      <div className={styles.card}>
        {props.children}
      </div>
    </>
  )
}

export default Cards