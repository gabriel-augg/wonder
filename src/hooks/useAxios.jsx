import { useState, useEffect } from 'react';
import api from '../utils/api';

const useAxios = (url, method, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.request({
            url,
            ...options,
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, ...Object.values(options)]);

  return { data, error, loading };
};

export default useAxios;