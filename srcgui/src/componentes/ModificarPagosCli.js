// ¡NUEVO! ELIMINAR SI NO FUNCIONA. (@bryansbr)
import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import alerta from '../componentes/Alertas';

function ModificarPagosCli(props) {
    const i18n = useTranslation();
    const notificaciones = new alerta();
    var titulo = props.h1;
    var nameBtn = props.nameBtn;
    
    //La referencia para poder enfocar
    const myRef = useRef();

    //Los estados, los cuales almacenan los valores de los inputs
    const [pagos, setPagos] = useState({
        identfBanco: '',
        consctFactura: '',
        numUncIdUsuario: '',
        valorPagado: '',
        tipoPago: '',
        numTarjeta: '',
        observacion:''
    })

    // Este hook me permite enfocar el input id, cada vez que intente crear o modificar.
    // También me permite actualizar los estados de acuerdo a los datos que se envian a traves de los props.
    useEffect(() => {
        myRef.current.focus();
        actualizar();
    }, [props.idRow])

    // Este método actualiza los estados de acuerdo a los props.
    const actualizar = () => {
        setPagos({
            ...pagos,
            id: props.idRow,
            identfBanco: props.identfBanco,
            consctFactura: props.consctFactura,
            numUncIdUsuario: props.numUncIdUsuario,
            valorPagado: props.valorPagado,
            tipoPago: props.tipoPago,
            numTarjeta: props.numTarjeta,
            observacion:props.observacion
        })
    }

    // Cada vez que se escriba en un input el valor se almacena en los estados.
    const onChange = e => {
        setPagos({
            ...pagos,
            [e.target.name]: e.target.value

        })
        //console.log(pagos)
    }

    return(
		<div className="container">
            <br /><br /><br /><br /><br />
            <h1 className="text-center">{i18n.t(titulo)}</h1>
            <br /><br /><br />
            <form onSubmit={(event) => props.onSubmit(event, pagos)}>
	            <div className="form-row">
	                <div className="form-group col-md-6">
	                    <label for="inputIdentfBanco">Identificación Banco</label>
                        <select name="idBanco" onChange={onChange} id="inputIdentfBanco" value={pagos.identfBanco} className="custom-select">
                            <option defaultValue>---</option>
                            <option>Banco popular</option>
                            <option>Bancolombia</option>
                            <option>Banco de Bogota</option>                                                        
                        </select>
	                </div>
                    <div className="form-group col-md-6">
                        <label for="inputConsctFactura">Consecutivo Factura</label>
                        <select name="cFactura" onChange={onChange} id="inputConsctFactura" value={pagos.consctFactura} className="custom-select">
                            <option defaultValue>---</option>                                                      
                        </select>
                    </div>
	            </div>
	            <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputNumUncIdUsuario">Nº Único Ident. Usuario</label>
                        <select name="nIdUsuario" onChange={onChange} ref={myRef} id="inputNumUncIdUsuario" value={pagos.numUncIdUsuario} className="custom-select" >
                            <option defaultValue>---</option>
                        </select>
                    </div>
	                <div className="form-group col-md-6">
	                    <label for="inputValorPagado">Valor Pagado</label>
	                    <input name="vPagado" onChange={onChange} value={pagos.valorPagado} className="form-control" id="inputValorPagado" required/>
	                </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputTipoPago">Tipo Pago</label>
                        <input name="tPago" onChange={onChange} value={pagos.tipoPago} className="form-control" id="inputTipoPago" required></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputNumTarjeta">Nº Tarjeta</label>
                        <input name="nTarjeta" onChange={onChange} value={pagos.numTarjeta} className="form-control" id="inputNumTarjeta" required></input>
                    </div>                    
                </div>
	            <div className="form-row">
	                <div className="form-group col-md-12">
	                    <label for="inputObservacion">Observación</label>
	                    <input name="observ" onChange={onChange} value={pagos.observacion} className="form-control" id="inputObservacion" required/>
	                </div>           
	            </div>
                <br /><br />
                <div className="form-row">
                    <button type="submit" className="btn btn-primary mx-auto d-block col-md-5" >{i18n.t(nameBtn)}</button>
                    <button onClick={props.cancelar} className="btn btn-danger mx-auto d-block col-md-5">{i18n.t('payments-panel.pay_btn-cancel')}</button>
                </div>	                           
            </form>
            <br /><br />            
        </div>    	
    )
}

export default ModificarPagosCli;