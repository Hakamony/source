'use client';

import eventStorage from '@/lib/storage/eventStorage';
import pastEventStorage from '@/lib/storage/pastEventStorage';

export default function StorageButton() {
	const handleButton = () => {
		eventStorage.saveEvent({
			name: 'event 1',
			'start-time': 'fadfad',
			'end-time': 'gadfgadg',
			sport: 'football',
			'score-type': 'points',
			'fields-number': 2,
			'players-number': 15,
			'max-team-player': 5,
			'total-cost': 600,
			'teams-number': 3,
			'matches-number': 10,
			teams: [],
			'event-type': 'league',
			status: 0, // 0: not started, 1: on going, 2: done
		});
        pastEventStorage.clearPastEvents()
        pastEventStorage.saveCurrentEventToPastEvents()
        eventStorage.saveEvent({
			name: 'event 2',
			'start-time': 'fadfad',
			'end-time': 'gadfgadg',
			sport: 'football',
			'score-type': 'points',
			'fields-number': 2,
			'players-number': 15,
			'max-team-player': 5,
			'total-cost': 600,
			'teams-number': 3,
			'matches-number': 10,
			teams: [],
			'event-type': 'league',
			status: 0, // 0: not started, 1: on going, 2: done
		});
        pastEventStorage.saveCurrentEventToPastEvents()
        console.log(pastEventStorage.getPastEvents())
	};

	return <button onClick={handleButton}>run</button>;
}
