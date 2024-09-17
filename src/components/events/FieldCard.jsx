import { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import Image from 'next/image';
import Field from '../../../public/assets/field.jpg';
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

	function handleEndMatch() {
		props.addNextMatch(props.matchId);
		props.setCounter((prev) => prev + 1);
	}

	return (
		<div className="relative rounded-lg bg-white py-2 text-center shadow-md">
			<h3 className="mb-2 text-2xl font-bold text-prime-orange">
				ملعب {props.i + 1}
			</h3>
			<div className="relative">
				<Image
					alt="texture"
					src={Field}
					placeholder="blur"
					quality={100}
					fill
					sizes="100vw"
					style={{
						objectFit: 'cover',
					}}
					className=""
				/>
				<div className="relative z-[1] px-2 pb-28 pt-14">
					<div className="flex flex-col items-center justify-start gap-4 text-xl font-bold">
						<p className="text-dark w-fit rounded bg-white px-4 py-2">
							مباراة: {props.counter + props.i}{' '}
						</p>
						<p className="flex w-full items-center justify-between gap-4">
							<button
								type="button"
								onClick={() => handleShowTeam(firstTeam)}
								className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-prime-orange bg-white py-1"
							>
								{firstTeam.name}
								<FaUsers />
							</button>
							<span className="text-2xl text-prime-orange">V.S</span>
							<button
								type="button"
								onClick={() => handleShowTeam(secondTeam)}
								className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-prime-orange bg-white py-1"
							>
								{secondTeam.name}
								<FaUsers />
							</button>
						</p>
					</div>
				</div>
				{teamId && (
					<PlayersPopUp team={teamId} show={showTeam} setShowTeam={setShowTeam} />
				)}
			</div>
			<div className="mt-2 flex justify-center gap-4">
				<button
					type="button"
					className="rounded-lg bg-prime-green-200 px-12 py-1 text-xl font-bold text-prime-white"
					onClick={handleEndMatch}
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
