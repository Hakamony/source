export default function MatchPopUp() {
	return (
		<div className="text-center">
			<h2 className="text-2xl font-bold">انهاءالمباراة</h2>
			<div>
				<button
					type="button"
					className="rounded-lg bg-prime-green-200 px-12 py-1 text-xl font-bold text-prime-white"
				>
					انهاء
				</button>
				<button
					type="button"
					className="rounded-lg bg-prime-yellow px-12 py-1 text-xl font-bold text-prime-dark"
				>
					الغاء
				</button>
			</div>
		</div>
	);
}
