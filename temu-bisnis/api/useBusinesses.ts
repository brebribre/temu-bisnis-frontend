import { ref } from 'vue';
import { useFetch } from './useFetch';
import { Business } from './interfaces.ts';

const ENDPOINT = '/api/businesses';

export const useBusinesses = () => {
  const { fetchData } = useFetch();
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

  return { fetchBusinesses, businesses };
};
