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
          Improvise with word
        </h1>
        <div>
          {response.data === undefined && <p>Loading...</p>}
          {response.data !== undefined && <p>Word: {response.data.name}</p>}
        </div>
        <div>
          <button onClick={handleButtonClick}>New word</button>
        </div>
      </header>
    </div>
  );
}
