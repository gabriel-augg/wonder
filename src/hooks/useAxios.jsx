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

    const update = async (url) => {
        try {
            const { data } = await api.patch(url)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    return { get, create, update, loading, loadingSubmit };
};

export default useAxios;