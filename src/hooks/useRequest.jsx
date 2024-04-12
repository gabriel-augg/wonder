import { useState } from 'react';
import useFlashMessage from './useFlashMessage';
import api from '../utils/api';

const useRequest = () => {
    const [loading, setLoading] = useState(true);
    const [loadingSubmit, setLoadingSubmit] = useState(false)
    const { setFlashMessage } = useFlashMessage()

    const request = async (url, options) => {
        try {
            const data = await api.request({
                url,
                ...options
            })

            return data
        } catch (error) {
            console.log(error)
        }
    }

    return { request, loading, setLoading, loadingSubmit, setLoadingSubmit };
};

export default useRequest;