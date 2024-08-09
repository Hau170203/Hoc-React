import { get, post } from "../utils/request"


export const login = async (email, password) => {
    const result = await get(`users?email=${email}&password=${password}`);
    return result;
}

export const isAccount = async (email) => {
    const result = await get(`users?email=${email}`);
    return result;
}

export const createAccount = async (options) => {
    const result = await post(`users`,options);
    return result;
}