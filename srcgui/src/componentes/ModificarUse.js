import React, { Fragment, useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
//import alerta from '../componentes/Alertas';

function ModificarUse(props) {
    var titulo= props.h1;
    var nameBtn= props.nameBtn;
    const i18n = useTranslation();
    //const notificaciones = new alerta();
    //La referencia para poder enfocar
    const myRef = useRef();

    //Para inactivar o activar tomar el id del usuario, el estado, y el profile vacio, 
    //Para modificar crear un segundo estado con el id, username, first_name, last_name, email, tipo_usuario

    //Los estados, los cuales almacenan los valores de los inputs
    const [usuario, setUsuario] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        profile: {
            identificacion: '',
            tipo_usuario: ''
        },
    })

    const [conPassword,setConPass]= useState({
        cPassword: '',
        confirmar: true,
        texto: '',
        clase: ''
    })

    //Este hook me permite enfocar el input id, cada vez que intente crear o modificar.
    //Tambien me permite actualizar los estados de acuerdo a los datos que se envian a traves de los props.
    useEffect(() => {
        myRef.current.focus();
        actualizar();
    }, [props.idRow])


    //Este metodo actualiza los estados de acuerdo a los props.
    const actualizar = () => {
        setUsuario({
            ...usuario,
            id: props.idRow,
            username: props.usuario,
            first_name: props.nombre,
            last_name: props.apellido,
            email: props.email,
            profile: {
                tipo_usuario: props.perfil
            },
        })
    }

    const onChangeContrasena = e => {    
        setConPass({
            ...conPassword,
            [e.target.name]: e.target.value
        })
        
         if(usuario.password!==e.target.value) {
            setConPass({
                [e.target.name]: e.target.value,
                confirmar:false,
                texto:'Las contraseñas no coinciden',
                clase: 'badge badge-danger'
            })
        } else if(e.target.value==='') {
            setConPass({
                [e.target.name]: e.target.value,
                confirmar:false,
                texto:'Es necesario que los campos no estén vacios',
                clase: 'badge badge-warning'
            })
        }
        else {
            setConPass({
                [e.target.name]: e.target.value,
                confirmar:true,
                texto:'Las contraseñas coinciden',
                clase: 'badge badge-success'
            })
        }
        console.log(conPassword)
    }

    //Cada vez que se escriba en un input el valor se almacena en los estados
    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        })

        if(e.target.name === 'identificacion' || e.target.name === 'tipo_usuario') {
            setUsuario({
                ...usuario,
                profile: {
                    ...usuario.profile,
                    [e.target.name]: e.target.value,
                    [e.target.name]: e.target.value
                }
            })
        }

        if(e.target.name==='password') {
            if(conPassword.cPassword!==e.target.value) {
                setConPass({
                    ...conPassword,
                    confirmar:false,
                    texto:'Las contraseñas no coinciden',
                    clase: 'badge badge-danger'
                    
                })
            } else if(e.target.value==='') {
                setConPass({
                    ...conPassword,
                    confirmar:false,
                    texto:'Es necesario que los campos no estén vacios',
                    clase: 'badge badge-warning'
                })
            }
            else {
                setConPass({
                    ...conPassword,
                    confirmar:true,
                    texto:'Las contraseñas coinciden',
                    clase: 'badge badge-success'  
                })
            }
        }
        console.log(usuario)       
    }

    const mostrarFormulario = () => {
        if (props.id === 'Nuevo') {
            return (
                <React.Fragment>
                    <div className='form-row'>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputContrasena">{i18n.t('login.login_pass-title')}</label>
                            <input required onChange={onChange}  name="password" type="password" value={usuario.password} className="form-control" id="inputContrasena" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCContrasena">{i18n.t('login.login_2pass-title')}</label>
                            <input required name="cPassword" onChange={onChangeContrasena} type="password" value={conPassword.cPassword} className="form-control" id="inputCContrasena" />
                        </div>
                        <span className={conPassword.clase}>{conPassword.texto}</span>
                    </div>
                    <h2>{i18n.t('users-panel.usr_profile')}</h2>
                    <div className="form-group">
                        <label htmlFor="inputAddress">{i18n.t('users-panel.usr_id')}</label>
                        <input 
                            required 
                            name="identificacion" 
                            onChange={onChange} 
                            type="number" 
                            value={usuario.profile.identificacion} 
                            className="form-control"
                            id="inputAddress" 
                            minlength="3"
                            maxlength="20"
                            pattern="[0-9]{1,15}"
                            title="El número de identificacion debe ser numérico. e.j. 115078"
                        />
                    </div>
                </React.Fragment>
            )
        }
        else {
            return null
        }
    }

    const validar = (event) => {
        event.preventDefault();
        if(conPassword.confirmar === true) {
            props.onSubmit(event,usuario)
        }
        else {
            console.log("Aqui va un mensaje de que no coinciden las contraseñas")
            console.log(conPassword.confirmar)
        }
    }

    return (
        <Fragment>
            <div className="container">
                <br /><br /><br /><br /><br />
                <h1 className="text-center">{i18n.t(titulo)}</h1>
                <br /><br /><br />
                <form method="POST" onSubmit={(event) => validar(event)}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputUsuario">{i18n.t('users-panel.usr_user-name')}</label>
                            <input required
                                name="username"
                                onChange={onChange} 
                                ref={myRef}
                                type="text" 
                                value={usuario.username} 
                                className="form-control" 
                                id="inputUsuario"
                                minlength="3"
                                maxlength="20"
                                pattern="[A-Za-z0-9]{1,15}"
                                title="El apodo del usuario no debe contener caracteres especiales y debe tener una longitud entre (3 y 15). e.j. juanperez123"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputNombre">{i18n.t('users-panel.usr_name')}</label>
                            <input required
                                name="first_name" 
                                onChange={onChange} 
                                type="text" 
                                value={usuario.first_name} 
                                className="form-control" 
                                id="inputNombre"
                                minlength="1"
                                maxlength="40"                                
                                pattern="([A-Za-zÑñáéíóúÁÉÍÓÚ ]+){1,15}"
                                title="El nombre no puede contener números ni caracteres especiales. e.j. Juan"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputApellido">{i18n.t('users-panel.usr_last-name')}</label>
                            <input required 
                                name="last_name" 
                                onChange={onChange} 
                                type="text" 
                                value={usuario.last_name} 
                                className="form-control" 
                                id="inputApellido"
                                minlength="1"
                                maxlength="40" 
                                pattern="([A-Za-zÑñáéíóúÁÉÍÓÚ ]+){1,15}"
                                title="El apellido no puede contener números ni caracteres especiales. e.j. Pérez"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">{i18n.t('users-panel.usr_email')}</label>
                            <input 
                                required 
                                name='email' 
                                type="email" 
                                onChange={onChange} 
                                className="form-control" 
                                value={usuario.email} 
                                id="inputEmail" 
                                placeholder="name@example.com" 
                                minlength="3"
                                maxlength="40"
                                />
                        </div>
                    </div>
                    {mostrarFormulario()}
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputPerfil">{i18n.t('users-panel.usr_type')}</label>
                            <select onChange={onChange} name="tipo_usuario" value={usuario.profile.tipo_usuario} id="inputPerfil" className="custom-select" >
                                <option defaultValue>--</option>
                                <option value="Administrador">{i18n.t('users-panel.usr_type-usr-admin')}</option>
                                <option value="Gerente">{i18n.t('users-panel.usr_type-usr-manager')}</option>
                                <option value="Operador">{i18n.t('users-panel.usr_type-usr-operator')}</option>
                                <option value="Revisor">{i18n.t('users-panel.usr_type-usr-reviewer')}</option>
                            </select>
                        </div>
                    </div>
                    <br /><br />
                    <div className="form-row">
                        <button type="submit" className="btn btn-primary mx-auto d-block col-md-5" >{i18n.t(nameBtn)}</button>
                        <button onClick={props.cancelar} className="btn btn-danger mx-auto d-block col-md-5">{i18n.t('users-panel.usr_btn-cancelar')}</button>
                    </div>
                </form>
                <br /><br />
            </div>
        </Fragment>
    )
}

export default ModificarUse;