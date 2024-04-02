import { useState } from 'react';
import api from '../utils/api';

const useAxios = (url) => {
    const [loading, setLoading] = useState(true);

    const getPosts = async (options = {}) => {
        try {
            const data = await api.request({
                url,
                ...options
            })

            return data
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return { getPosts, loading };
};

export default useAxios;