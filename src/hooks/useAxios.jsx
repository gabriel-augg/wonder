import { useState } from 'react';
import useFlashMessage from './useFlashMessage';
import api from '../utils/api';
import error from '../utils/error';

const useAxios = () => {
    const [loading, setLoading] = useState(true);
    const [loadingSubmit, setLoadingSubmit] = useState(false)
    const { setFlashMessage } = useFlashMessage()

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
        } catch (res) {
            setFlashMessage(error(res.response.data.message))
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

    const deleteOne = async (url) => {
        try {
            await api.delete(url)
        } catch (error) {
            console.log(error)
        }
    }

    return { get, create, update, deleteOne, loading, setLoading, loadingSubmit };
};

export default useAxios;