/*
TRIGGER PARA CAMBIO DEL ESTADO DE LA TARIFA
*/

/*============================================================================================================
============================================================================================================
CREA LA FUNCION sp_estado_tarifa() QUE CAMBIA EL ESTADO DE TODAS LAS TARIFAS A FALSE, PARA INSERTAR UNA NUEVA
============================================================================================================
============================================================================================================*/																	

--DROP FUNCTION sp_estado_tarifa() 
CREATE FUNCTION sp_estado_tarifa() 
   RETURNS trigger AS
$$
begin

update factura_tarifa
set estdo = false;

return new;
end
$$
LANGUAGE PLPGSQL;

/*============================================================================================================
============================================================================================================
BORRA EL TRIGGER TR_Cambia_estado_tarifa EN CASO DE SER NECESARIO
============================================================================================================
============================================================================================================*/																	
									  
DROP TRIGGER TR_Cambia_estado_tarifa
ON factura_tarifa;
																	
/*============================================================================================================
============================================================================================================
CREA EL TRIGGER TR_Cambia_estado_tarifa
============================================================================================================
============================================================================================================*/																	

CREATE TRIGGER TR_Cambia_estado_tarifa 
before insert
   ON factura_tarifa
   FOR EACH ROW
       EXECUTE PROCEDURE sp_estado_tarifa()

/*============================================================================================================
============================================================================================================
INSERTA TARIFA DE PRUEBA
============================================================================================================
============================================================================================================*/																	

insert into factura_tarifa (vlr_kwh,inco_vgca,obsrvcn,estdo)
values (350,current_date,'año 2020 II',true)
--VERIFICAR TARIFA
SELECT* FROM factura_tarifa


/*
TRIGGER PARA LA CAMBIAR ESTADO DE LA FACTURA
*/

/*============================================================================================================
============================================================================================================
CREA LA FUNCION sp_estado_factura() QUE CAMBIA EL ESTADO DE UNA FACTURA QUE HAYA RECIBIDO UN PAGO
============================================================================================================
============================================================================================================*/																	

--DROP FUNCTION sp_estado_factura() 
CREATE FUNCTION sp_estado_factura() 
   RETURNS trigger AS
$$
DECLARE v_cnsctvo_pgo_id integer;
DECLARE v_cnsctvo_fctra_id integer;
begin

v_cnsctvo_pgo_id	:= (select max(id) from factura_pago);
v_cnsctvo_fctra_id:= (select cnsctvo_fctra_id from factura_pago where id = v_cnsctvo_pgo_id);

update factura_facturacion
set estado = true
where id = v_cnsctvo_fctra_id;

return new;
end
$$
LANGUAGE PLPGSQL;

/*============================================================================================================
============================================================================================================
BORRA EL TRIGGER TR_Cambia_estado_factura EN CASO DE SER NECESARIO
============================================================================================================
============================================================================================================*/																	
	
DROP TRIGGER TR_Cambia_estado_factura 
   ON factura_pago
   
/*============================================================================================================
============================================================================================================
CREA EL TRIGGER TR_Cambia_estado_factura
============================================================================================================
============================================================================================================*/																	
CREATE TRIGGER TR_Cambia_estado_factura 
after insert
   ON factura_pago
   FOR EACH ROW
       EXECUTE PROCEDURE sp_estado_factura();

/*============================================================================================================
============================================================================================================
INSERTA PAGO DE PRUEBA
============================================================================================================
============================================================================================================*/																	
--MODIFICAR EL PRIMER VALOR EN EL VALUES, DE ACUERDO A LA FACTURA QUE SE QUIERA PAGAR																	
insert into factura_pago (cnsctvo_fctra_id,vlr_pgdo,fcha_pgo,obsrvcn,idntfccn_bnco_id,nmro_unco_idntfccn_usro_id)
values (4,16500,current_date,'',1,1)
																	
--VERIFICA EL ESTADO DE LA FACTURA PAGADA															
select * from factura_facturacion where id = cnsctvo_fctra_id																	

/*
TRIGGER PARA LA CREACIÓN DE LA FACTURA
*/

/*============================================================================================================
============================================================================================================
CREA LA FUNCION sp_factura() QUE INSERTA UNA FACTURA EN BASE A UN CONSUMO
============================================================================================================
============================================================================================================*/																	

--DROP FUNCTION sp_factura() 
CREATE FUNCTION sp_factura() 
   RETURNS trigger AS
$$

DECLARE		cnsctvo_cnsmo_id integer; 
DECLARE 	cnsctvo_trfa_id integer;
DECLARE		vlr_cnsmo float;
DECLARE		vlr_intrss_mra float;
DECLARE		vlr_rcnxn float;
DECLARE		vlr_ttl float; 
DECLARE		fcha_lmte_pgo date;
DECLARE		cntdd_fctrs_pndts	integer;
DECLARE		fcha_crte_srvco date;
DECLARE		obsrvcn varchar(150);

begin

cnsctvo_cnsmo_id:= (select max(id) from factura_consumo);

cnsctvo_trfa_id:= (select id from factura_tarifa where estdo = true);

vlr_cnsmo:= (select kwh from factura_consumo where id = cnsctvo_cnsmo_id)*(select vlr_kwh from factura_tarifa where id = cnsctvo_trfa_id);

cntdd_fctrs_pndts:=(select count(1)
					from factura_facturacion a inner join factura_consumo c
													on a.cnsctvo_cnsmo_id = c.id
												inner join (select id 
															from factura_consumo 
															where idntfccn_cntrto_id = (select idntfccn_cntrto_id
																						from factura_consumo 
																						where id = cnsctvo_cnsmo_id)) x
													on c.id = x.id
					where a.estado = false);

									  
vlr_intrss_mra:= (select sum(case	when (pa.fcha_pgo-a.fcha_lmte_pgo) between 0 and 30 then a.vlr_ttl+(a.vlr_ttl*(pa.fcha_pgo-a.fcha_lmte_pgo)/100)
			when (pa.fcha_pgo-a.fcha_lmte_pgo) > 30 then a.vlr_ttl+(a.vlr_ttl*(0.3))
			else 0 end)
					from factura_facturacion a inner join factura_consumo c
													on a.cnsctvo_cnsmo_id = c.id
												inner join (select id 
															from factura_consumo 
															where idntfccn_cntrto_id = (select idntfccn_cntrto_id
																						from factura_consumo 
																						where id = cnsctvo_cnsmo_id)) x
													on c.id = x.id
												inner join factura_pago pa
													on a.id = pa.cnsctvo_fctra_id
																						
					where pa.obsrvcn = '')
			+																		
(select sum(a.vlr_ttl+(a.vlr_ttl*(0.3)))
					from factura_facturacion a inner join factura_consumo c
													on a.cnsctvo_cnsmo_id = c.id
												inner join (select id 
															from factura_consumo 
															where idntfccn_cntrto_id = (select idntfccn_cntrto_id
																						from factura_consumo 
																						where id = cnsctvo_cnsmo_id)) x
													on c.id = x.id
																						
					where a.estado = false	);

vlr_rcnxn:= case when cntdd_fctrs_pndts >= 2 then 34000 else 0 end;

vlr_ttl:= vlr_cnsmo+case when vlr_intrss_mra is null then 0 else vlr_intrss_mra end+vlr_rcnxn;

fcha_lmte_pgo:= current_date + 25;

fcha_crte_srvco:= case when cntdd_fctrs_pndts >= 2 then current_date + 10 else '9999-12-31' end;

obsrvcn:= CONCAT('Factura generada el ',to_char(current_date,'YYYY-MM-DD'),' del concumo numero ',(cnsctvo_cnsmo_id));
																								   
insert into factura_facturacion (cnsctvo_trfa_id,vlr_cnsmo,vlr_intrss_mra,vlr_rcnxn,vlr_ttl,fcha_lmte_pgo,fcha_crte_srvco,cnsctvo_cnsmo_id,cntdd_fctrs_pndts,obsrvcn,estado)
values (cnsctvo_trfa_id,vlr_cnsmo,case when vlr_intrss_mra is null then 0 else vlr_intrss_mra end ,vlr_rcnxn,vlr_ttl,fcha_lmte_pgo,fcha_crte_srvco,cnsctvo_cnsmo_id,cntdd_fctrs_pndts,obsrvcn,false);

UPDATE factura_pago
set 	obsrvcn = 'mora cobrada'
from factura_facturacion a inner join factura_consumo c
								on a.cnsctvo_cnsmo_id = c.id
							inner join (select id 
										from factura_consumo 
										where idntfccn_cntrto_id = (select idntfccn_cntrto_id
																	from factura_consumo 
																	where id = cnsctvo_cnsmo_id)) x
								on c.id = x.id
							inner join factura_pago pa
								on a.id = pa.cnsctvo_fctra_id

where pa.obsrvcn = '';
																						
return new;
end
$$
LANGUAGE PLPGSQL;

/*============================================================================================================
============================================================================================================
BORRA EL TRIGGER TR_Genera_factura EN CASO DE SER NECESARIO
============================================================================================================
============================================================================================================*/																	
									  
DROP TRIGGER TR_Genera_factura
ON factura_consumo;
																	
/*============================================================================================================
============================================================================================================
CREA EL TRIGGER TR_Genera_factura
============================================================================================================
============================================================================================================*/																	

CREATE TRIGGER TR_Genera_factura 
AFTER insert
   ON factura_consumo
   FOR EACH ROW
       EXECUTE PROCEDURE sp_factura()

/*============================================================================================================
============================================================================================================
INSERTA CONSUMO DE PRUEBA
============================================================================================================
============================================================================================================*/																	
insert into factura_consumo (kwh,prdo_cnsmo,obsrvcn,idntfccn_cntrto_id)
values (111,202005,'',1)

--VERIFICAR ULTIMA FACTURACION																	
select * from factura_facturacion	
																	

															