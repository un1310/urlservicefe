import axios from 'axios';
import { notify } from '../utils/util';

export const authenticationService = {
    login,
    getToken
};

async function login (data) {
    const request = {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            'Cache-Control': "no-cache, no-store"
        },
        data: data,
        url: process.env.REACT_APP_AUTH_SERVER_BASE_URL
    };

    try {
        const response = await axios(request);
        return response.data;
    } catch (error) {
        notify({message: "Some error occurred", type: "error", title: "Error"})
    }

}

function getToken () {
    return sessionStorage.getItem('currentUserToken');
}