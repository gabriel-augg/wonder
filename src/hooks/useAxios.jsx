import { useState } from 'react';
import api from '../utils/api';

const useAxios = () => {
    const [loading, setLoading] = useState(true);
    const [loadingSubmit, setLoadingSubmit] = useState(false)

    const get = async (url, options = {}) => {
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

    const create = async (url, data, options = {}) => {
        setLoadingSubmit(true)
        try {
            const data = await api.request({
                url, 
                data, 
                ...options
            })
            return data
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingSubmit(false)
        }
    }

    return { get, create, loading, loadingSubmit };
};

export default useAxios;