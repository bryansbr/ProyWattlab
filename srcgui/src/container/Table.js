import React, { Component } from 'react'
import FilaTable from '../componentes/FilaTable';

class Table extends Component {

    tablaUsuario = () => {
        return(
            <React.Fragment>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">{this.props.t1}</th>
                            <th scope="col">{this.props.t2}</th>
                            <th scope="col">{this.props.t3}</th>
                            <th scope="col">{this.props.t4}</th>
                            <th scope="col">{this.props.t5}</th>
                            <th scope="col">{this.props.t6}</th>
                            <th scope="col">{this.props.t7}</th>
                            <th scope="col">{this.props.t8}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.datos.map(usuario => (
                            <FilaTable
                                cambiarEstado={this.props.cambiarEstado}
                                modificar={this.props.modificar}
                                tipo='usuario'
                                key={usuario.id}
                                id={usuario.id}
                                usuario={usuario.username}
                                nombre={usuario.first_name}
                                apellido={usuario.last_name}
                                email={usuario.email}
                                perfil={usuario.profile.tipo_usuario}
                                estado={usuario.is_active}
                            />
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

    tablaPublicidad = () => {
        return(
            <React.Fragment>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">{this.props.t1}</th>
                            <th scope="col">{this.props.t2}</th>
                            <th scope="col">{this.props.t3}</th>
                            <th scope="col">{this.props.t4}</th>
                            <th scope="col">{this.props.t5}</th>
                            <th scope="col">{this.props.t6}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.datos.map(publicidad => (
                            <FilaTable
                                cambiarEstado={this.props.cambiarEstado}
                                modificar={this.props.modificar}
                                tipo='publicidad'
                                key={publicidad.id}
                                id={publicidad.id}
                                titulo={publicidad.titulo}
                                descripcion={publicidad.descripcion}
                                url={publicidad.url}
                                estado={publicidad.estado}
                            />
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

    tablaPagos = () => { // REVISAR BIEN ACÁ!!!
        return(
            <React.Fragment>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">{this.props.t1}</th>
                            <th scope="col">{this.props.t2}</th>
                            <th scope="col">{this.props.t3}</th>
                            <th scope="col">{this.props.t4}</th>
                            <th scope="col">{this.props.t5}</th>
                            <th scope="col">{this.props.t6}</th>
                            <th scope="col">{this.props.t7}</th>
                            <th scope="col">{this.props.t8}</th>
                            <th scope="col">{this.props.t9}</th>
                            <th scope="col">{this.props.t10}</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.datos.map(pagos => (
                            <FilaTable
                                cambiarEstado={this.props.cambiarEstado}
                                modificar={this.props.modificar}
                                tipo='pagos'
                                key={pagos.id}
                                id={pagos.id}
                                nroFactura={pagos.nroFactura}
                                fechaPagoFactura={pagos.fechaPagoFactura}
                                fechaVencimientoFactura={pagos.fechaVencimientoFactura}
                                tipoPago={pagos.tipoPago}
                                valorPagado={pagos.valorPagado}
                                seleccionBanco={pagos.seleccionBanco}
                                estadoFactura={pagos.estadoFactura}
                                estado={pagos.estado}
                            />                            
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

    mostrarTabla = () => {
        if (this.props.tabla === 'publicidad') {
            return this.tablaPublicidad()
        }
        if (this.props.tabla === 'usuario') {
            return this.tablaUsuario()
        }
        if (this.props.tabla === 'pagos') {
            return this.tablaPagos()
        } else {
            return null
        }
    }

    render() {
        return(
            this.mostrarTabla()
        )
    }
}

export default Table;
