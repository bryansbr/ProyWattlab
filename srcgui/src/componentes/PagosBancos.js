import React from 'react';
import { useTranslation } from 'react-i18next';
import Encabezado from './Encabezado';

function PagosBancos() {
    const i18n = useTranslation();
    return (
        <div className="container-fluid" style={{backgroundColor: "white", position: "absolute", top: "70px", left: "0px"}}>
            <Encabezado
                titulo = {i18n.t('banks-panel.bks_int-title')}
                descripcion = {i18n.t('banks-panel.bks_int-description')}/>
            <div className="container">
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label>Seleccione el banco</label>
                        <select id="banco" className="form-control">
                            <option defaultValue>--</option>
                            <option>Banco de Bogotá</option>
                            <option>Banco Davivienda</option>
                            <option>Bancolombia</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Seleccione un archivo desde su computadora</label>
                        <input type="file" className="form-control" id="archivoBanco"></input> 
                    </div>        
                </div>
            </div>
        </div>
    );
}

export default PagosBancos;