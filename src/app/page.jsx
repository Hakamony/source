import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex items-center flex-col w-[100vw] h-[100vh] justify-center">
			<h1 className="text-4xl font-bold border-black border-2 mb-10">
				Welcome to Hakamony
			</h1>
			<Link href="/SelectEvent" className="text-blue-700">
				Select Event Page
			</Link>
		</main>
	);
}
