'use client';
import storage from '@/lib/storage/storage';

export default function Storage() {
	storage.localStorageConfig();
	storage.updateEvent({
        name:"event1",
        "sport":"vollyball",
        "event-type":"league",
		'score-type': 'points',
		'max-team-player': 6,
		'fields-number': 2,
	});
	return <div>storage is working</div>;
}
