import { useState } from 'react';
import { FaCalculator, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { FaCirclePlay } from 'react-icons/fa6';
import { GiWhistle } from 'react-icons/gi';
import Image from 'next/image';
import teamIcon from '../../../public/assets/team-icon.jpg';
import Field from '../../../public/assets/field.jpg';
import teamStorage from '@/lib/storage/teamStorage';
import matchStorage from '@/lib/storage/matchStorage';
import PlayersPopUp from './PlayersPopUp';
import MatchPopUp from './MatchPopUp';

export default function FieldCard({ ...props }) {
	const [showTeam, setShowTeam] = useState(false);
	const [teamId, setTeamId] = useState();
	const [match, setMatch] = useState(matchStorage.getMatch(props.matchId));
	const firstTeam = teamStorage.getTeam(match.teams.first);
	const secondTeam = teamStorage.getTeam(match.teams.second);
	const [showEndMatchPopUp, setShowEndMatchPopUP] = useState(false);
	const [showEditScores, setShowEditScores] = useState(false);

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
		matchStorage.updateMatch(props.matchId, { added: false });
		props.addNextMatch(props.matchId, props.i);
		props.setCounter((prev) => prev + 1);
	}

	return (
		<div
			className="relative rounded-lg bg-white p-2 text-center shadow-md"
			style={{ display: props.active ? 'block' : 'none' }}
		>
			{props.match !== -1 && (
				<>
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
						/>
						<div className="relative z-[1] h-[30vh] w-full px-2">
							<div className="flex h-full flex-col items-center justify-center text-xl font-bold">
								<h4 className="text-dark mb-4 rounded bg-white px-6">
									ملعب {props.i + 1}
								</h4>
								<div className="flex w-full items-center justify-between">
									<button
										type="button"
										onClick={() => handleShowTeam(firstTeam)}
										className="flex flex-1 items-center justify-center gap-4 rounded-r-md border-2 border-prime-orange bg-white py-2 pl-6"
									>
										<span>{firstTeam.name}</span>
										<Image
											src={teamIcon}
											alt="Picture of the author"
											width={25}
											className="rounded-full"
										/>
									</button>
									<div className="scoreboard-mid relative z-10 mx-[-1.5rem]">
										<div className="absolute top-[-55px] flex w-full flex-col items-center justify-center text-sm text-white">
											<span>مباراة: {props.counter + props.i}</span>
											{match.status === 0 ? (
												<span>لم تبدأ</span>
											) : (
												<p className="flex items-center justify-center gap-2 text-lg font-bold">
													<span>{match.scores.first}</span>
													<span>-</span>
													<span>{match.scores.second}</span>
												</p>
											)}
										</div>
									</div>
									<button
										type="button"
										onClick={() => handleShowTeam(secondTeam)}
										className="flex flex-1 items-center justify-center gap-4 rounded-l-md border-2 border-prime-orange bg-white py-2 pr-6"
									>
										<Image
											src={teamIcon}
											alt="Picture of the author"
											width={25}
											className="rounded-full"
										/>
										<span>{secondTeam.name}</span>
									</button>
								</div>
								<div className="z-10 mt-2 flex w-full items-center justify-between px-8 text-4xl text-prime-green-200">
									{!showEditScores && match.status !== 0 && (
										<>
											<button
												type="button"
												className="rounded-full bg-white p-1"
												onClick={() =>
													setMatch((prev) => ({
														...prev,
														scores: {
															first: prev.scores.first + 1,
															second: prev.scores.second,
														},
													}))
												}
											>
												<FaPlusCircle />
											</button>
											<button
												type="button"
												className="rounded-full bg-white p-1"
												onClick={() =>
													setMatch((prev) => ({
														...prev,
														scores: {
															first: prev.scores.first,
															second: prev.scores.second + 1,
														},
													}))
												}
											>
												<FaPlusCircle />
											</button>
										</>
									)}
									{showEditScores && match.status !== 0 && (
										<>
											<button
												type="button"
												className="rounded-full bg-white p-1 text-red-700"
												onClick={() => {
													if (match.scores.first !== 0) {
														setMatch((prev) => ({
															...prev,
															scores: {
																first: prev.scores.first - 1,
																second: prev.scores.second,
															},
														}));
													}
												}}
											>
												<FaMinusCircle />
											</button>
											<button
												type="button"
												className="rounded-full bg-white p-1 text-red-700"
												onClick={() => {
													if (match.scores.second !== 0) {
														setMatch((prev) => ({
															...prev,
															scores: {
																first: prev.scores.first,
																second: prev.scores.second - 1,
															},
														}));
													}
												}}
											>
												<FaMinusCircle />
											</button>
										</>
									)}
								</div>
							</div>
						</div>

						{teamId && (
							<PlayersPopUp team={teamId} show={showTeam} setShowTeam={setShowTeam} />
						)}
					</div>
					<div className="mt-2 flex justify-center gap-4 px-4">
						{match.status === 0 && (
							<button
								type="button"
								className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-prime-green-200 py-1 text-xl font-bold text-white"
								onClick={handleMatchStart}
							>
								ابدأ
								<FaCirclePlay />
							</button>
						)}
						{match.status !== 0 && (
							<button
								type="button"
								className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-prime-yellow py-1 text-lg font-bold"
								onClick={() => setShowEditScores((prev) => !prev)}
							>
								تعديل النقاط
								<FaCalculator />
							</button>
						)}
						{match.status !== 0 && (
							<button
								type="button"
								className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-700 py-1 text-lg font-bold text-prime-white"
								onClick={() => setShowEndMatchPopUP((prev) => !prev)}
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
			<MatchPopUp
				active={showEndMatchPopUp}
				setShowEndMatchPopUP={setShowEndMatchPopUP}
				match={match}
				firstTeam={firstTeam}
				secondTeam={secondTeam}
				handleEndMatch={() => handleEndMatch()}
				eventSport={props.eventSport}
			/>
		</div>
	);
}
