import teamStorage from '@/lib/storage/teamStorage';
import matchStorage from '@/lib/storage/matchStorage';

export default function FieldCard({ ...props }) {
	const match = matchStorage.getMatch(props.match);
	const firstTeam = teamStorage.getTeam(match.teams.first);
	const secondTeam = teamStorage.getTeam(match.teams.second);
	function handleMatchEnd(e) {
		matchStorage.updateMatch(e.target.dataSet.matchId, { status: 3 });
	}
	return (
		<div className="rounded-lg border-2 border-prime-orange p-4 text-center shadow-lg">
			<h3 className="text-6xl font-bold text-prime-orange">ملعب {props.i + 1}</h3>
			<div className="mt-4 flex flex-col gap-4 text-xl font-bold">
				<p className="flex justify-between">
					<span>{firstTeam.name}</span>
					<span>V.S</span>
					<span>{secondTeam.name}</span>
				</p>
				<p className="text-start">مباراة: {props.match.number} </p>
			</div>
			<div className="mt-4 flex justify-center gap-4">
				<button
					type="button"
					className="rounded-lg bg-prime-green-200 px-12 py-1 text-xl font-bold text-prime-white"
					onClick={handleMatchEnd}
					data-match-id={match.id}
					id="match-card"
				>
					انهاء
				</button>
				{/* <button
					type="button"
					className="rounded-lg bg-prime-yellow px-12 py-1 text-xl font-bold text-prime-dark"
				>
					تعديل
				</button> */}
			</div>
		</div>
	);
}
