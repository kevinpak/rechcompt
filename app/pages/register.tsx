import styles from './../styles/components/register.module.scss'
import PlainPage from './../layouts/plain-page'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import Modal from 'react-bootstrap/Modal'
import Select from '@material-ui/core/Select'
import Link from 'next/link'

const Register = () => {
  /*
  * Validation
  */
  const formik = useFormik({
    initialValues: {
      lastName: '',
      firstName: '',
      email: '',
      phone: '',
      city: null,
      password: '',
      passwordRepeat: '',
      acceptCondition: '',
    },

    validationSchema: Yup.object({
      lastName: Yup.string().required('Champ obligatoire'),
      firstName: Yup.string().required('Champ obligatoire'),
      email: Yup.string().email('Entrer un email valide').required('Champ obligatoire'),
      phone: Yup.string().required('Champ obligatoire'),
      city: Yup.number().required('Champ obligatoire'),
      password: Yup.string().required('Champ obligatoire'),
      passwordRepeat: Yup.string().required('Champ obligatoire'),
      acceptCondition: Yup.boolean().oneOf([true], 'Vous devez cocher avant de continuer').required('Обязательно поля'),
    }),

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })


  return (
    <PlainPage title="Inscription">
      <div className={styles.register}>
        <div className={styles.inner}>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div className="cpn-form-row--flex">
              <div className="cpn-form-row">
                <label htmlFor="user-lastName" className="cpn-form-row__label">Nom<span className="cpn-form-row__label-required" >*</span></label>
                <input
                  type="text"
                  id="user-lastName"
                  placeholder="Nom"
                  className={`cpn-field ${formik.touched.lastName && formik.errors.lastName ? 'cpn-field--error': 'cpn-field--valid'}`}
                  name="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (<div className="cpn-field-message">{formik.errors.lastName}</div>) : null}
              </div>
              <div className="cpn-form-row">
                <label htmlFor="user-firstName" className="cpn-form-row__label">Prénom(s)<span className="cpn-form-row__label-required" >*</span></label>
                <input
                  type="text"
                  id="user-firstName"
                  placeholder="Prénom(s)"
                  className={`cpn-field ${formik.touched.firstName && formik.errors.firstName ? 'cpn-field--error': 'cpn-field--valid'}`}
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (<div className="cpn-field-message">{formik.errors.firstName}</div>) : null}
              </div>
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
              <label htmlFor="user-city" className="cpn-form-row__label">Pays <span className="cpn-form-row__label-required" >*</span></label>
              <Select
                labelId="demo-simple-select-helper-label"
                name="city" 
                id="user-city"
                className={`cpn-field ${styles.select} ${formik.touched.city && formik.errors.city ? 'cpn-field--error': 'cpn-field--valid'}`}
                value={formik.values.city}
                onChange={formik.handleChange}
              ></Select>
              {formik.touched.city && formik.errors.city ? (<div className="cpn-field-message">{formik.errors.city}</div>) : null}
            </div>
            <div className="cpn-form-row--flex">
              <div className="cpn-form-row">
                <label htmlFor="user-password" className="cpn-form-row__label">Mot de passe <span className="cpn-form-row__label-required" >*</span></label>
                <input
                  type="password"
                  id="user-password"
                  placeholder="Mot de passe"
                  className={`cpn-field ${formik.touched.password && formik.errors.password ? 'cpn-field--error': 'cpn-field--valid'}`}
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (<div className="cpn-field-message">{formik.errors.password}</div>) : null}
              </div>
            
              <div className="cpn-form-row">
                <label htmlFor="user-passwordRepeat" className="cpn-form-row__label">Mot de passe <span className="cpn-form-row__label-required" >*</span></label>
                <input
                  type="password"
                  id="user-passwordRepeat"
                  placeholder="Mot de passe"
                  className={`cpn-field ${formik.touched.passwordRepeat && formik.errors.passwordRepeat ? 'cpn-field--error': 'cpn-field--valid'}`}
                  name="passwordRepeat"
                  onChange={formik.handleChange}
                  value={formik.values.passwordRepeat}
                />
                {formik.touched.passwordRepeat && formik.errors.passwordRepeat ? (<div className="cpn-field-message">{formik.errors.passwordRepeat}</div>) : null}
              </div>
            </div>
            <div className="cpn-form-row">
              <input
                type="checkbox"
                id="user-acceptCondition"
                className={`cpn-field ${formik.touched.acceptCondition && formik.errors.acceptCondition ? 'cpn-field--error': 'cpn-field--valid'}`}
                name="acceptCondition"
                onChange={formik.handleChange}
                value={formik.values.acceptCondition}
              />
              <label htmlFor="user-acceptCondition" className="cpn-form-row__label">J’accepte les conditions de confidentialté<span className="cpn-form-row__label-required" >*</span> <a href="#">(Lire les conditions)</a></label>
              {formik.touched.acceptCondition && formik.errors.acceptCondition ? (<div className="cpn-field-message">{formik.errors.acceptCondition}</div>) : null}
            </div>
            

            <div className="cpn-form-row cpn-form-row--btns">
              <button className={styles.btn +' cpn-btn cpn-btn__orange'}>S’enrégistrer</button>
              <div className={styles.login}>
                <Link href="/login">
                  <a className={styles.link}><span>Se connecter</span></a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </PlainPage>
  )
}

export default Register