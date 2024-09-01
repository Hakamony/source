import Link from 'next/link';

export default function RandomGames() {
  // List of games (you can add more)
  const games = ["Football", "Basketball", "Volleyball", "Tennis", "Cricket", "Hockey", "Rugby"];
  const selectedGame = games[0];

  // Function to select a random game
  const selectRandomGame = () => {
    const randomIndex = Math.floor(Math.random() * games.length);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">ألعاب عشوائية</h1>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
      >
        Select the Random Game
      </button>

    	<h2 className="text-2xl font-semibold mt-8">{`Selected Game: ${selectedGame}`}</h2>

      <Link href="/" className="mt-10 text-blue-500 hover:underline">
        Back Home
      </Link>
    </main>
  );
}


