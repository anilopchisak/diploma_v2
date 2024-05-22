import {$host} from "./index";

// export const fetchProperty = async () => {
//     const {data} = await $host.get('http://localhost:8000/all_ingr_names/');
//     // console.log(data);
//     return data;
// }

export const fetchIngrNames = async () => {
    const {data} = await $host.get('http://localhost:8000/all_ingr_names/');
    // console.log(data);
    return data;
}

export const fetchIngr = async () => {
    const {data} = await $host.get('http://localhost:8000/ingredient_search/');
    console.log(data);
    return data;
}

export const fetchIngrOne = async (ingr_name) => {
    const {data} = await $host.get('http://localhost:8000/ingredient_search/' + ingr_name);
    // console.log(data);
    return data;
}