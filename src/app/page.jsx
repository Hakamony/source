import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex items-center flex-col w-[100vw] h-[100vh] justify-center bg-prime-white">
			<h1 className="text-4xl font-bold border-prime-orange border-2 mb-10 text-prime-blue">
				Welcome to Hakamony
			</h1>
			<Link href="/SelectEvent" className="text-prime-dark">
				Select Event Page
			</Link>
		</main>
	);
}
