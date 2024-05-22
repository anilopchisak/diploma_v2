import {$host} from "./index";

export const fetchIngrNames = async () => {
    const {data} = await $host.get('http://localhost:8000/all_ingr_names/');
    console.log(data);
    return data;
}

export const fetchIngrs = async () => {
    const {data} = await $host.get('http://localhost:8000/ingredient_search/');
    console.log(data);
    return data;
}

export const fetchOneIngr = async (id) => {
    const {data} = await $host.get('http://localhost:8000/ingr/' + id);
    return data;
}