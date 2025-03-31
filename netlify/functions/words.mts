const test1 = async (event, context) => {
  const words = ['apple', 'banana', 'cherry' /* ... more words ... */];
  const randomWord = words[Math.floor(Math.random() * words.length)];

  return {
    statusCode: 200,
    body: JSON.stringify({ word: randomWord }),
  };
};

export default test1;
