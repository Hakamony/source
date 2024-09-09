import { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import teamStorage from '@/lib/storage/teamStorage';
import matchStorage from '@/lib/storage/matchStorage';
import PlayersPopUp from './PlayersPopUp';

export default function FieldCard({ ...props }) {
	const [showTeam, setShowTeam] = useState(false);
	const [teamId, setTeamId] = useState();
	const match = matchStorage.getMatch(props.matchId);
	const firstTeam = teamStorage.getTeam(match.teams.first);
	const secondTeam = teamStorage.getTeam(match.teams.second);
	function handleShowTeam(team) {
		setTeamId(() => team);
		setShowTeam((prev) => !prev);
	}

	return (
		<div className="rounded-lg border-2 border-prime-orange p-4 text-center shadow-lg">
			<h3 className="text-6xl font-bold text-prime-orange">ملعب {props.i + 1}</h3>
			<div className="mt-4 flex flex-col gap-4 text-xl font-bold">
				<p className="flex items-center justify-between gap-4">
					<button
						type="button"
						onClick={() => handleShowTeam(firstTeam)}
						className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-prime-orange bg-white py-1"
					>
						{firstTeam.name}
						<FaUsers />
					</button>
					<span>V.S</span>
					<button
						type="button"
						onClick={() => handleShowTeam(secondTeam)}
						className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-prime-orange bg-white py-1"
					>
						{secondTeam.name}
						<FaUsers />
					</button>
				</p>
				<p className="text-start">مباراة: {match.number} </p>
			</div>
			<div className="mt-4 flex justify-center gap-4">
				<button
					type="button"
					className="rounded-lg bg-prime-green-200 px-12 py-1 text-xl font-bold text-prime-white"
					onClick={() => props.addNextMatch(props.matchId)}
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
			{teamId && (
				<PlayersPopUp team={teamId} show={showTeam} setShowTeam={setShowTeam} />
			)}
		</div>
	);
}
