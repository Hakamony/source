import { useState } from 'react';
import { FaCalculator } from 'react-icons/fa';
import { FaCirclePlay } from 'react-icons/fa6';
import { GiWhistle } from 'react-icons/gi';
import Image from 'next/image';
import teamIcon from '../../../public/assets/team-icon.jpg';
import Field from '../../../public/assets/field.jpg';
import teamStorage from '@/lib/storage/teamStorage';
import matchStorage from '@/lib/storage/matchStorage';
import PlayersPopUp from './PlayersPopUp';

export default function FieldCard({ ...props }) {
	const [showTeam, setShowTeam] = useState(false);
	const [teamId, setTeamId] = useState();
	const [match, setMatch] = useState(matchStorage.getMatch(props.matchId));
	const [firstTeam, setFirstMatch] = useState(
		teamStorage.getTeam(match.teams.first),
	);
	const [secondTeam, setSecondMatch] = useState(
		teamStorage.getTeam(match.teams.second),
	);

	function handleMatchStart() {
		setMatch((prev) => {
			return {
				...prev,
				status: 1,
			};
		});
		props.updateMatchStatus(props.matchId);
	}

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
			{props.match !== -1 && (
				<>
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
							className="blur-[2px]"
						/>
						<div className="relative z-[1] px-2 pb-28 pt-14">
							<div className="flex flex-col items-center justify-start gap-4 text-xl font-bold">
								<p className="text-dark flex w-fit items-center justify-center gap-2 rounded bg-white px-4 py-1">
									<span>{match.scores.first}</span>
									<span>:</span>
									<span>{match.scores.second}</span>
								</p>
								<div className="flex w-full items-center justify-between">
									<button
										type="button"
										onClick={() => handleShowTeam(firstTeam)}
										className="flex flex-1 items-center justify-center gap-4 rounded-r-md border-2 border-prime-orange bg-white py-1 pl-6"
									>
										<span>{firstTeam.name}</span>
										<Image
											src={teamIcon}
											alt="Picture of the author"
											width={30}
											className="rounded-full"
										/>
									</button>
									<div className="scoreboard-mid relative z-10 mx-[-20px]">
										<div className="absolute top-[-47px] flex w-full flex-col items-center justify-center text-sm text-white">
											<span>مباراة: {props.counter + props.i}</span>
											{match.status === 0 ? <span>لم تبدأ</span> : <span>بدأت</span>}
										</div>
									</div>
									<button
										type="button"
										onClick={() => handleShowTeam(secondTeam)}
										className="flex flex-1 items-center justify-center gap-4 rounded-l-md border-2 border-prime-orange bg-white py-1 pr-6"
									>
										<Image
											src={teamIcon}
											alt="Picture of the author"
											width={30}
											className="rounded-full"
										/>
										<span>{secondTeam.name}</span>
									</button>
								</div>
							</div>
						</div>
						{teamId && (
							<PlayersPopUp team={teamId} show={showTeam} setShowTeam={setShowTeam} />
						)}
					</div>
					<div className="mt-2 flex justify-center gap-4">
						{match.status === 0 && (
							<button
								type="button"
								className="flex items-center gap-2 rounded-lg bg-prime-green-200 px-8 py-1 text-xl font-bold text-white"
								onClick={handleMatchStart}
							>
								ابدأ
								<FaCirclePlay />
							</button>
						)}
						{match.status !== 0 && (
							<button
								type="button"
								className="flex items-center gap-2 rounded-lg bg-prime-yellow px-8 py-1 text-lg font-bold"
								onClick={handleMatchStart}
							>
								حاسبة النقاط
								<FaCalculator />
							</button>
						)}
						{match.status !== 0 && (
							<button
								type="button"
								className="flex items-center gap-2 rounded-lg bg-red-700 px-8 py-1 text-lg font-bold text-prime-white"
								onClick={handleEndMatch}
								data-match-id={match.id}
								id="match-card"
							>
								انهاء
								<GiWhistle />
							</button>
						)}
					</div>
				</>
			)}
		</div>
	);
}
