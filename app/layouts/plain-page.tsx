import styles from './../styles/components/plain-page.module.scss'
import Logo from './../components/common/logo'

const PlainPage = (props) => {
  const titleFormat = props.smallTile? 'small-title' : ''
  console.log(titleFormat)
  return (
    <>
      <div className={styles.plainPage}>
        <div className={styles.inner}>
          <div className={styles.logo}><Logo /> </div>
          <div className={styles.body +'  '+props.className??''}>
            <h1  className={styles.title+' '+titleFormat}>{props.title}</h1>
            {props.children}
          </div>
        </div>
      </div>
      <style jsx>{`
        .plain-page_body--small {
          max-width: 500px;
        }
        .small-title {
          font-size: 1.5rem !important;
        }
      `}</style>
    </>
  )
}

export default PlainPage