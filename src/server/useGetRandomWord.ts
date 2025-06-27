import type { ApiWords } from '@/types/ApiWords';
import type { Languages } from '@/types/Languages';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getRandomWord = (language: Languages) => (data: { words: ApiWords }) => {
  return data.words[language][
    Math.floor(Math.random() * data.words[language].length)
  ];
};

const useGetRandomWord = () => {
  const currentLanguage: Languages = 'spanish';

  const queryResponse = useQuery({
    queryKey: ['words'],
    queryFn: async () => {
      const response = await axios<{ words: ApiWords }>({
        url: `/.netlify/functions/words`,
        method: 'GET',
      });

      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    select: getRandomWord(currentLanguage),
  });

  return queryResponse;
};

export default useGetRandomWord;
