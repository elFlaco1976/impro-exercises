import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetRandomWord = (isFirstRender: boolean) => {
  const queryResponse = useQuery({
    queryKey: ['words'],
    queryFn: async () => {
      const response = await axios({
        url: 'https://improx.netlify.app/.netlify/functions/words',
        method: 'GET',
      });

      return response.data;
    },
    enabled: isFirstRender,
  });

  return queryResponse;
};

export default useGetRandomWord;
