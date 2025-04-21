import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetRandomWord = (isFirstRender: boolean) => {
  const queryResponse = useQuery({
    queryKey: ['words'],
    queryFn: async () => {
      const response = await axios({
        url: `/.netlify/functions/words`,
        method: 'GET',
      });

      return response.data;
    },
    enabled: isFirstRender,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return queryResponse;
};

export default useGetRandomWord;
