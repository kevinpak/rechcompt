import styles from './../styles/components/login.module.scss'
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
      email: '',
      password: '',
      rememberMe: '',
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Entrer un email valide').required('Champ obligatoire'),
      password: Yup.string().required('Champ obligatoire'),
      rememberMe: Yup.boolean().oneOf([true], 'Vous devez cocher avant de continuer'),
    }),

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })


  return (
    <PlainPage title="Connexion" className="plain-page_body--small">
      <div className={styles.login}>
        <div className={styles.inner}>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
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
              <input
                type="checkbox"
                id="user-rememberMe"
                className={`cpn-field `}
                name="rememberMe"
                onChange={formik.handleChange}
                value={formik.values.rememberMe}
              />
              <label htmlFor="user-rememberMe" className="cpn-form-row__label">Se souvenir de moi<span className="cpn-form-row__label-required" >*</span> </label>
            </div>

           
            

            <div className="cpn-form-row cpn-form-row--btns">
              <button className={styles.btn +' cpn-btn cpn-btn__orange'}>Se connecter</button>
              <div className={styles.action}>
                <Link href="/restore-password">
                  <a className={styles.link+' '+styles.restorePassword}><span>Mot de passe oublié ?</span></a>
                </Link>
                <Link href="/register">
                  <a className={styles.link+' '+styles.register}><span>S'inscrir</span></a>
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