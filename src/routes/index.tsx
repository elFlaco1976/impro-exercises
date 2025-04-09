import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import axios from 'axios';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const { data } = useQuery({
    queryKey: ['words'],
    queryFn: async () => {
      const response = await axios({
        url: 'https://improx.netlify.app/.netlify/functions/words',
        // url: 'https://pokeapi.co/api/v2/ability/1',
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
        </h1>
        <div>
          {data === undefined && <p>Loading...</p>}
          {data !== undefined && <p>Word: {data.name}</p>}
        </div>
      </header>
    </div>
  );
}
