import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Swal from'sweetalert2';
import Alerta from '../componentes/Alertas';

function ModificarPagos(props) {
    const i18n = useTranslation();
    const notificaciones = new Alerta();
    var titulo = props.h1;
    var nameBtn = props.nameBtn;
    
    //La referencia para poder enfocar
    const myRef = useRef();

    //Los estados, los cuales almacenan los valores de los inputs
    const [pagos, setPagos] = useState({
        nroFactura: '',
        fechaPagoFactura: '',
        fechaVencimientoFactura: '',
        tipoPago: '',
        valorPagado: '',
        seleccionBanco: ''
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
	        nroFactura: props.nroFactura,
	        fechaPagoFactura: props.fechaPagoFactura,
	        fechaVencimientoFactura: props.fechaVencimientoFactura,
	        tipoPago: props.tipoPago,
	        valorPagado: props.valorPagado,
	        seleccionBanco: props.seleccionBanco
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
	                    <label for="inputNroFactura">{i18n.t('payments-panel.pay_bill-ref')}</label>
	                    <input required name="factura" onChange={onChange} ref={myRef} type="text" value={pagos.nroFactura} className="form-control" id="inputNroFactura" />
	                </div>	         
	                <div className="form-group col-md-6">
	                    <label for="inputFechaPagoFactura">{i18n.t('payments-panel.pay_pay-date')}</label>
	                    <input name="fechaPagoFactura" onChange={onChange} type="date" value={pagos.fechaPagoFactura} className="form-control" id="inputFechaPagoFactura" required/>
	                </div>
	            </div>
	            <div className="form-row">
	                <div className="form-group col-md-6">
	                    <label for="inputFechaVencimientoFactura">{i18n.t('payments-panel.pay_exp-date')}</label>
	                    <input name="fechaVencimientoFactura" onChange={onChange} type="date" value={pagos.fechaVencimientoFactura} className="form-control" id="inputFechaVencimientoFactura" required/>
	                </div>
                    <div className="form-group col-md-6">
                        <label for="inputTipoPago">{i18n.t('payments-panel.pay_pay-type')}</label>
                        <select name="pagoFactura" onChange={onChange} id="inputTipoPago" value={pagos.tipoPago} className="custom-select" >
                            {/*onClick={() => notificaciones.transferenciaBancaria()}*/}
                            <option defaultValue>---</option>
                            {/*<option>Haga click aquí para ver las opciones</option>*/}
                            <option>{i18n.t('payments-panel.pay_pay-type-cash')}</option>
                            <option>{i18n.t('payments-panel.pay_pay-type-btransfer')}</option>
                        </select>
                    </div>
                </div>
	            <div className="form-row">
	                <div className="form-group col-md-6">
	                    <label for="inputValorPagado">{i18n.t('payments-panel.pay_val-paid')}</label>
	                    <input name="valorPagoFactura" onChange={onChange} type="text" value={pagos.valorPagado} className="form-control" id="inputValorPagado" required/>
	                </div>
                    <div className="form-group col-md-6">
                        <label for="inputSeleccionBanco">{i18n.t('payments-panel.pay_slt-bank')}</label>
                        <select onChange={onChange} name="seleccionBanco" id="inputSeleccionBanco" value={pagos.seleccionBanco} className="custom-select" >
                            <option defaultValue>---</option>
                            <option>Bancolombia</option>                            
                            <option>Banco Agrario de Colombia</option>                            
                            <option>Banco AV Villas</option>
                            <option>Banco BBVA</option>                             
                            <option>Banco Davivienda</option>                             
                            <option>Banco de Bogotá</option>
                            <option>Banco Colpatria</option>                           
                            <option>Banco Falabella</option>                         
                        </select>
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

export default ModificarPagos;