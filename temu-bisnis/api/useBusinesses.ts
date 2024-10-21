import { ref } from 'vue';
import { useFetch } from './useFetch';
import { Business } from './interfaces.ts';

const ENDPOINT = '/api/businesses';

export const useBusinesses = () => {
  const { fetchData, postData } = useFetch();
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

  return { fetchBusinesses, postBusiness, businesses };
};
