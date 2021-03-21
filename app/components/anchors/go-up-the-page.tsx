import {useState, useEffect} from 'react'
import styles from './../../styles/components/go-up-the-page.module.scss'

const GoUpThePage = () => {
  const [statusAnchor, setStatusAnchor] = useState(false)

  const goUp = (): void => {
    window.scrollTo(0,0)
  }

  useEffect(() => {
    window.onscroll = function (e) {  
      let scrollPosition = window.pageYOffset
      if(scrollPosition> 350) {
        setStatusAnchor(true)
      }else {
        setStatusAnchor(false)
      }
    } 
  }, [statusAnchor])

  return (
    <>
      {statusAnchor&&<button className={styles.btn+' '} onClick={()=>goUp()}><span className={styles.icon+' icon-arrow-up icon-inner'}></span></button>}
    </>
  )
}

export default GoUpThePage