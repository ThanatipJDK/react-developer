import Axios from 'axios'

export const register = (param) => {
    const body = param
    const url = `https://asia-southeast2-api-mos-dev.cloudfunctions.net/api`
    return Axios({
        url :'/register',
        baseURL : url,
        method : 'POST',
        data : body,
        contentType : 'application/json'
    })
};

export const login = (param) => {
    const body = param
    const url = `https://asia-southeast2-api-mos-dev.cloudfunctions.net/api`
    return Axios({
        url :'/login',
        baseURL : url,
        method : 'POST',
        data : body,
        contentType : 'application/json'
    })
};
