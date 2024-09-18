import { IoCloseCircle } from 'react-icons/io5';
import matchStorage from '@/lib/storage/matchStorage';
import teamStorage from '@/lib/storage/teamStorage';

export default function HistoryCard({ ...props }) {
	const matches = matchStorage.getMatches();
	const endedMathces = matches.filter((match) => match.status === 2);
	return (
		<div
			style={{ display: props.active ? 'flex' : 'none' }}
			className="fixed inset-x-0 bottom-0 top-12 z-20 flex flex-col gap-8 rounded-lg rounded-b-none border-2 border-b-0 border-solid border-prime-orange bg-white p-4"
		>
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-bold">المبارايات المنتهية</h2>
				<button
					onClick={() => {
						props.setShowHistory((prev) => !prev);
					}}
					type="button"
				>
					<IoCloseCircle className="flex-0 text-4xl text-red-700" />
				</button>
			</div>
			<ul className="flex flex-col gap-4 overflow-y-scroll">
				{endedMathces.map((match, i) => {
					const team1 = teamStorage.getTeam(match.teams.first);
					const team2 = teamStorage.getTeam(match.teams.second);

					return (
						<li
							className="flex w-full shrink-0 items-center justify-center gap-6 bg-prime-white py-6 text-lg font-bold"
							key={match.id}
						>
							<span>{team1.name}</span>
							<span className="text-sm">مباراة: {i + 1}</span>
							<span>{team2.name}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
