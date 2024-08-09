import { get } from "../utils/request"

export const getQuiz = async (id) => {
    const result =  await get(`questions/?topicId=${id}`);
    return result;
}

export const getQuizAll = async () => {
    const result = await get('questions');
    return result;
}