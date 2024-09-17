'use client';

import { useEffect, useState } from 'react';
import eventStorage from '@/lib/storage/eventStorage';
import matchStorage from '@/lib/storage/matchStorage';
import FieldCard from '@/components/events/FieldCard';
import EndEventPopUp from '@/components/events/EndEventPopUp';

export default function EventDashboard() {
	const [event, setEvent] = useState({});
	const [currentMatches, setCurrentMatches] = useState([]);
	const [endEvent, setEndEvent] = useState(false);
	const [counter, setCounter] = useState(1);
	const [fields, setFields] = useState([]);

	useEffect(() => {
		const currEvent = eventStorage.getEvent();
		const matchesList = matchStorage.getMatchesList();
		setEvent(() => currEvent);
		const tmpList = [];
		for (let i = 0; i < currEvent['fields-number']; i++) {
			tmpList.push(matchesList[i]);
		}
		setCurrentMatches(() => tmpList);
		setFields(() => [...Array(currEvent['fields-number'])]);
	}, []);

	function updateMatchStatus(id) {
		matchStorage.updateMatch(id, { status: 1 });
	}

	function addNextMatch(id) {
		const newMatch = matchStorage.getNextMatch();
		if (newMatch !== -1) {
			matchStorage.updateMatch(id, { status: 2 });
			setCurrentMatches((prev) => {
				const removedEndedMatchList = prev.filter((tId) => tId !== id);
				return [...removedEndedMatchList, newMatch];
			});
		} else {
			setEndEvent((prev) => !prev);
		}
	}

	return (
		<main className="px-2 py-12">
			<nav className="flex items-center justify-between">
				<h1 className="text-4xl font-bold">{event.name}</h1>
				{/* <Menu /> */}
			</nav>
			<section className="my-12 flex flex-col gap-8">
				{fields.map((_, i) => {
					return (
						<FieldCard
							key={currentMatches[i]}
							i={i}
							matchId={currentMatches[i]}
							addNextMatch={(id) => addNextMatch(id)}
							counter={counter}
							setCounter={setCounter}
							updateMatchStatus={(id) => updateMatchStatus(id)}
						/>
					);
				})}
			</section>
			<EndEventPopUp show={endEvent} />
		</main>
	);
}
