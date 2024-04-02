import { useState } from 'react';
import api from '../utils/api';

const useAxios = () => {
    const [loading, setLoading] = useState(true);
    const [loadingSubmit, setLoadingSubmit] = useState(false)

    const get = async (url, options = {}) => {
        setLoading(true)
        try {
            const { data } = await api.get(url, options)
            return data
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const create = async (url, obj) => {
        setLoadingSubmit(true)
        try {
            const { data } = await api.post(url, obj)
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