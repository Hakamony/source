'use client';

import { useEffect } from 'react';
import storageHelper from '@/lib/storage/storageHelper';
import playerStorage from '@/lib/storage/playerStorage';
import eventStorage from '@/lib/storage/eventStorage';

export default function Storage() {
	useEffect(() => {
		storageHelper.localStorageConfig();
		// const event = {
		// 	id: '26473',
		// 	name: 'event1',
		// };
		// eventStorage.updateEvent(event);
		playerStorage.savePlayers([
			{
				name: 'folan',
				'Age-Group': 1,
				Rating: 5,
			},
			{
				name: '3lan',
				'Age-Group': 1,
				Rating: 5,
			},
		]);
		const currentPlayer = playerStorage.getPlayers()[0];
		playerStorage.updatePlayer(currentPlayer.id,{name:"myMan", "Age-Group": 3, "Rating": 4})
		// playerStorage.removePlayer(currentPlayer.id)
		// console.log(playerStorage.getPlayers());
	}, []);

	return <div>storage is working</div>;
}
