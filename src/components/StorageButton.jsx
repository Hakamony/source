'use client';

import eventStorage from '@/lib/storage/eventStorage';
import matchStorage from '@/lib/storage/matchStorage';
import pastEventStorage from '@/lib/storage/pastEventStorage';

export default function StorageButton() {
	const handleButton = () => {
		console.log(matchStorage.getNextMatch());
	};

	return (
		<button onClick={handleButton} type="button">
			run
		</button>
	);
}
