import axios from 'axios';

export const httpClientPluggin = {
    get: async (url : string) => {

        const { data } = await axios.get(url);
        return data;
    },
}