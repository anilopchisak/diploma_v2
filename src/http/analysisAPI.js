import {$host} from "./index";

export const fetchAnalysis = async (ingrs) => {
    const {data} = await $host.post('http://localhost:8000/analyze/', {ingrs});
    console.log(data);
    return data;
}

export const fetchComparison = async (to_compare1, to_compare2) => {
    const {data} = await $host.post('http://localhost:8000/compare/', {to_compare1, to_compare2});
    console.log(data);
    return data;
}