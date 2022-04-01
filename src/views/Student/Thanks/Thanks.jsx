import React, { useEffect } from 'react';
import studentStyle from './thanksStudent.module.css';
import NavEstudent from '../../Administrator/NavStudent/NavStudent';

/* import { useSelector } from 'react-redux' */
import logo from '../../../assets/Logo/programateAcademyLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Thanks = () => {

  const check = <FontAwesomeIcon icon={faCheckCircle} className={studentStyle.checkIcon} />


  return (
    <>
    <NavEstudent/>
    <section className={studentStyle.containerAll}>
      <div className={studentStyle.logoContainer}>
        <img src={logo} alt="Programate Academy" className={studentStyle.logoImg} />
      </div>
      <article className={studentStyle.thanksContainer}>
        <div className={studentStyle.checkContainer}>
          {check}
          <h3>¡Hemos recibido tus respuestas!</h3>
        </div>
        <div className={studentStyle.notifContainer}>
          <p>Te notificaremos por correo cuándo se haya realizado la asignación de tu mentor.</p>
          <button className={studentStyle.btnFinalizar}>
            <Link to="/student/mentor-assigned-studentsView">
              Finalizar
            </Link>
          </button>
        </div>
      </article>

      {/* <h1 className="little">.hola.</h1> */}
    </section>
    </>
  )
}

export default Thanks
