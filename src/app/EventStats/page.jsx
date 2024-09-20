'use client';

import Link from 'next/link';
import Image from 'next/image';
import teamIcon from '../../../public/assets/team-icon.jpg';
import eventStorage from '@/lib/storage/eventStorage';
import matchStorage from '@/lib/storage/matchStorage';
import teamStorage from '@/lib/storage/teamStorage';
import ButtonNav from '@/components/layout/ButtonNav';

export default function UploadPlayers() {
	const event = eventStorage.getEvent();
	const teams = teamStorage
		.getTeams()
		.sort(
			(team1, team2) => team2['match-played'].won - team1['match-played'].won,
		);
	const matches = matchStorage.getMatches();
	return (
		<main className="flex flex-col gap-4 px-2 py-12">
			<nav className="flex items-center justify-between">
				<h1 className="text-4xl font-bold">{event.name}</h1>
				{/* <Menu /> */}
			</nav>
			<div className="mt-8 flex items-center justify-between rounded-md bg-white px-8 py-2">
				<div className="flex-1">اسم الفريق</div>
				<div className="flex flex-1 items-center justify-between">
					<span>الفوز</span>
					<span>الخسارة</span>
					<span>النقاط</span>
				</div>
			</div>
			<ul className="flex list-inside flex-col gap-2 rounded-md bg-white p-4">
				{teams.map((team, i) => (
					<li
						key={team.id}
						className="itmes-center flex justify-between rounded-md bg-prime-white px-4 py-2"
					>
						<div className="flex-1">
							{i + 1}. {team.name}
						</div>
						<div className="flex flex-1 items-center justify-between text-center">
							<div>{team['match-played'].won}</div>
							<div>{team['match-played'].lose}</div>
							<div>{team['match-played'].won * 3}</div>
						</div>
					</li>
				))}
			</ul>
			<ul className="flex flex-col gap-4 overflow-y-scroll rounded-md bg-white p-4">
				<h1 className="text-center text-2xl font-bold">المباريات الملعوبة</h1>

				{matches.map((match, i) => {
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
			<div className="flex flex-col gap-2 rounded-md bg-white py-2">
				<div className="flex items-center justify-between px-8">
					<span>التكلفة الاجمالية</span>
					<span>{event['total-cost']}</span>
				</div>
				<div className="flex items-center justify-between px-8">
					<span>التكلفة لكل لاعب</span>
					<span>{event['total-cost'] / event['players-number']}</span>
				</div>
			</div>
			<ButtonNav link="/" color="bg-prime-green-200">
				الصفحة الرئيسية
			</ButtonNav>
		</main>
	);
}
