import {$host} from "./index";

export const fetchAnalysis = async (ingrs) => {
    const {data} = await $host.post('http://localhost:8000/analyze/', {ingrs});
    console.log(data);
    return data;
}