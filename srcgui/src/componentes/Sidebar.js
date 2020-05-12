import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { slide as Menu } from 'react-burger-menu'
import { Layout } from 'antd';
import Language from './Language';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    left: '36px',
    top: '25px',
  },
  bmBurgerBars: {
    background: '#0f1323'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#0f1323',
    padding: '2.5em 1.5em 0',
    fontSize: '12pt',
    color: '#ffffff',
  },
  bmMorphShape: {
    fill: 'white'
  },
  bmItemList: {
    color: 'white',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
};

const handleLogout = (props) => { //ENVIO DE DATOS AL BACK
    props.authlogout();
    localStorage.removeItem('state');
    window.location="/"; //Ruta a la cual me redigira si el login es verdadero
}

function Sidebar(props) {
  const i18n = useTranslation();
  return (
    <Layout>
      <Menu styles={styles} style={{ fontSize: "30px", color: "white" }}>
        <nav>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" style={{color: "white"}} href="/ModuloAdministrador">
                    <svg fill="white" height="20px" width="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0" /></svg>
                    &nbsp; {i18n.t('buttons-panel.buttons_btn-home')}
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{color: "white"}} href="/ModuloAdministrador/Users">
                    <svg fill="white" height="20px" width="20px" viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg"><path d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0" /><path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0" /></svg>
                    &nbsp; {i18n.t('buttons-panel.buttons_btn-users')}
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{color: "white"}} href="/ModuloAdministrador/Activos">
                    <svg fill="white" height="20px" width="20px" viewBox="-119 -21 682 682.66669" xmlns="http://www.w3.org/2000/svg"><path d="m216.210938 0c-122.664063 0-222.460938 99.796875-222.460938 222.460938 0 154.175781 222.679688 417.539062 222.679688 417.539062s222.242187-270.945312 222.242187-417.539062c0-122.664063-99.792969-222.460938-222.460937-222.460938zm67.121093 287.597656c-18.507812 18.503906-42.8125 27.757813-67.121093 27.757813-24.304688 0-48.617188-9.253907-67.117188-27.757813-37.011719-37.007812-37.011719-97.226562 0-134.238281 17.921875-17.929687 41.761719-27.804687 67.117188-27.804687 25.355468 0 49.191406 9.878906 67.121093 27.804687 37.011719 37.011719 37.011719 97.230469 0 134.238281zm0 0" /></svg>
                    &nbsp; {i18n.t('buttons-panel.buttons_btn-actives')}
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{color: "white"}} href="/ModuloAdministrador/Reportes">
                    <svg fill="white" height="20px" viewBox="0 0 512 512" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="m76 240c12.101562 0 23.054688-4.855469 31.148438-12.652344l44.402343 22.199219c-.222656 1.808594-.550781 3.585937-.550781 5.453125 0 24.8125 20.1875 45 45 45s45-20.1875 45-45c0-6.925781-1.703125-13.410156-4.511719-19.277344l60.234375-60.234375c5.867188 2.808594 12.351563 4.511719 19.277344 4.511719 24.8125 0 45-20.1875 45-45 0-4.671875-.917969-9.089844-2.246094-13.328125l52.335938-39.242187c7.140625 4.769531 15.699218 7.570312 24.910156 7.570312 24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45c0 4.671875.917969 9.089844 2.246094 13.328125l-52.335938 39.242187c-7.140625-4.769531-15.699218-7.570312-24.910156-7.570312-24.8125 0-45 20.1875-45 45 0 6.925781 1.703125 13.410156 4.511719 19.277344l-60.234375 60.234375c-5.867188-2.808594-12.351563-4.511719-19.277344-4.511719-12.101562 0-23.054688 4.855469-31.148438 12.652344l-44.402343-22.199219c.222656-1.808594.550781-3.585937.550781-5.453125 0-24.8125-20.1875-45-45-45s-45 20.1875-45 45 20.1875 45 45 45zm0 0"/><path d="m497 482h-16v-317c0-8.289062-6.710938-15-15-15h-60c-8.289062 0-15 6.710938-15 15v317h-30v-227c0-8.289062-6.710938-15-15-15h-60c-8.289062 0-15 6.710938-15 15v227h-30v-107c0-8.289062-6.710938-15-15-15h-60c-8.289062 0-15 6.710938-15 15v107h-30v-167c0-8.289062-6.710938-15-15-15h-60c-8.289062 0-15 6.710938-15 15v167h-16c-8.289062 0-15 6.710938-15 15s6.710938 15 15 15h482c8.289062 0 15-6.710938 15-15s-6.710938-15-15-15zm0 0"/></svg>
                    &nbsp; {i18n.t('buttons-panel.buttons_btn-reports')}
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{color: "white"}} href="/ModuloAdministrador/Pagos">
                  <svg fill="white" height="20px" viewBox="0 0 448 448.00022" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="m209.761719 402.082031c-14.472657-.015625-27.140625-9.714843-30.929688-23.683593-.128906-.484376-.128906-.964844-.230469-1.453126l-88.121093-47.617187c-2.386719-1.367187-5.089844-2.085937-7.839844-2.078125-1.027344 0-2.054687.09375-3.066406.285156-1.386719.242188-2.734375.679688-4 1.296875-2.878907 1.367188-5.277344 3.578125-6.871094 6.34375-1.394531 2.4375-2.132813 5.191407-2.144531 8-.039063 5.722657 2.996094 11.027344 7.953125 13.886719l145.847656 87.273438c3.820313 2.390624 8.238281 3.660156 12.746094 3.664062h112.71875c3.011719-.003906 5.996093-.574219 8.800781-1.679688l29.375-11.601562v-86.183594l-28.601562-17.125c-3.722657-2.230468-7.984376-3.410156-12.328126-3.410156h-30.664062c-4.882812 0-9.746094.640625-14.460938 1.902344l-92.34375 24.707031c-6.480468 1.796875-11.171874 7.414063-11.785156 14.109375v2.617188c.054688 1 .207032 1.992187.464844 2.960937 1.902344 6.972656 8.25 11.804687 15.480469 11.785156.972656-.082031 5.679687-1.042969 9.328125-1.882812l82.847656-22.167969 4.125 15.457031-83.117188 22.238281c-4.320312 1.160157-8.730468 1.949219-13.183593 2.355469zm0 0"/><path d="m400 320h48v128h-48zm0 0"/><path d="m0 0h48v144h-48zm0 0"/><path d="m91.296875 125.886719c10.917969 7.25 23.609375 11.386719 36.703125 11.96875v-38.65625c-5.910156-2.15625-11.433594-5.257813-16.351562-9.183594l-4.6875-3.800781 10.078124-12.429688 4.640626 3.757813c15.851562 12.671875 38.453124 12.335937 53.921874-.796875l5.597657-4.800782 47.199219 47.199219c6.28125 6.25 16.4375 6.230469 22.691406-.046875 6.25-6.28125 6.230468-16.4375-.050782-22.6875l-56.453124-56.515625 11.308593-11.308593 19.417969 19.414062h66.015625l-31.601563-31.601562c-10.476562-10.535157-24.738281-16.4414068-39.597656-16.398438h-100.578125c-3.722656 0-7.394531.871094-10.726562 2.535156l-17.9375 8.96875c-5.996094 2.988282-12.644531 4.429688-19.34375 4.191406l-7.542969-.269531v104.574219h18.398438zm0 0"/><path d="m144 102.550781v137.449219h304v-176h-206.6875l16 16h134.6875v8c0 17.671875 14.328125 32 32 32h8v64h-8c-17.671875 0-32 14.328125-32 32v8h-192v-8c0-17.671875-14.328125-32-32-32h-8v-64h8c10.140625-.007812 19.675781-4.832031 25.6875-13l-13.648438-13.648438c-10.683593 6.925782-23.34375 10.160157-36.039062 9.199219zm0 0"/><path d="m239.777344 139.753906c-8.46875.019532-16.597656-3.3125-22.609375-9.273437l-12.070313-12.082031c-7.324218 8.992187-17.664062 15.011718-29.097656 16.9375v33.328124c20.128906 3.441407 35.894531 19.207032 39.335938 39.335938h161.328124c3.441407-20.128906 19.207032-35.894531 39.335938-39.335938v-33.328124c-20.128906-3.441407-35.894531-19.207032-39.335938-39.335938h-107.128906c3.824219 9.433594 2.847656 20.136719-2.621094 28.71875 14.671876-15.539062 38.972657-16.796875 55.171876-2.851562 16.203124 13.945312 18.578124 38.160156 5.394531 54.984374-13.179688 16.828126-37.261719 20.316407-54.679688 7.921876-17.414062-12.390626-22.007812-36.285157-10.433593-54.253907-6.027344 5.921875-14.140626 9.238281-22.589844 9.234375zm0 0"/><path d="m320 152c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0"/></svg>
                  &nbsp; {i18n.t('buttons-panel.buttons_btn-payments')}
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{color: "white"}} href="/ModuloAdministrador/Publicidad">
                <svg className="bi bi-flag-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3.5 1a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z" clipRule="evenodd"/>
                  <path fillRule="evenodd" d="M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 00.593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 01.5.5v6a.5.5 0 01-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 019 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 013.5 9V3a.5.5 0 01.223-.416l.04-.026z" clipRule="evenodd"/>
                </svg>      
                  &nbsp; {i18n.t('buttons-panel.buttons_btn-advertising')}
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{color: "white"}} href="/ModuloAdministrador/Clientes">
                <svg className="bi bi-people-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd"/>
                </svg>
                  &nbsp; {i18n.t('buttons-panel.buttons_btn-customers')}
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{color: "white"}} href="/ModuloAdministrador/Bancos">
                <svg className="bi bi-people-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="" clipRule="evenodd"/>
                </svg>
                  &nbsp; {i18n.t('buttons-panel.buttons_btn-banks')}
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" style={{color: "white"}} href="/ModuloAdministrador/Configuracion">
                    <svg fill="white" height="20px" width="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m499.953125 197.703125-39.351563-8.554687c-3.421874-10.476563-7.660156-20.695313-12.664062-30.539063l21.785156-33.886719c3.890625-6.054687 3.035156-14.003906-2.050781-19.089844l-61.304687-61.304687c-5.085938-5.085937-13.035157-5.941406-19.089844-2.050781l-33.886719 21.785156c-9.84375-5.003906-20.0625-9.242188-30.539063-12.664062l-8.554687-39.351563c-1.527344-7.03125-7.753906-12.046875-14.949219-12.046875h-86.695312c-7.195313 0-13.421875 5.015625-14.949219 12.046875l-8.554687 39.351563c-10.476563 3.421874-20.695313 7.660156-30.539063 12.664062l-33.886719-21.785156c-6.054687-3.890625-14.003906-3.035156-19.089844 2.050781l-61.304687 61.304687c-5.085937 5.085938-5.941406 13.035157-2.050781 19.089844l21.785156 33.886719c-5.003906 9.84375-9.242188 20.0625-12.664062 30.539063l-39.351563 8.554687c-7.03125 1.53125-12.046875 7.753906-12.046875 14.949219v86.695312c0 7.195313 5.015625 13.417969 12.046875 14.949219l39.351563 8.554687c3.421874 10.476563 7.660156 20.695313 12.664062 30.539063l-21.785156 33.886719c-3.890625 6.054687-3.035156 14.003906 2.050781 19.089844l61.304687 61.304687c5.085938 5.085937 13.035157 5.941406 19.089844 2.050781l33.886719-21.785156c9.84375 5.003906 20.0625 9.242188 30.539063 12.664062l8.554687 39.351563c1.527344 7.03125 7.753906 12.046875 14.949219 12.046875h86.695312c7.195313 0 13.421875-5.015625 14.949219-12.046875l8.554687-39.351563c10.476563-3.421874 20.695313-7.660156 30.539063-12.664062l33.886719 21.785156c6.054687 3.890625 14.003906 3.039063 19.089844-2.050781l61.304687-61.304687c5.085937-5.085938 5.941406-13.035157 2.050781-19.089844l-21.785156-33.886719c5.003906-9.84375 9.242188-20.0625 12.664062-30.539063l39.351563-8.554687c7.03125-1.53125 12.046875-7.753906 12.046875-14.949219v-86.695312c0-7.195313-5.015625-13.417969-12.046875-14.949219zm-152.160156 58.296875c0 50.613281-41.179688 91.792969-91.792969 91.792969s-91.792969-41.179688-91.792969-91.792969 41.179688-91.792969 91.792969-91.792969 91.792969 41.179688 91.792969 91.792969zm0 0" /></svg>
                    &nbsp; {i18n.t('buttons-panel.buttons_btn-settings')}
                </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" style={{ color: "white" }} onClick={() => handleLogout(props)}>
                <svg fill="white" height="20px" width="20px" viewBox="0 0 512.00533 512" xmlns="http://www.w3.org/2000/svg"><path d="m320 277.335938c-11.796875 0-21.332031 9.558593-21.332031 21.332031v85.335937c0 11.753906-9.558594 21.332032-21.335938 21.332032h-64v-320c0-18.21875-11.605469-34.496094-29.054687-40.554688l-6.316406-2.113281h99.371093c11.777344 0 21.335938 9.578125 21.335938 21.335937v64c0 11.773438 9.535156 21.332032 21.332031 21.332032s21.332031-9.558594 21.332031-21.332032v-64c0-35.285156-28.714843-63.99999975-64-63.99999975h-229.332031c-.8125 0-1.492188.36328175-2.28125.46874975-1.027344-.085937-2.007812-.46874975-3.050781-.46874975-23.53125 0-42.667969 19.13281275-42.667969 42.66406275v384c0 18.21875 11.605469 34.496093 29.054688 40.554687l128.386718 42.796875c4.351563 1.34375 8.679688 1.984375 13.226563 1.984375 23.53125 0 42.664062-19.136718 42.664062-42.667968v-21.332032h64c35.285157 0 64-28.714844 64-64v-85.335937c0-11.773438-9.535156-21.332031-21.332031-21.332031zm0 0" /><path d="m505.75 198.253906-85.335938-85.332031c-6.097656-6.101563-15.273437-7.9375-23.25-4.632813-7.957031 3.308594-13.164062 11.09375-13.164062 19.714844v64h-85.332031c-11.777344 0-21.335938 9.554688-21.335938 21.332032 0 11.777343 9.558594 21.332031 21.335938 21.332031h85.332031v64c0 8.621093 5.207031 16.40625 13.164062 19.714843 7.976563 3.304688 17.152344 1.46875 23.25-4.628906l85.335938-85.335937c8.339844-8.339844 8.339844-21.824219 0-30.164063zm0 0" /></svg>
                    &nbsp; {i18n.t('login.login_btn-logout')}
              </a>
            </li>
          </ul>
        </nav>
      </Menu>
      <nav className="rounded-bottom" style={{ background: "linear-gradient(to right, #45B649, #DCE35B)", marginLeft: "0px", textAlign: "left" }}>
        <div className="center-block" >
          <a className="navbar-header" href='/ModuloAdministrador'>
            <img className="img-responsive" src="../imagenes/imagotipo.png" style={{ height: '60px', width: 'auto', maxWidth: '200px', marginLeft: "70px", marginTop: "10px" }} onClick={() => window.location = "/ModuloAdministrador"} />
          </a>
          <div className="btn-group rounded" style={{ marginRight: "10px", backgroundColor: "" }}>
            <Language />
          </div>
        </div>
      </nav>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.reducer
  }
};

const mapDispatchToProps = dispatch => {
  return {
      authlogout() {
        dispatch(actions.authlogout())
      }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);