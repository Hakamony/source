import Link from 'next/link';
import Storage from '@/components/layout/Storage';

export default function Home() {

	return (
		<main className="flex h-screen w-screen flex-col items-center justify-center">
			<h1 className="mb-10 border-2 border-prime-orange text-4xl font-bold text-prime-blue">
				Welcome to Hakamony
			</h1>
			<Storage/>
			<Link href="/SelectEvent" className="text-prime-dark">
				Select Event Page
			</Link>
		</main>
	);
}
