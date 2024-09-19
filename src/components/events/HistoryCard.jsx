import { IoCloseCircle } from 'react-icons/io5';
import Image from 'next/image';
import teamIcon from '../../../public/assets/team-icon.jpg';
import teamStorage from '@/lib/storage/teamStorage';
import matchStorage from '@/lib/storage/matchStorage';

export default function HistoryCard({ ...props }) {
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
				{props.endedMatches.map((matchID, i) => {
					const match = matchStorage.getMatch(matchID);
					const team1 = teamStorage.getTeam(match.teams.first);
					const team2 = teamStorage.getTeam(match.teams.second);

					return (
						<li
							className="flex w-full shrink-0 items-center justify-start gap-4 rounded-md bg-prime-white p-2 text-lg font-bold"
							key={match.id}
						>
							<div className="flex-0 flex h-full w-1/3 items-center justify-center border-l-2 border-white">
								<p>مباراة: {i + 1}</p>
							</div>
							<div className="flex w-full flex-col justify-center divide-y-2 divide-white">
								<div className="flex items-center justify-between py-2 pl-6 pr-2">
									<div
										className="flex items-center gap-4 border-r-4 px-2"
										style={{
											borderColor:
												match.scores.first > match.scores.second ? 'green' : 'red',
										}}
									>
										<Image
											src={teamIcon}
											alt="Picture of the author"
											width={25}
											className="rounded-full"
										/>
										<span>{team1.name}</span>
									</div>
									<span>{match.scores.first}</span>
								</div>
								<div className="flex items-center justify-between py-2 pl-6 pr-2">
									<div
										className="flex items-center gap-4 border-r-4 px-2"
										style={{
											borderColor:
												match.scores.first < match.scores.second ? 'green' : 'red',
										}}
									>
										<Image
											src={teamIcon}
											alt="Picture of the author"
											width={25}
											className="rounded-full"
										/>
										<span>{team2.name}</span>
									</div>
									<span>{match.scores.second}</span>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
