import Counter from "@/components/input/Counter";

export default function ScoreCounterPage() {
	return (
		<main className="font-main h-full px-4 py-12">
			<h1 className="text-center text-4xl font-bold mb-2">حاسبة النقاط</h1>
            <div className=" flex-col flex justify-between h-full">
                <h2 className="text-center text-2xl">الفريق أ</h2>
                <Counter/>
                <h2 className="text-center text-2xl">الفريق ب</h2>
                <Counter/>
            </div>
		</main>
	);
}
