'use client';

import { useState } from 'react';
import Menu from '@/components/layout/Menu';
import MatchPopUp from '@/components/events/MatchPopUp';
import eventStorage from '@/lib/storage/eventStorage';

export default function EventDashboard() {
	const event = eventStorage.getEvent()
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
	const [showPopup, setShowPopup] = useState(false);
	const [matchId, setMatchId] = useState(null);

	function handlePopup(e) {
		setShowPopup((prev) => !prev);
		if (e.target.id === 'match-card') {
			setMatchId(() => e.target.dataset.matchId);
		}
	}
	return (
		<main className="px-4 py-12">
			<nav className="flex items-center justify-between">
				<h1 className="text-4xl font-bold">{event.name}</h1>
				<Menu />
			</nav>
			<section className="my-12 flex flex-col gap-8">
				{Array.from({ length: event['fields-number'] }, (_, i) => {
					return (
						<div
							className="rounded-lg border-2 border-prime-orange p-4 text-center shadow-lg"
							key={dummyMatch[i].id}
						>
							<h3 className="text-6xl font-bold text-prime-orange">ملعب {i + 1}</h3>
							<div className="mt-4 flex flex-col gap-4 text-xl font-bold">
								<p className="flex justify-between">
									<span>{dummyTeams[0].name}</span>
									<span>V.S</span>
									<span>{dummyTeams[1].name}</span>
								</p>
								<p className="text-start">مباراة: 1 </p>
							</div>
							<div className="mt-4 flex justify-center gap-4">
								<button
									type="button"
									className="rounded-lg bg-prime-green-200 px-12 py-1 text-xl font-bold text-prime-white"
									onClick={handlePopup}
									data-match-id={dummyMatch[i].number}
									id="match-card"
								>
									انهاء
								</button>
								<button
									type="button"
									className="rounded-lg bg-prime-yellow px-12 py-1 text-xl font-bold text-prime-dark"
								>
									تعديل
								</button>
							</div>
						</div>
					);
				})}
			</section>
			<MatchPopUp
				show={showPopup}
				handlePopup={(e) => handlePopup(e)}
				matchId={matchId}
			/>
		</main>
	);
}
