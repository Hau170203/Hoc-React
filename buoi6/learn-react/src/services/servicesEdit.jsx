import { edit } from "../utils/request";

export const servicesEdit = async (id, data) =>{
    
    const result = await edit('products', id, data);
    return result;
}