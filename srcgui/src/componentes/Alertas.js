import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';
import Swal from 'sweetalert2';

export default class alerta {
	constructor() {

	}

	// ALERTAS DEL PANEL DE USUARIOS
	nuevoUsuarioExito() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Genial :)',
			text: '¡El usuario se ha creado exitosamente!',
			showConfirmButton: false,
			timer: 2500
		})
	}

	nuevoUsuarioError() {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops... :(',
			text: 'Ha ocurrido un error a la hora de crear el usuario.',
			footer: '<a href="http://localhost:3000/PQRS">Haz click aquí para reportar el error</a>',
			showConfirmButton: true,
		})		
	}

	modificarUsuarioExito() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Genial :)',
			text: '¡El usuario se ha modificado exitosamente!',
			showConfirmButton: false,
			timer: 2500
		})
	}

	modificarUsuarioError() {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops... :(',
			text: 'Ha ocurrido un error a la hora de modificar el usuario.',
			footer: '<a href="http://localhost:3000/PQRS">Haz click aquí para reportar el error</a>',
			showConfirmButton: true,
		})		
	}

	cambiarEstadoUsuarioExito() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Genial :)',
			text: '¡El estado del usuario se ha cambiado exitosamente!',
			showConfirmButton: false,
			timer: 2500
		})
	}

	cambiarEstadoUsuarioError() {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops... :(',
			text: 'Ha ocurrido un error a la hora de cambiar el estado del usuario.',
			footer: '<a href="http://localhost:3000/PQRS">Haz click aquí para reportar el error</a>',
			showConfirmButton: true,
		})		
	}

	// TRANSFORMADORES Y SUBESTACIONES
	agregarSubestacionExito() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Genial :)',
			text: '¡La subestación se ha creado exitosamente!',
			showConfirmButton: false,
			timer: 2500
		})		
	}

	agregarSubestacionError() {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops... :(',
			text: 'Ha ocurrido un error a la hora de agregar la subestación.',
			footer: '<a href="http://localhost:3000/PQRS">Haz click aquí para reportar el error</a>',
			showConfirmButton: true,
		})				
	}

	agregarTransformadorExito() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Genial :)',
			text: '¡El transformador se ha creado exitosamente!',
			showConfirmButton: false,
			timer: 2500
		})		
	}

	agregarTransformadorError() {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops... :(',
			text: 'Ha ocurrido un error a la hora de agregar el transformador.',
			footer: '<a href="http://localhost:3000/PQRS">Haz click aquí para reportar el error</a>',
			showConfirmButton: true,
		})				
	}

	// CLIENTES
	nuevoClienteExito() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Genial :)',
			text: '¡El cliente se ha creado exitosamente!',
			showConfirmButton: false,
			timer: 2500
		})		
	}

	nuevoClienteError() {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops... :(',
			text: 'Ha ocurrido un error a la hora de crear al cliente.',
			footer: '<a href="http://localhost:3000/PQRS">Haz click aquí para reportar el error</a>',
			showConfirmButton: true,
		})	
	}

	modificarClienteExito() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Genial :)',
			text: '¡El cliente se ha modificado exitosamente!',
			showConfirmButton: false,
			timer: 2500
		})		
	}

	modificarClienteError() {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops... :(',
			text: 'Ha ocurrido un error a la hora de modificar al cliente.',
			footer: '<a href="http://localhost:3000/PQRS">Haz click aquí para reportar el error</a>',
			showConfirmButton: true,
		})	
	}

	crearContratoClienteExito() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Genial :)',
			text: '¡El contrato se ha creado exitosamente!',
			showConfirmButton: false,
			timer: 2500
		})		
	}

	crearContratoClienteError() {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops... :(',
			text: 'Ha ocurrido un error a la hora de cerar el contrato.',
			footer: '<a href="http://localhost:3000/PQRS">Haz click aquí para reportar el error</a>',
			showConfirmButton: true,
		})	
	}

	modificarContratoClienteExito() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Genial :)',
			text: '¡El contrato se ha modificado exitosamente!',
			showConfirmButton: false,
			timer: 2500
		})		
	}

	modificarContratoClienteError() {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops... :(',
			text: 'Ha ocurrido un error a la hora de modificar el contrato.',
			footer: '<a href="http://localhost:3000/PQRS">Haz click aquí para reportar el error</a>',
			showConfirmButton: true,
		})	
	}

	cambiarEstadoContratoClienteExito() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Genial :)',
			text: '¡Se ha cambiado el estado del contrato exitosamente!',
			showConfirmButton: false,
			timer: 2500
		})		
	}

	cambiarEstadoContratoClienteError() {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops... :(',
			text: 'Ha ocurrido un error a la hora de cambiar el estado del contrato.',
			footer: '<a href="http://localhost:3000/PQRS">Haz click aquí para reportar el error</a>',
			showConfirmButton: true,
		})	
	}

	//PUBLICIDAD

	nuevaPublicidadExito() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Genial :)',
			text: '¡Se ha creado la publicidad exitosamente!',
			showConfirmButton: false,
			timer: 2500
		})		
	}

	nuevaPublicidadError() {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops... :(',
			text: 'Ha ocurrido un error a la hora de crear la publicidad.',
			footer: '<a href="http://localhost:3000/PQRS">Haz click aquí para reportar el error</a>',
			showConfirmButton: true,
		})	
	}

	modificarPublicidadExito() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Genial :)',
			text: '¡Se ha modificado la publicidad exitosamente!',
			showConfirmButton: false,
			timer: 2500
		})		
	}

	modificarPublicidadError() {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops... :(',
			text: 'Ha ocurrido un error a la hora de modificar la publicidad.',
			footer: '<a href="http://localhost:3000/PQRS">Haz click aquí para reportar el error</a>',
			showConfirmButton: true,
		})	
	}

	cambiarEstadoPublicidadExito() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Genial :)',
			text: '¡Se ha cambiado el estado de la publicidad exitosamente!',
			showConfirmButton: false,
			timer: 2500
		})		
	}

	cambiarEstadoPublicidadError() {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops... :(',
			text: 'Ha ocurrido un error a la hora de cambiar el estado de la publicidad.',
			footer: '<a href="http://localhost:3000/PQRS">Haz click aquí para reportar el error</a>',
			showConfirmButton: true,
		})	
	}

	exito() {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Your work has been saved',
			showConfirmButton: false,
			timer: 2000
		})
	}
	confirmarPago() {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Pay it!'
		}).then((result) => {
			if (result.value) {
				Swal.fire(
					'Deleted!',
					'Your Pay has been cancel.',
					'success'
				)
			}
		})

	}


	error() {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Something went wrong!',
		})
	}

	iniciarSesion() {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Oops... :(',
			text: 'Nombre de usuario o contraseña incorrectos. Por favor, verifícalos nuevamente...',
			showConfirmButton: true,
		})				
	}
	captcha() {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 2500,
			timerProgressBar: true,
			onOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer)
				toast.addEventListener('mouseleave', Swal.resumeTimer)
			}
		})

		Toast.fire({
			icon: 'warning',
			title: 'Por favor, confirma captcha para iniciar sesión'
		})
	}
	publicidad() {
		Swal.fire({
			title: 'Sweet!',
			text: 'Anuncio',
			imageUrl: 'https://unsplash.it/400/200',
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: 'Custom image',
		})
	}
	transferenciaBancaria() { // ¡NUEVO! ELIMINAR SI NO FUNCIONA. (@bryansbr)
		var strRespuesta1, strRespuesta2, strRespuesta3;
		const tfBancaria = (async () => {
			// Selección del tipo de pago a realizar (equivalente a etiqueta <select> & <option>)
			const { value: tipoPago } = await Swal.fire({
				title: 'Seleccione un tipo de pago',
				input: 'select',
				inputOptions: {
					efectivo: 'Efectivo',
					transfBancaria: 'Transferencia bancaria'
				},
				inputPlaceholder: 'Tipo de pago...',
				showCancelButton: true,
				cancelButtonColor: '#d33',

				// Función que valida la opción seleccionada.
				inputValidator: (value) => {
					return new Promise((resolve) => {
						if (value === 'transfBancaria') { // Si se selecciónó 'Transferencia bancaria'.
							// var strRespuesta1, strRespuesta2, strRespuesta3;
							Swal.mixin({
								input: 'text',
								confirmButtonText: 'Siguiente',
								showCancelButton: true,
								cancelButtonText: 'Cancelar',
								cancelButtonColor: '#d33',
								progressSteps: ['1', '2', '3'] // Número de datos a guardar en la cola.
							}).queue([ // Cola que pedirá los datos y los almacenará.
								{
									title: 'Paso 1: Número de la tarjeta',
									text: 'Ingrese los 15 dígitos de la tarjeta (incluyendo los guiones)',
									preConfirm: function (value) {
										strRespuesta1 = value;
									}
								},
								{
									title: 'Paso 2: Clave tarjeta',
									text: 'Ingrese la clave de la tarjeta',
									input: 'password',
									preConfirm: function (value) {
										strRespuesta2 = value;
									}
								},
								{
									title: 'Paso 3: Valor a pagar',
									text: 'Ingrese el valor a pagar (sin simbolos ni espacios)',
									preConfirm: function (value) {
										strRespuesta3 = value;
									}
								}
							]).then((result) => { // Aquí se muestran los datos ingresados en la cola.
								if (result.value) {
									//const answers = JSON.stringify(result.value)
									Swal.fire({
										title: 'Datos',
										html:
											'Los datos que has ingresado son:' +
											JSON.stringify(result) +
											'<br></br>' +
											'<pre>Respuesta 1: ' + strRespuesta1 +
											'<pre>Respuesta 2: ' + strRespuesta2 +
											'<pre>Respuesta 3: ' + strRespuesta3 +
											'</pre>',
										confirmButtonText: 'Aceptar'
									}).then((result) => { // Confirmación para decidir si se realiza la transferencia.
										Swal.fire({
											title: 'Realizar transferencia',
											text: "¿Está seguro(a) que desea realizar la transferencia?",
											icon: 'warning',
											showCancelButton: true,
											cancelButtonText: 'Cancelar',
											cancelButtonColor: '#d33',
											confirmButtonText: 'Confirmar',
											confirmButtonColor: '#3085d6'
										}).then((result) => {
											// Se evaluá la decisión tomada 'Confirmar' o 'Cancelar'.
											if (result.value) { // Si se confirmó la operación.
												// Aquí se empieza a realizar la transferencia...
												const Toast = Swal.mixin({
													toast: true,
													position: 'top-center',
													showConfirmButton: false,
													timer: 8000,
													timerProgressBar: true,
													onOpen: (toast) => {
														toast.addEventListener('mouseenter', Swal.stopTimer)
														toast.addEventListener('mouseleave', Swal.resumeTimer)
													}
												})
												Toast.fire({
													icon: 'info',
													title: 'Transfiriendo',
													text: 'La transferencia se está realizando...'
												}).then((result) => {
													// Aquí en este punto, la transferencia es ¡exitosa!
													/* NOTA: Sería bueno agregar una condición, en caso de
															que la transferencia falle.*/
													Swal.fire(
														'¡Transferencia realizada!',
														'La transferencia se ha realizado exitosamente.',
														'success'
													)
												})
												// return
											} else { // Si se canceló la operación.
												Swal.fire({
													icon: 'info',
													title: '¡Transferencia cancelada!',
													text: 'La transferencia ha sido cancelada.'
												})
											}
										})
									})
								}
							})
							resolve()
						} else { // Si se selección pago en 'Efectivo'.
							resolve(
								Swal.fire({
									position: 'top-center',
									icon: 'success',
									title: '¡Se ha seleccionado pago en efectivo!',
									text: "Por favor, ingresar el valor pagado en la casilla de 'Valor pagado'.",
									showConfirmButton: true,
									confirmButtonText: 'Aceptar',
									confirmButtonColor: '#3085d6'
								})
							)
						}
					})
				}
			})
			if (tipoPago) { // Almacena el tipo de pago.
				Swal.fire(`Datos ingresados: ${tipoPago}`)
			}
		})()
	}
}