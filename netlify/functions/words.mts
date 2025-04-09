import type { Context } from '@netlify/functions';

export default async (_req: Request, _context: Context) => {
  const words = ['apple', 'banana', 'cherry' /* ... more words ... */];
  const randomWord = words[Math.floor(Math.random() * words.length)];

  /*   return {
    statusCode: 200,
    body: JSON.stringify({ word: randomWord }),
  }; */

  return new Response(JSON.stringify({ name: randomWord }));
};
