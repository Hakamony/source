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
	const [matchesList, setMatchesList] = useState([]);

	useEffect(() => {
		const currEvent = eventStorage.getEvent();
		setEvent(() => currEvent);
		const tmpList = matchStorage.getMatchesList();
		setMatchesList(() => tmpList.slice(currEvent['fields-number']));
		const mlist = [];
		for (let i = 0; i < currEvent['fields-number']; i++) {
			matchStorage.updateMatch(tmpList[i], { status: 1 });
			mlist.push(tmpList[i]);
		}
		setCurrentMatches(() => mlist);
	}, []);

	function addNextMatch(id) {
		if (matchesList.length !== 0) {
			const newMatchId = matchesList[0];
			matchStorage.updateMatch(id, { status: 2 });
			matchStorage.updateMatch(newMatchId, { status: 1 });
			setCurrentMatches((prev) => prev.filter((tId) => tId !== id));
			setMatchesList((prev) => prev.slice(1));
			setCurrentMatches((prev) => [...prev, newMatchId]);
		} else if (currentMatches.length !== 1) {
			setCurrentMatches((prev) => prev.filter((tId) => tId !== id));
		} else {
			console.log('End event');
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
				<Menu />
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
		</main>
	);
}
