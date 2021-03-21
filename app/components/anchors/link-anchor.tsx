import {useState, useEffect, useRef} from 'react'
import Link from 'next/link'

const LinkAnchor = (props) => {
  const [comptScroll, setComptScroll] = useState(0)
  const [idElem, setIdElem] = useState(null)
  const link = useRef(null)

  /*
  *
  */
  const scrollDocument = (event) => {
    event.preventDefault()
    let newComptScroll = Number(comptScroll) + 1
    const elem = link.current
    const path = elem.getAttribute('href')
    const elemId = path.replace(/[#\/]/g, '')
    setComptScroll(newComptScroll)
    setIdElem(elemId)  
  }

 
  /*
  *
  */
  useEffect(()=> {
    
    if(idElem) {
      const elem = document.getElementById(idElem)
      const elemPosition = elem.offsetTop
      window.scrollTo({
        top: elemPosition,
        behavior: "smooth"
      });
    }
    
  }, [comptScroll])

  const Href:string = props.href ?? '#'
  const ClassName:string = props.className ?? ''

  return (
    <Link  href={Href} >
      <a  className={ClassName} ref={link}  onClick={()=> scrollDocument(event)}>{props.children}</a>
    </Link>
  )
}

export default LinkAnchor
