'use client';

import { useEffect } from 'react';
import storageHelper from '@/lib/storage/storageHelper';
import playerStorage from '@/lib/storage/playerStorage';

export default function Storage() {
	useEffect(() => {
		storageHelper.localStorageConfig();
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
		// playerStorage.updatePlayer(currentPlayer.id,{name:"myMan", "Age-Group": 3, "Rating": 4})
		// playerStorage.removePlayer(currentPlayer.id)
		console.log(playerStorage.getPlayers());
	}, []);

	return <div>storage is working</div>;
}
