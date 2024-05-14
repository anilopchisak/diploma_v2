import {$host} from "./index";
import jwt_decode from "jwt-decode";

export const fetchIngrs = async () => {
    const {data} = await $host.get('ingredient')
    return data
}