import Counter from "@/components/input/Counter";

export default function ScoreCounterPage() {
	return (
		<main className="font-main h-[80vh] px-4 py-12">
			<h1 className="text-center text-4xl font-bold mb-2">حاسبة النقاط</h1>
            <div className=" flex-col flex justify-around h-full max-w-lg">
                <h2 className="text-center text-2xl">الفريق أ</h2>
                <Counter/>
                <h2 className="text-center text-2xl">الفريق ب</h2>
                <Counter/>
            </div>
		</main>
	);
}
