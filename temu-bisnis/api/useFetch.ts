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

  const postData = async (endpoint: string, data: any) => {
    try {
      const response = await axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };

  const deleteData = async (endpoint: string, data: any) => {
    try {
      const response = await axiosInstance.delete(endpoint, { data });
      return response.data;
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  };

  return { fetchData, postData, deleteData };
};
