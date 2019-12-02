import * as Types from './../constants/UserAction';
import callapiUser from './../utils/callapiUser';
import axios from 'axios'



export const actLoginUserReques = (user) => {
    return dispatch => {
        return callapiUser('login?email=devcodedao1997@gmail.com&password=12345678', 'POST', null).then(res => {
            console.log(res)
            dispatch(actLoginUser(res))
            // console.log(res.data.token)
            axios.defaults.headers.common['Authorization'] =res.data.token;
          
        })
        .catch(() => console.log("err"))
    }
}
export const actLoginUser = (user) => {
    return {
        type: Types.LOGIN_USER,
        user

    }
}




