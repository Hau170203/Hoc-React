import { get } from "../utils/request"

export const getListTopic = async () => {
    const result = await get('topics');
    return result;
}

export const getTopic = async (id) => {
    const result = await get(`topics/${id}`);
    return result;
}

export const searchTopic = async (value) => {
    const result = await get(`topics?q=${value}`);
    return result;
}
