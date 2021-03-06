import React from 'react';
import stylesMentorAssigned from './MentorAssigned.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../../assets/Logo/avatar7.png'

const MentorAssigned = () => {

    const phone = <FontAwesomeIcon icon={faPhoneAlt} className={stylesMentorAssigned.assignedIcons} /> /* IconFormFA */
    const mail = <FontAwesomeIcon icon={faEnvelope} className={stylesMentorAssigned.assignedIcons} /> /* IconFormFA */
    const bell = <FontAwesomeIcon icon={faBell} className={stylesMentorAssigned.assignedIcons} /> /* IconFormFA */

  return (
    <section>
        <div className={stylesMentorAssigned.headerAssigned}>
            <h3 className={stylesMentorAssigned.pAssigned}>SESIONES</h3>
        </div>
        <article className={stylesMentorAssigned.containerAllAssigned}>
            <article className={stylesMentorAssigned.containerAssigned}>
                <div className={stylesMentorAssigned.profileAssigned}>
                    <img src={avatar} alt="Profile Picture" className={stylesMentorAssigned.profileImgAssigned}/>
                    <div className={stylesMentorAssigned.iconsProfileAssigned}>
                        {phone}
                        {mail}
                        {bell}
                    </div>
                </div>
                <div className={stylesMentorAssigned.nameAssigned}>
                    <span className={stylesMentorAssigned.whiteTxt}>TU MENTOR ASIGNADO ES</span><br/> PEDRO PEREZ
                </div>
            </article>
            <article className={stylesMentorAssigned.containerSession}>
                <h3 className={stylesMentorAssigned.hAssigned}>Sesión 1 - Habilitada</h3>
                <div className={stylesMentorAssigned.containerAllSession}>
                    <p className={stylesMentorAssigned.pSession}>Rango de fechas para agendar tu sesión de mentoria</p>
                    <div className={stylesMentorAssigned.containerDateSession}>
                        <div>
                        <span className={stylesMentorAssigned.yelTxt}>Fecha inicial</span><br /> 10-Noviembre/2021
                        <br /><br />
                        <span className={stylesMentorAssigned.yelTxt}>Fecha final</span><br /> 21-Noviembre/2021
                        </div>
                        <div>
                            <button className={stylesMentorAssigned.btnsSessions}>Agendar sesión</button>
                            <button className={stylesMentorAssigned.btnsSessions}>Ver informe</button>
                            <button className={stylesMentorAssigned.btnsSessions}>Ver formulario</button>
                        </div>
                    </div>
                </div>
            </article>
        </article>
    </section>
  )
}

export default MentorAssigned