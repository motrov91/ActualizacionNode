import axios from 'axios';

export const httpClientPluggin = {
    get: async (url : string) => {

        const { data } = await axios.get(url);
        return data;
    },

    post: async(url: string, body: any) => {
        throw New Error('Not implemented');
    },
    put: async(url: string, body: any) => {
        throw New Error('Not implemented');
    },
    delete: async(url: string, body: any) => {
        throw New Error('Not implemented');
    },
}