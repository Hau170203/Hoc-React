import { get, post } from "../utils/request"

export const postAnswers = async (options) => {
    const  response = await post('answers', options);
    const result = await response.data
    return result;
};

export const getAnswersId = async (id) => {
    const result = await get(`answers/${id}`);
    return result;
}

export const getAnswers = async () => {
    const result = await get('answers');
    return result;
}