import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { useFormik } from 'formik'
import * as Yup from 'yup'
import Modal from 'react-bootstrap/Modal'

import styles from './../../styles/components/contact.module.scss'

import Link from 'next/link'

const Contact = () => {
  /*
  * Validation
  */
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      object: '',
      message:''
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Champ obligatoire'),
      email: Yup.string().email('Entrer un email valide').required('Champ obligatoire'),
      phone: Yup.string().required('Champ obligatoire'),
      object: Yup.string().required('Champ obligatoire'),
      message: Yup.string().required('Champ obligatoire'),
    }),

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div className={styles.contact} id="forme-contact">
      <Container>
        <Row>
          <Col sm={12}>
            <div className={styles.inner}>
              <h2 className={styles.title}>Contactez-nous</h2>
              <div className={styles.subTitle}>Pour plus d’information ou un souci  particulier, veuillez-nous laisser un message.</div>
              <div className={styles.formWrap}>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                  <div className="cpn-form-row">
                    <label htmlFor="user-name" className="cpn-form-row__label">Nom et prénoms <span className="cpn-form-row__label-required" >*</span></label>
                    <input
                      type="text"
                      id="user-name"
                      placeholder="Nom et prénoms"
                      className={`cpn-field ${formik.touched.name && formik.errors.name ? 'cpn-field--error': 'cpn-field--valid'}`}
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (<div className="cpn-field-message">{formik.errors.name}</div>) : null}
                  </div>
                  <div className="cpn-form-row--flex">
                    <div className="cpn-form-row">
                      <label htmlFor="user-phone" className="cpn-form-row__label">Téléphone <span className="cpn-form-row__label-required" >*</span></label>
                      <input
                        type="text"
                        id="user-phone"
                        placeholder="Téléphone"
                        className={`cpn-field ${formik.touched.phone && formik.errors.phone ? 'cpn-field--error': 'cpn-field--valid'}`}
                        name="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                      />
                      {formik.touched.phone && formik.errors.phone ? (<div className="cpn-field-message">{formik.errors.phone}</div>) : null}
                    </div>

                    <div className="cpn-form-row">
                      <label htmlFor="user-email" className="cpn-form-row__label">E-mail <span className="cpn-form-row__label-required" >*</span></label>
                      <input
                        type="text"
                        id="user-email"
                        placeholder="Email"
                        className={`cpn-field ${formik.touched.email && formik.errors.email ? 'cpn-field--error': 'cpn-field--valid'}`}
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email ? (<div className="cpn-field-message">{formik.errors.email}</div>) : null}
                    </div>
                  </div>
                  <div className="cpn-form-row">
                  <label htmlFor="user-object" className="cpn-form-row__label">Objet <span className="cpn-form-row__label-required" >*</span></label>
                  <input
                    type="text"
                    id="user-object"
                    placeholder="Objet"
                    className={`cpn-field ${formik.touched.object && formik.errors.object ? 'cpn-field--error': 'cpn-field--valid'}`}
                    name="object"
                    onChange={formik.handleChange}
                    value={formik.values.object}
                  />
                  {formik.touched.object && formik.errors.object ? (<div className="cpn-field-message">{formik.errors.object}</div>) : null}
                </div>

                  <div className="cpn-form-row">
                    <label htmlFor="user-message" className="cpn-form-row__label">Votre message <span className="cpn-form-row__label-required" >*</span></label>
                    <textarea 
                      id="user-message" 
                      className={`cpn-field ${formik.touched.message && formik.errors.message ? 'cpn-field--error': 'cpn-field--valid'}`}
                      placeholder="Description de votre problème"
                      name="message" 
                      onChange={formik.handleChange}
                      value={formik.values.message}
                    ></textarea>
                    {formik.touched.message && formik.errors.message ? (<div className="cpn-field-message">{formik.errors.message}</div>) : null}
                  </div>

                  <div className="cpn-form-row cpn-form-row--btns">
                    <button type="submit" className={styles.btn+' cpn-btn cpn-btn__orange'}><span>Envoyer</span></button>
                  </div>
                </form>
              </div>
                
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
