import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from 'antd';
import { useForm } from 'react-hook-form';
import Footer from './Footer';
import Menu from './Menu';
import BackService from '../store/PeticionesBack'; //CENTRALIZACION DE LAS SOLICITUDES
const solicitudBack = new BackService();

/*const handleFormSubmit = e => {
    e.preventDefault();
    
    solicitudBack.postPQRS({ //Envio de datos al back
        "asunto": e.target.elements.asunto.value,
        "contenido": e.target.elements.contenido.value,
        "email": e.target.elements.email.value
    }).then(res => {console.log(res)})
      .catch(error => {console.log(error)})
    
    e.target.elements.asunto.value="";
    e.target.elements.contenido.value="";
    e.target.elements.email.value="";
}*/

const PQRS = () => { // Nuevo PQRS con todo lo del back (experimental, testear bien).
    const i18n = useTranslation();

    // Para validación
    const {register, errors, handleSubmit} = useForm();

    const validarFormulario = (e, data, ev) => {
        // COSAS DEL BACK
        e.preventDefault();

        solicitudBack.postPQRS({ //Envio de datos al back
            "asunto": e.target.elements.asunto.value,
            "contenido": e.target.elements.contenido.value,
            "email": e.target.elements.email.value
        }).then(res => {console.log(res)})
          .catch(error => {console.log(error)})
        
        e.target.elements.asunto.value="";
        e.target.elements.contenido.value="";
        e.target.elements.email.value="";
        
        // COSAS DEL FRONT
        console.log(data);
        ev.target.reset();
    }

    return(
        <Fragment>
            <div>
                <Menu/>
            </div>
                
            <div className="navbar-header" style={{marginTop: "70px", marginLeft: "0px", marginRight: "0px"}}>
                <img className="img-fluid" alt="Responsive image" src='../imagenes/Banner.jpg'></img>
            </div>

            <div className="container" style={{marginTop: "20px", marginBottom: "50px"}}>
                <div className="row" style={{marginTop: "20px"}}>
                    <div className="col-lg-7" style={{textAlign: "left"}}>
                        <h3>{i18n.t('homepage.pqrs-homepage.pqrs_ptn-title')}</h3>
                            <p>{i18n.t('homepage.pqrs-homepage.pqrs_ptn-description')}</p>    
                        <h3>{i18n.t('homepage.pqrs-homepage.pqrs_cmpn-title')}</h3>
                            <p>{i18n.t('homepage.pqrs-homepage.pqrs_cmpn-description')}</p>   
                        <h3>{i18n.t('homepage.pqrs-homepage.pqrs_clm-title')}</h3>
                            <p>{i18n.t('homepage.pqrs-homepage.pqrs_clm-description')}</p>   
                        <h3>{i18n.t('homepage.pqrs-homepage.pqrs_sgtn-title')}</h3>
                            <p>{i18n.t('homepage.pqrs-homepage.pqrs_sgtn-description')}</p>
                    </div>
                    <div className="col-lg-5" style={{marginTop: "20px"}}>
                        <form onSubmit={handleSubmit(validarFormulario)}>
                            <div>
                                <h3 style={{marginBottom: "20px"}}>{i18n.t('homepage.pqrs-homepage.pqrs_submrq-description')}</h3>
                            </div>
                            <div className="form-group">
                                <input 
                                    name="asunto" 
                                    className="form-control" 
                                    placeholder={i18n.t('homepage.pqrs-homepage.pqrs_sbjt-title')}
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Debe ingresar un asunto (petición, queja, reclamo, sugerencia)'
                                            },
                                            maxLength: {
                                                value: 10, 
                                                message: 'No más de 10 carácteres!'
                                            },
                                            minLength: {
                                                value: 3, 
                                                message: 'Mínimo 5 carácteres'
                                            }
                                        })
                                    }>
                                </input>
                                <span className="text-danger text-small d-block mb-2">
                                    {errors?.asunto?.message}
                                </span>
                            </div>
                            <div className="form-group">
                                <input 
                                    name="email" 
                                    className="form-control" 
                                    type="email" 
                                    placeholder={i18n.t('homepage.pqrs-homepage.pqrs_email-title')}
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Debe ingresar una dirección de correo válida'
                                            },
                                            maxLength: {
                                                value: 10, 
                                                message: 'No más de 10 carácteres!'
                                            },
                                            minLength: {
                                                value: 3, 
                                                message: 'Mínimo 5 carácteres'
                                            }
                                        })
                                    }>                                    
                                </input>
                            </div>
                            <div>
                                <input name="contenido" className="form-control" placeholder={i18n.t('homepage.pqrs-homepage.pqrs_dcptn-title')} style={{height: "200px", verticalAlign: "top"}}></input>
                            </div>
                            <div style={{marginTop: "20px"}}>
                                <button type="submit" className="btn btn-success btn-block">{i18n.t('homepage.pqrs-homepage.pqrs_btn-subm')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>            
        </Fragment>
    )
}

export default PQRS;