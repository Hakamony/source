'use client';

import Link from 'next/link';
import eventStorage from '@/lib/storage/eventStorage';
import matchStorage from '@/lib/storage/matchStorage';
import teamStorage from '@/lib/storage/teamStorage';

export default function UploadPlayers() {
	const event = eventStorage.getEvent();
	const teams = teamStorage
		.getTeams()
		.sort(
			(team1, team2) => team2['match-played'].won - team1['match-played'].won,
		);
	return (
		<main className="px-2 py-12">
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
			<ul className="mt-2 flex list-inside flex-col gap-2 rounded-md bg-white p-4">
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
			<div className="mt-8 flex flex-col gap-2 rounded-md bg-white py-2">
				<div className="flex items-center justify-between px-8">
					<span>التكلفة الاجمالية</span>
					<span>{event['total-cost']}</span>
				</div>
				<div className="flex items-center justify-between px-8">
					<span>التكلفة لكل لاعب</span>
					<span>{event['total-cost'] / event['players-number']}</span>
				</div>
			</div>
		</main>
	);
}
