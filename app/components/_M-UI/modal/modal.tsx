import {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import styles from './modal.module.scss'
import link from 'next/link'

const ModalCpn = (props) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Achat de code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.children}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalCpn