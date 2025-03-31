import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import axios from 'axios';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['words'],
    queryFn: async () => {
      /*       const response = await fetch('/.netlify/functions/words');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); */
      const response = await axios<{ word: string }>({
        url: 'https://improx.netlify.app/.netlify/functions/words',
        method: 'GET',
      });

      return response.data;
    },
  });

  return (
    <div className="text-center">
      <header>
        <h1 className="text-4xl font-bold text-blue-600">
          Testing Netlify Functions
          {data === undefined && <span>Loading...</span>}
          {data !== undefined && <span>Word: {data.word}</span>}
        </h1>
      </header>
    </div>
  );
}
