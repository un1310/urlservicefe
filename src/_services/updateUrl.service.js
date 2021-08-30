import axios from 'axios';
import { notify } from '../utils/util';
import { authenticationService } from './authentication.service';

export const urlService = {
    updateUrl,
    getResponse
};

async function updateUrl (data) {
    const request = {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            'Cache-Control': "no-cache, no-store",
            'Authorization': "Bearer " + authenticationService.getToken()
        },
        data: JSON.stringify({url: data}),
        url: process.env.REACT_APP_BASE_URL+'/user/update'
    };

    try {
        const response = await axios(request);
        return response.data;
    } catch (error) {
        notify({message: "Some error occurred", type: "error", title: "Error"})
    }

}

async function getResponse () {
    const request = {
        method: "GET",
        headers: {
            'Content-Type': "application/json",
            'Cache-Control': "no-cache, no-store",
            'Authorization': "Bearer " + authenticationService.getToken()
        },
        url: process.env.REACT_APP_BASE_URL+'/user/url-response'
    };

    try {
        const response = await axios(request);
        return response.data;
    } catch (error) {
        notify({message: "Some error occurred", type: "error", title: "Error"})
    }

}