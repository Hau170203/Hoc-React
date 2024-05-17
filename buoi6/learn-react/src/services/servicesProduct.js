import { get, post } from "../utils/request";

export const getProductList = async () =>{
    
    const result = await get('products')
    return result
}

export const CreateProducts = async (option) => {
    const result = await post('products', option);
    return result;
}