import React from 'react';
import { FaFileImport } from 'react-icons/fa';
import stylesMentorAssigned from './StudentAssigned.module.css'
import profilestudent from "../../../../components/assets/images/profile.jpg";
const StudentAssigned = () => {


  return (
    <section>
        <div className={stylesMentorAssigned.headerAssigned}>
            <h3 className={stylesMentorAssigned.pAssigned}>SESIONES</h3>
        </div>
        <article className={stylesMentorAssigned.containerAllAssigned}>
            <article className={stylesMentorAssigned.containerAssigned}>
                <div className={stylesMentorAssigned.profileAssigned}>
                    <img  src={profilestudent} alt="perfil" className={stylesMentorAssigned.photo} />
                    {/* <img src="" alt="Profile Picture" /> */}
                <div className={stylesMentorAssigned.iconsProfileAssigned}>

                    </div>
                </div>
                <div className={stylesMentorAssigned.nameAssigned}>
                    
                    <span className={stylesMentorAssigned.whiteTxt}>TU ESTUDIANTE ASIGNADO ES</span><br/> ANGEL PEREZ
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

export default StudentAssigned