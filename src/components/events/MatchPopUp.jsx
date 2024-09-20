import { useEffect, useState } from 'react';
import Image from 'next/image';
import teamIcon from '../../../public/assets/team-icon.jpg';
import matchStorage from '@/lib/storage/matchStorage';
import teamStorage from '@/lib/storage/teamStorage';

export default function MatchPopUp({ ...props }) {
	const defaultWinnerValue = props.eventSport === 'volleyball' ? 24 : 1;

	const [scoresList, setScoresList] = useState({
		first: '',
		second: '',
	});

	useEffect(
		() =>
			setScoresList(() => ({
				first: props.match.scores.first,
				second: props.match.scores.second,
			})),
		[props.match],
	);

	function handleFormChange(e) {
		setScoresList((prev) => {
			return {
				...prev,
				[e.target.name]: Number(e.target.value),
			};
		});
	}

	function handleWinner(e) {
		if (e.target.nodeName === 'svg') {
			setScoresList((prev) => {
				return {
					...prev,
					[e.target.dataset.team]: Number(defaultWinnerValue),
				};
			});
		}
	}

	function endMatch() {
		if (scoresList.first && scoresList.second) {
			matchStorage.updateMatch(props.match.id, { scores: scoresList });
			teamStorage.addWinToTeam(
				scoresList.first > scoresList.second
					? props.firstTeam.id
					: props.secondTeam.id,
			);
			teamStorage.addLoseToTeam(
				scoresList.first > scoresList.second
					? props.secondTeam.id
					: props.firstTeam.id,
			);
			props.handleEndMatch();
			props.setShowEndMatchPopUP((prev) => !prev);
		}
	}

	return (
		<div
			className="fixed inset-x-2 top-1/3 z-30 h-fit flex-col gap-8 rounded-lg border-2 border-solid border-prime-dark bg-prime-white py-8 text-center"
			style={{ display: props.active ? 'flex' : 'none' }}
		>
			<h2 className="text-4xl font-bold">انهاء مباراة {props.matchId}</h2>
			<table className="table-auto font-bold">
				<thead>
					<tr>
						<th>اسم الفريق</th>
						<th>النتيجة</th>
						{/* <th>الفائز</th> */}
					</tr>
				</thead>
				<tbody className="divide-y-2 divide-white">
					<tr>
						<td className="flex justify-center gap-4">
							<Image
								src={teamIcon}
								alt="Picture of the author"
								width={25}
								className="rounded-full"
							/>
							<span>{props.firstTeam.name}</span>
						</td>
						<td>
							<input
								type="number"
								name="first"
								value={scoresList.first}
								className="w-16 rounded-md bg-white text-center"
								placeholder="0"
								onChange={handleFormChange}
								required
							/>
						</td>
						{/* <td className="flex items-center justify-center">
							<button type="button" onClick={handleWinner}>
								<FaRegSquareCheck
									className="text-2xl text-prime-green-200 disabled:text-green-200"
									data-team="first"
								/>
							</button>
						</td> */}
					</tr>
					<tr>
						<td className="flex justify-center gap-4">
							<Image
								src={teamIcon}
								alt="Picture of the author"
								width={25}
								className="rounded-full"
							/>
							<span>{props.secondTeam.name}</span>
						</td>
						<td>
							<input
								type="number"
								name="second"
								value={scoresList.second}
								className="w-16 rounded-md bg-white text-center"
								placeholder="0"
								onChange={handleFormChange}
								required
							/>
						</td>
						{/* <td className="flex items-center justify-center">
							<button type="button" onClick={handleWinner}>
								<FaRegSquareCheck
									className="text-2xl text-prime-green-200 disabled:text-green-200"
									data-team="second"
								/>
							</button>
						</td> */}
					</tr>
				</tbody>
			</table>

			<div className="flex items-center justify-center gap-4 text-prime-white">
				<button
					type="button"
					className="rounded-lg bg-prime-green-200 px-12 py-1 text-xl font-bold"
					onClick={endMatch}
				>
					انهاء
				</button>
				<button
					type="button"
					className="rounded-lg bg-red-700 px-12 py-1 text-xl font-bold"
					onClick={() => props.setShowEndMatchPopUP((prev) => !prev)}
				>
					الغاء
				</button>
			</div>
		</div>
	);
}
