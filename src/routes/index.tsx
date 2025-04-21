import useGetRandomWord from '@/server/useGetRandomWord';
import { createFileRoute } from '@tanstack/react-router';

import { useEffect, useState } from 'react';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const response = useGetRandomWord(isFirstRender);

  useEffect(() => {
    setIsFirstRender(true);
  });

  const handleButtonClick = () => {
    response.refetch();
  };

  return (
    <div className="text-center">
      <header>
        <h1 className="text-4xl font-bold text-blue-600">
          Improvise with words
        </h1>
        <div className="text-2xl">
          {response.data === undefined && <p>Loading...</p>}
          {response.data !== undefined && <p>{response.data.name}</p>}
        </div>
        <div>
          <button
            className="bg-blue-500 text-black text-2xl"
            onClick={handleButtonClick}
          >
            New word
          </button>
        </div>
      </header>
    </div>
  );
}
