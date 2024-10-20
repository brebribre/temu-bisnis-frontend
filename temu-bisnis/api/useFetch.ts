import axiosInstance from './axiosInstance';

export const useFetch = () => {
  const fetchData = async (endpoint: string) => {
    try {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  return { fetchData };
};
