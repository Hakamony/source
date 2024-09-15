'use client';

import { useEffect, useState } from 'react';
import Menu from '@/components/layout/Menu';
import MatchPopUp from '@/components/events/MatchPopUp';
import eventStorage from '@/lib/storage/eventStorage';
import matchStorage from '@/lib/storage/matchStorage';
import FieldCard from '@/components/events/FieldCard';
import EndEventPopUp from '@/components/events/EndEventPopUp';

export default function EventDashboard() {
	const [event, setEvent] = useState({});
	const [showPopup, setShowPopup] = useState(false);
	const [matchId, setMatchId] = useState(null);
	const [currentMatches, setCurrentMatches] = useState([]);
	const [endEvent, setEndEvent] = useState(false);

	useEffect(() => {
		const currEvent = eventStorage.getEvent();
		const matchesList = matchStorage.getMatchesList();
		setEvent(() => currEvent);
		const tmpList = [];
		for (let i = 0; i < currEvent['fields-number']; i++) {
			tmpList.push(matchesList);
		}
		setCurrentMatches(() => tmpList);
	}, []);

	function addNextMatch(id) {
		const newMatch = matchStorage.getNextMatch();
		if (newMatch !== -1) {
			matchStorage.updateMatch(id, { status: 2 });
			matchStorage.updateMatch(newMatch, { status: 1 });
			setCurrentMatches((prev) => prev.filter((tId) => tId !== id));
			setCurrentMatches((prev) => [...prev, newMatch]);
		} else if (currentMatches.length !== 1) {
			setCurrentMatches((prev) => prev.filter((tId) => tId !== id));
		} else {
			setEndEvent((prev) => !prev);
		}
	}

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
				{/* <Menu /> */}
			</nav>
			<section className="my-12 flex flex-col gap-8">
				{currentMatches.map((match, i) => {
					return (
						<FieldCard
							key={match}
							i={i}
							matchId={match}
							addNextMatch={(id) => addNextMatch(id)}
						/>
					);
				})}
			</section>
			<MatchPopUp
				show={showPopup}
				handlePopup={(e) => handlePopup(e)}
				matchId={matchId}
			/>
			<EndEventPopUp show={endEvent} />
		</main>
	);
}
