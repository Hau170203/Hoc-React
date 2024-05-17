import { del } from "../utils/request";

export const deleteProducts = async (item) =>{
    const result = await del('products',item)
    return result;
}