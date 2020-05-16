import React, { Component } from 'react';
import Encabezado from './Encabezado';
import Table from '../container/Table';
import ModificarPagos from './ModificarPagos';
import BackService from '../store/PeticionesBack';
const solicitudBack = new BackService(); // Datos al back-end.

class PagosClientes extends Component {

    handleRegistrarPagos = async (e, pagos) => {
        e.preventDefault()
        //console.log(pagos)
        solicitudBack.postRegisterPagos(pagos
        ).then(res => {
            //console.log(res)
            this.solicitud()
        })
            .catch(error => console.log(error))
        this.cerrarFormulario()
    }

    handleModificarPagos = async (e, pagos) => {
        e.preventDefault()
        solicitudBack.putUpdatePagos(pagos
        ).then(res => {
            //console.log(res)
            this.solicitud()
        })
            .catch(error => console.log(error))
        this.cerrarFormulario()
    }

    cambiarEstadoPagos = (pagos) => {
        //console.log(pagos)
        solicitudBack.putUpdatePagos(pagos
        ).then(res => {
            //console.log(res)
            this.solicitud()
        })
            .catch(error => console.log(error))
    }

    // Con estos estados me doy cuenta que boton se presionó si el 'Modificar' o el 'Nuevo'.
    state = {
        banderaM: false,
        banderaN: false,
        id: '',
        nroFactura: '',
        fechaPagoFactura: '',
        fechaVencimientoFactura: '',
        tipoPago: '',
        valorPagado: '',
        seleccionBanco: '',
        estadoFactura: '',
        datos: [],
        buscador: '',
        resultado: ''
    }

    // Con este método hago el llamado a solicitud una vez se renderize el componente.
    async componentDidMount() {
        this.solicitud()
    }

    // Con este método haga el llamado a los datos al back-end para guardarlos en el estado.
    solicitud = () => {
        solicitudBack.getListPagos()
            .then(res => {
                this.setState({
                    datos: res
                })
                this.buscador(this.state.buscador)
            })
    }

    cerrarFormulario = () => {
        this.setState({
            banderaM: false,
            banderaN: false
        })
    }

    mostrarTable = () => {
        return (
            <React.Fragment>
                <div className="container pre-scrollable" style={{ marginTop: "10px", maxHeight: "350px", marginBottom: "20px" }}>
                    <Table t1={'ID'} t2={'# Factura'} t3={'Fecha de pago factura'} t4={'Fecha de vencimiento factura'} t5={'Tipo de pago'} t6={'Valor pagado'} t7={'Seleccione el banco'} t8={'Estado de la factura'} t9={'Modificar'} t10={'Estado'} tabla='pagos' datos={this.state.datos} modificar={this.modificar} cambiarEstado={this.cambiarEstadoPagos} />
                </div>
            </React.Fragment>
        )
    }

    // En este solicito los datos a la API y los guardo en el estado datos.
    // Con este método de acuerdo al boton que haya presionado si 'Modificar' o 'Nuevo', se llama el componente formulario.
    mostrarFormulario = () => {
        if (this.state.banderaM === true) {
            return (
                <ModificarPagos
                    id={'Modificar'}
                    onSubmit={this.handleModificarPagos}
                    idRow={this.state.id}
                    nroFactura={this.state.nroFactura}
                    fechaPagoFactura={this.state.fechaPagoFactura}
                    fechaVencimientoFactura={this.state.fechaVencimientoFactura}
                    tipoPago={this.state.tipoPago}
                    valorPagado={this.state.valorPagado}
                    seleccionBanco={this.state.seleccionBanco}
                    estadoFactura={this.state.estadoFactura}
                    h1={'payments-panel.pay_change-pay'}
                    nameBtn={'payments-panel.pay_change-pay'}
                    cancelar={this.cerrarFormulario}
                />
            )
        } else if (this.state.banderaN === true) {
            return (<ModificarPagos
                id={'Nuevo'}
                onSubmit={this.handleRegistrarPagos}
                idRow={''}
                nroFactura={''}
                fechaPagoFactura={''}
                fechaVencimientoFactura={''}
                tipoPago={''}
                valorPagado={''}
                seleccionBanco={''}
                estadoFactura={''}
                h1={'payments-panel.pay_add-pay'}
                nameBtn={'payments-panel.pay_add-pay'}
                cancelar={this.cerrarFormulario}
            />
            )
        }
        return null;
    }

    // Este es el método que le envio a la table para que se ejecute en ese componente y me traiga los datos de la fila que se va a modificar.
    // Junto con este actualizo la banderaM a 'true' para que se muestre el formulario correspondiente.
    modificar = (id, nroFactura, fechaPagoFactura, fechaVencimientoFactura, tipoPago, valorPagado, seleccionBanco, estadoFactura) => {
        this.setState({
            id: id,
            nroFactura: nroFactura,
            fechaPagoFactura: fechaPagoFactura,
            fechaVencimientoFactura: fechaVencimientoFactura,
            tipoPago: tipoPago,
            valorPagado: valorPagado,
            seleccionBanco: seleccionBanco,
            estadoFactura: estadoFactura,
            banderaM: true,
            banderaN: false,
        })
    }

    // Cuando presione en nuevo cambia la banderaN a 'true' para mostrar el formulario correspondiente.
    nuevo = () => {
        this.setState({
            banderaM: false,
            banderaN: true,
        });
    }

    onChange = (e) => {
        this.setState({
            buscador: e.target.value.toLowerCase()
        })
        this.buscador(e.target.value.toLowerCase());
    }

    onKeyPressed = (e) => {
        if (e.keyCode === 8) {
            this.solicitud()
        }
    }

    buscador = (letra) => { // ARREGLAR ESTO (TABLAS EN DJANGO). // REVISAR BIEN ACÁ!!!
        const datosNuevos = this.state.datos.filter(function (fila) {
            if (fila.id.toLowerCase().indexOf(letra) !== -1) { // REVISAR BIEN ACÁ!!!
                return fila;
            } else if (fila.nroFactura.toLowerCase().indexOf(letra) !== -1) { // REVISAR BIEN ACÁ!!!
                return fila;
            }
        })
        this.setState({
            datos: datosNuevos,
            resultado: datosNuevos.length
        })
    }

    default = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <div onKeyDown={this.onKeyPressed} className="container-fluid" style={{ backgroundColor: "white", position: "absolute", top: "70px", left: "0px" }}>
                <Encabezado
                    titulo="payments-panel.pay_int-title"
                    descripcion="payments-panel.pay_int-description"
                />
                <div className="container" style={{ justifyContent: "center" }}>
                    <form method="POST" onSubmit={this.default}>
                        <div className="form-row justify-content-between">
                            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12" style={{ marginBottom: "10px" }}>
                                <div className="input-group">
                                    <input type="text" name="buscador" value={this.state.buscador} onChange={this.onChange} autoComplete="off" className="form-control" required></input>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend2">
                                            <svg className="bi bi-search" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1 col-auto mr-auto">
                                <button className="btn btn-success" type="button">Buscar</button>
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-danger" type="button" onClick={this.nuevo}>
                                    <svg className="bi bi-person-plus-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="" />
                                        <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7.5-3a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clipRule="evenodd" />
                                    </svg>
                                    &nbsp; Nuevo
                                </button>
                            </div>
                            <div className="alert alert-success col-md-6">
                                Resultados:
                                <strong> {this.state.resultado} filas encontradas.</strong>
                            </div>
                            {this.mostrarTable()}                                                                               
                        </div>                      
                    </form>            
                </div>
                {this.mostrarFormulario()}            
            </div>
        )
    }
}

export default PagosClientes;