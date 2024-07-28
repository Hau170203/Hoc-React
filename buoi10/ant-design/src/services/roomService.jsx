import { post, get, del, patch } from "../utils/request"

export const createRoom = async (options) => {
    const result = await post('Room', options);
    return result;
}

export const getListRoom = async () => {
    const result = await get('Room');
    return result;
}

export const delRoom = async (id) => {
    const result = await del('Room', id);
    return result;
}

export const editRoom = async (id, options) => {
    const result = await patch(`Room/${id}`, options);
    return result;
}