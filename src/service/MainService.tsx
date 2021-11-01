import axios from "axios";
import { routes } from "../utils/routes";

export function mainConnection() {
    return axios.get(routes.LOCAL_SERVER + routes.VERSION)
}

