import { ref } from 'vue';
import { useFetch } from './useFetch';
import { Business } from './interfaces.ts';

const ENDPOINT = '/api/businesses';

export const useBusinesses = () => {
  const { fetchData, postData, deleteData } = useFetch();
  const businesses = ref<Business[]>([]);

  const fetchBusinesses = async () => {
    let response;
    try {
      response = await fetchData(ENDPOINT);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    if (response) {
      businesses.value = response;
    }
  };

  const postBusiness = async (data: Business) => {
    try {
      await postData(ENDPOINT, data);
      await fetchBusinesses();
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const deleteBusiness = async (id: string) => {
    try {
      await deleteData(ENDPOINT + '/' + id);
      await fetchBusinesses();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return { businesses, fetchBusinesses, postBusiness, deleteBusiness };
};
