import useGetRandomWord from '@/server/useGetRandomWord';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import axios from 'axios';
import { useState } from 'react';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { data } = useGetRandomWord(isFirstRender);

  setIsFirstRender(false);

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
