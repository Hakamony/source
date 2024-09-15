'use client';

import { FaArrowUp } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';
import matchStorage from '@/lib/storage/matchStorage';
import teamStorage from '@/lib/storage/teamStorage';

export default function EditMatches({ ...props }) {
	function moveMatchUp(match) {
		const place = matchStorage.getMatchesList().indexOf(match.id);
		if (place >= 0) {
			matchStorage.moveMatch(match.id, place - 1);
			props.setMatches(() =>
				matchStorage.getMatchesList().map((id) => matchStorage.getMatch(id)),
			);
		}
	}

	function moveMatchDown(match) {
		const place = matchStorage.getMatchesList().indexOf(match.id);
		if (place <= matchStorage.getMatchesList().length - 1) {
			matchStorage.moveMatch(match.id, place + 1);
			props.setMatches(() =>
				matchStorage.getMatchesList().map((id) => matchStorage.getMatch(id)),
			);
		}
	}

	return (
		<div
			style={{ display: props.active ? 'flex' : 'none' }}
			className="fixed inset-x-0 bottom-0 top-12 flex flex-col gap-8 overflow-y-scroll rounded-lg rounded-b-none border-2 border-b-0 border-solid border-prime-orange bg-white p-4"
		>
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-bold">تعديل قائمة المباريات</h2>
				<button
					onClick={() => {
						props.setShowEditMatches((prev) => !prev);
					}}
					type="button"
				>
					<IoCloseCircle className="flex-0 text-4xl text-red-700" />
				</button>
			</div>

			<ul className="flex flex-col gap-4 overflow-y-scroll">
				{props.mathces.map((match, i) => {
					const team1 = teamStorage.getTeam(match.teams.first);
					const team2 = teamStorage.getTeam(match.teams.second);
					return (
						<li
							className="flex items-center justify-between rounded-lg border-2 border-prime-orange p-4 shadow-lg"
							key={match.id}
						>
							<div className="flex flex-1 items-center gap-4">
								<span>{team1.name}</span>
								<span>V.S</span>
								<span>{team2.name}</span>
							</div>
							<div className="flex gap-2 text-2xl text-prime-green-200">
								<button
									type="button"
									className="rounded-lg bg-prime-green-200 px-4 py-2 text-xl font-bold text-prime-white"
									onClick={() => moveMatchUp(match)}
								>
									<FaArrowUp />
								</button>
								<button
									type="button"
									className="rounded-lg bg-prime-green-200 px-4 py-2 text-xl font-bold text-prime-white"
									onClick={() => moveMatchDown(match)}
								>
									<FaArrowUp className="rotate-180" />
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
