'use client';

import { useEffect, useState } from 'react';
import { BsFillClipboardCheckFill } from 'react-icons/bs';
import eventStorage from '@/lib/storage/eventStorage';
import matchStorage from '@/lib/storage/matchStorage';
import FieldCard from '@/components/events/FieldCard';
import EndEventPopUp from '@/components/events/EndEventPopUp';
import HistoryCard from '@/components/events/HistoryCard';

export default function EventDashboard() {
	const [event, setEvent] = useState({});
	const [currentMatches, setCurrentMatches] = useState([]);
	const [endedMatches, setEndedMatches] = useState([]);
	const [showHistory, setShowHistory] = useState(false);
	const [activeFields, setActiveFields] = useState([]);
	const [endEvent, setEndEvent] = useState(false);
	const [counter, setCounter] = useState(1);
	const [fields, setFields] = useState([]);

	useEffect(() => {
		const currEvent = eventStorage.getEvent();
		const matchesList = matchStorage.getMatches().filter((match) => match.added);
		setEvent(() => currEvent);
		const tmpList = [];
		for (let i = 0; i < currEvent['fields-number']; i++) {
			tmpList.push(matchesList[i].id);
			matchStorage.updateMatch(matchesList[i].id, { added: true });
		}
		setActiveFields(() => new Array(currEvent['fields-number']).fill(true));
		setCurrentMatches(() => tmpList);
		setFields(() => [...Array(currEvent['fields-number'])]);
	}, []);

	function updateMatchStatus(id) {
		matchStorage.updateMatch(id, { status: 1 });
	}

	function addNextMatch(id, index) {
		matchStorage.updateMatch(id, { status: 2 });
		setEndedMatches((prev) => [...prev, currentMatches[index]]);
		const newMatch = matchStorage.getNextMatch();
		if (newMatch !== -1) {
			matchStorage.updateMatch(newMatch, { added: true });
			setCurrentMatches((prev) => {
				prev[index] = newMatch;
				return prev;
			});
		} else if (activeFields.filter((x) => x === true).length > 1) {
			setActiveFields((prev) => {
				prev[index] = false;
				return prev;
			});
		} else {
			setActiveFields((prev) => {
				prev[index] = false;
				return prev;
			});
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
							active={activeFields[i]}
							i={i}
							matchId={currentMatches[i]}
							addNextMatch={(id, index) => addNextMatch(id, index)}
							counter={counter}
							setCounter={setCounter}
							updateMatchStatus={(id) => updateMatchStatus(id)}
							eventSport={event.sport}
						/>
					);
				})}
			</section>
			<EndEventPopUp show={endEvent} />
			<HistoryCard
				active={showHistory}
				setShowHistory={setShowHistory}
				endedMatches={endedMatches}
			/>
			{endedMatches.length !== 0 && (
				<button
					type="button"
					onClick={() => setShowHistory((prev) => !prev)}
					className="fixed bottom-4 right-4 z-30 rounded-full bg-prime-orange p-4"
				>
					<BsFillClipboardCheckFill className="text-4xl text-white" />
				</button>
			)}
		</main>
	);
}
