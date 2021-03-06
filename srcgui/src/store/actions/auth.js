import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, usuario) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token, 
        usuario: usuario
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authlogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}


export const authLogin = (username, password) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    return dispatch => {
        dispatch(authStart());

        axios.post('http://127.0.0.1:8000/auth/login/', {
            username: username,
            password: password
        }, config)
            .then(res => {
                const token = res.data.token;
                const usuario = res.data.user.profile.tipo_usuario;
                localStorage.setItem('token', token);
                localStorage.setItem('authenticate', true);
                localStorage.setItem('usuario', usuario);
                dispatch(authSuccess(token, usuario ));
            })
            .catch(err => {
                dispatch(authFail(err));
            }) 
    }
}


