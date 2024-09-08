'use client';

import { useEffect, useState } from 'react';
import Menu from '@/components/layout/Menu';
import MatchPopUp from '@/components/events/MatchPopUp';
import eventStorage from '@/lib/storage/eventStorage';
import matchStorage from '@/lib/storage/matchStorage';
import FieldCard from '@/components/events/FieldCard';

export default function EventDashboard() {
	const [event, setEvent] = useState({});
	const [showPopup, setShowPopup] = useState(false);
	const [matchId, setMatchId] = useState(null);
	const [currentMatches, setCurrentMatches] = useState([]);

	useEffect(() => {
		const currEvent = eventStorage.getEvent();
		setEvent(() => currEvent);
		const matchesList = matchStorage.getMatchesList();
		const mlist = [];
		for (let i = 0; i < currEvent['fields-number']; i++) {
			matchStorage.updateMatch(matchesList[i], { status: 1 });
			mlist.push(matchesList[i]);
		}
		setCurrentMatches(() => mlist);
	}, []);

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
				<h1 className="text-4xl font-bold">{event.name}</h1>
				<Menu />
			</nav>
			<section className="my-12 flex flex-col gap-8">
				{Array.from({ length: event['fields-number'] }, (_, i) => (
					<FieldCard key={i} i={i} match={currentMatches[i]} />
				))}
			</section>
			<MatchPopUp
				show={showPopup}
				handlePopup={(e) => handlePopup(e)}
				matchId={matchId}
			/>
		</main>
	);
}
