import { post } from "../utils/request";

export const bookRoom = async (option) => {
    const result =  await post('BookRoom', option);
    return result;
}