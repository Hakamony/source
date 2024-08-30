import Counter from '@/components/input/Counter';

export default function ScoreCounterPage() {
	return (
		<main className="font-main h-[80vh] px-4 py-12">
			<h1 className="mb-2 text-center text-4xl font-bold">حاسبة النقاط</h1>
			<div className="flex h-full max-w-lg flex-col justify-around">
				<h2 className="text-center text-2xl">الفريق أ</h2>
				<Counter />
				<h2 className="text-center text-2xl">الفريق ب</h2>
				<Counter />
			</div>
		</main>
	);
}
