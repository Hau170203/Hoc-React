import { getCate } from "../utils/request";

export const getCategory = async () =>{
    const result = await getCate('category');
    return result;
}