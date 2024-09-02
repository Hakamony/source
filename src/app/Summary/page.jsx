'use client';

import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import EventsNav from '@/components/events/EventsNav';
import ButtonNav from '@/components/layout/ButtonNav';
import eventStorage from '@/lib/storage/eventStorage';
import teamStorage from '@/lib/storage/teamStorage';
import matchStorage from '@/lib/storage/matchStorage';
import playerStorage from '@/lib/storage/playerStorage';

export default function Summary() {
	const dummyEvent = {
		name: 'event1',
		'start-time': '8:30',
		'end-time': '10:45',
		sport: 'football',
		'score-type': 'points',
		'fields-number': '2',
		'players-number': '40',
		'max-team-player': '6',
		'total-cost': '700',
		'teams-number': '5',
		'matches-number': '5',
		teams: typeof [],
		'event-type': 'league',
		status: '0',
	};
	const dummyTeams = [
		{
			id: 2334,
			name: 'فريق القادحين',
			players: [24, 35, 68, 14],
			'match-played': {
				won: 2,
				tie: 0,
				lose: 1,
			},
			'team-rating': 4.1,
			'number-of-players': 6,
		},
		{
			id: 2335,
			name: 'فريق الرهيبين',
			players: [24, 35, 68, 14],
			'match-played': {
				won: 2,
				tie: 0,
				lose: 1,
			},
			'team-rating': 4.1,
			'number-of-players': 6,
		},
		{
			id: 2336,
			name: 'اساطير الشورما',
			players: [24, 35, 68, 14],
			'match-played': {
				won: 2,
				tie: 0,
				lose: 1,
			},
			'team-rating': 4.1,
			'number-of-players': 6,
		},
		{
			id: 2337,
			name: 'تيم الرهيبين',
			players: [24, 35, 68, 14],
			'match-played': {
				won: 2,
				tie: 0,
				lose: 1,
			},
			'team-rating': 4.1,
			'number-of-players': 6,
		},
	];
	const dummyPlayers = [
		{
			id: 34,
			name: 'محمد م',
			'Age-Group': 3,
			Rating: 3,
		},
		{
			id: 35,
			name: 'احمد خ',
			'Age-Group': 3,
			Rating: 3,
		},
		{
			id: 36,
			name: 'معاذ ز',
			'Age-Group': 3,
			Rating: 3,
		},
		{
			id: 37,
			name: 'محمد ج',
			'Age-Group': 3,
			Rating: 3,
		},
		{
			id: 38,
			name: 'فلان الفلاني',
			'Age-Group': 3,
			Rating: 3,
		},
		{
			id: 39,
			name: 'هيلب هي',
			'Age-Group': 3,
			Rating: 3,
		},
		{
			id: 40,
			name: 'بليز اي شي',
			'Age-Group': 3,
			Rating: 3,
		},
		// {
		// 	id: 41,
		// 	name: 'folan',
		// 	'Age-Group': 3,
		// 	Rating: 3,
		// },
		// {
		// 	id: 42,
		// 	name: 'folan',
		// 	'Age-Group': 3,
		// 	Rating: 3,
		// },
		// {
		// 	id: 43,
		// 	name: 'folan',
		// 	'Age-Group': 3,
		// 	Rating: 3,
		// },
		// {
		// 	id: 44,
		// 	name: 'folan',
		// 	'Age-Group': 3,
		// 	Rating: 3,
		// },
		// {
		// 	id: 45,
		// 	name: 'folan',
		// 	'Age-Group': 3,
		// 	Rating: 3,
		// },
	];
	const dummyMatch = [
		{
			id: 24,
			number: 3,
			teams: {
				first: 24,
				second: 46,
			},
			scores: {
				first: 24,
				second: 18,
			},
			'start-time': '18:45',
			'end-time': '20:45',
			status: 1, // 0: not started, 1: on going, 2: done
		},
		{
			id: 25,
			number: 2,
			teams: {
				first: 24,
				second: 46,
			},
			scores: {
				first: 24,
				second: 18,
			},
			'start-time': '18:45',
			'end-time': '20:45',
			status: 1, // 0: not started, 1: on going, 2: done
		},
		{
			id: 26,
			number: 1,
			teams: {
				first: 24,
				second: 46,
			},
			scores: {
				first: 24,
				second: 18,
			},
			'start-time': '18:45',
			'end-time': '20:45',
			status: 0, // 0: not started, 1: on going, 2: done
		},
		{
			id: 27,
			number: 5,
			teams: {
				first: 24,
				second: 46,
			},
			scores: {
				first: 24,
				second: 18,
			},
			'start-time': '18:45',
			'end-time': '20:45',
			status: 0, // 0: not started, 1: on going, 2: done
		},
	];

	const [event, setEvent] = useState({});
	const [teams, setTeams] = useState([]);
	const [mathces, setMathces] = useState([]);

	useEffect(() => {
		setEvent(() => eventStorage.getEvent());
		setTeams(() => teamStorage.getTeams());
		setMathces(() =>
			matchStorage.getMatchesList().map((id) => matchStorage.getMatch(id)),
		);
	}, []);

	function stars(num) {
		const starArr = [];
		for (let i = 0; i < num; i++) {
			starArr.push(<FaStar key={i} className="text-prime-yellow" />);
		}
		for (let i = num; i < 5; i++) {
			starArr.push(<FaStar key={i} />);
		}
		return starArr;
	}
	return (
		<main className="px-4 py-12 text-center">
			<EventsNav active={4} />
			<section className="my-12">
				<h1 className="mb-8 text-4xl font-bold">ملخص الفعالية</h1>
				<ul className="text-start">
					<li>
						<h2 className="text-2xl font-bold">
							اسم الفعالية: <span>{event.name}</span>
						</h2>
					</li>
					<li>
						<h2 className="text-2xl font-bold">
							الرياضة: <span>{event.sport}</span>
						</h2>
					</li>
					<li>
						<h2 className="text-2xl font-bold">
							نظام التقييم: <span>{event['score-type']}</span>
						</h2>
					</li>
					<li>
						<h2 className="text-2xl font-bold">
							عدد اللاعبين: <span>{event['players-number']}</span>
						</h2>
					</li>
					<li>
						<h2 className="text-2xl font-bold">
							عدد الفرق: <span>{event['teams-number']}</span>
						</h2>
					</li>
				</ul>
			</section>
			<section className="my-12">
				<h1 className="mb-8 text-4xl font-bold">توزيع الفرق</h1>
				<div className="flex items-center gap-8 overflow-x-scroll">
					{teams.map((team) => {
						return (
							<div
								className="shrink-0 rounded-lg border-2 border-prime-orange p-4 shadow-lg"
								key={team.id}
							>
								<div className="mb-8 flex flex-1 flex-col items-start justify-between gap-2 text-start font-bold">
									<h3 className="text-start text-2xl font-bold text-prime-orange">
										{team.name}
									</h3>
									<div className="flex items-center gap-2">
										{stars(Math.floor(team['team-rating']))}
										<span>. {team['number-of-players']} لاعبين</span>
									</div>
								</div>
								<ul className="flex h-48 w-full list-inside list-decimal flex-col flex-wrap content-start gap-4 gap-x-12">
									{team.players.map((id) => {
										const player = playerStorage.getPlayer(id);
										return (
											<li key={player.id} className="text-start text-xl font-bold">
												{player.name}
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
				</div>
			</section>
			<section className="my-12">
				<h1 className="mb-8 text-4xl font-bold">جدول المباريات</h1>
				<div className="flex h-[350px] flex-col items-center gap-8 overflow-y-scroll">
					{mathces.map((match, i) => {
						const team1 = teamStorage.getTeam(match.teams.first);
						const team2 = teamStorage.getTeam(match.teams.second);

						return (
							<div
								className="w-full shrink-0 rounded-lg border-2 border-prime-orange p-4 shadow-lg"
								key={match.id}
							>
								<h3 className="t mb-8 text-4xl font-bold text-prime-orange">
									مباراة رقم {i + 1}
								</h3>
								<div className="flex flex-col gap-4 text-xl font-bold">
									<p className="flex justify-between">
										<span>{team1.name}</span>
										<span>V.S</span>
										<span>{team2.name}</span>
									</p>
									{/* <p>ملعب: </p> */}
								</div>
							</div>
						);
					})}
				</div>
			</section>
			<section className="my-12 flex flex-col gap-4 font-bold">
				<button
					type="button"
					color="yellow"
					link="/"
					className="rounded-lg bg-prime-yellow px-20 py-2 text-xl font-bold text-prime-white"
				>
					تعديل جدول المباريات
				</button>
				<button
					type="button"
					color="yellow"
					link="/"
					className="rounded-lg bg-prime-yellow px-20 py-2 text-xl font-bold text-prime-white"
				>
					تعديل الفرق
				</button>
				{/* <ButtonNav color="yellow" link="/">
					تعديل الفعالية
				</ButtonNav> */}
				<ButtonNav color="green-200" link="/">
					بدء الفاعلية
				</ButtonNav>
			</section>
		</main>
	);
}
