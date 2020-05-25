import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';

function BotonModificar(props) {
    const i18n = useTranslation();
    return (
        <button type="button" onClick={props.modificar} className="btn btn-success" style={{ marginBottom: "10px", width: "130px" }}>
            <svg className="bi bi-pencil-square" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z" />
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clipRule="evenodd" />
            </svg>
                &nbsp; {/*Modificar*/}
            {i18n.t('users-panel.usr_btn-change')}
        </button>
    );
}

export default BotonModificar;