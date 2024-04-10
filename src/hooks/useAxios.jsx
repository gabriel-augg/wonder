import { useState } from 'react';
import useFlashMessage from './useFlashMessage';
import api from '../utils/api';
import error from '../utils/error';

const useAxios = () => {
    const [loading, setLoading] = useState(true);
    const [loadingSubmit, setLoadingSubmit] = useState(false)
    const [loadingDelete, setLoadingDelete] = useState(false)
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

    const post = async (url, obj) => {
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

    const put = async (url, obj) => {
        setLoadingSubmit(true)
        try {
            const { post } = await api.put(url, obj)
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingSubmit(false)
        }
    }

    const patch = async (url) => {

        try {
            await api.patch(url)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteOne = async (url) => {
        setLoadingDelete(true)
        try {
            await api.delete(url)
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingDelete(false)
        }
    }



    return { get, post, put, patch, deleteOne, loading, setLoading, loadingDelete, loadingSubmit };
};

export default useAxios;