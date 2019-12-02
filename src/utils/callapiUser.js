import axios from 'axios';
import * as Config from './../constants/Config';
import Axios from 'axios';

export default function callapiUser(endpoint, method = 'GET', body) {
    return Axios({
        method:method,
        url: `${Config.API_USER}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err)
    })
}