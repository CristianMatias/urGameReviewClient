import axios from "axios";
import { routes } from "../utils/routes";

const BASE_URL = routes.LOCAL_SERVER + routes.VERSION;

export function signup(username, email, password) {
    axios({
        method: "post",
        url: BASE_URL + routes.SIGNUP,
        data: {
            "nickname": username,
            "email": email,
            "password": password
        },
        headers: { 
            "Accept": 'application/json',
            "Content-Type": "application/json"
        }
    })
    .then(response => {return response.data})
    .catch(err => console.log(err))
}

export function login(username, pwd) {
    axios({
        method: "POST",
        url: BASE_URL + routes.LOGIN,
        params: {"user": username, "pwd": pwd},
        headers: { 
            "Accept": 'application/json',
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        console.log(response.data)
        return response.data
    })
    .catch(err => console.log(err))
}
