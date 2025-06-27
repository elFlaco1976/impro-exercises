import useGetRandomWord from '@/server/useGetRandomWord';
import { createFileRoute } from '@tanstack/react-router';

import { useEffect, useState } from 'react';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const response = useGetRandomWord();

  useEffect(() => {
    if (!isFirstRender) {
      setIsFirstRender(true);
    }
  }, [isFirstRender]);

  const handleButtonClick = () => {
    response.refetch();
  };

  return (
    <div className="text-center">
      <header>
        <h1 className="text-4xl font-bold text-blue-600">Improvise</h1>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-2xl font-semibold text-gray-800">
          {response.data === undefined ? 'Loading...' : response.data}
        </div>
        <button
          onClick={handleButtonClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Get a new word
        </button>
        {response.isError && (
          <p className="text-red-500 mt-2">Error: {response.error.message}</p>
        )}
      </main>
    </div>
  );
}
