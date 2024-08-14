'use client';

import { useEffect } from 'react';
import storageHelper from '@/lib/storage/storageHelper';
import playerStorage from '@/lib/storage/playerStorage';

export default function Storage() {
	useEffect(()=>{
		storageHelper.localStorageConfig();
		playerStorage.savePlayers([
			{
				"id": 1,
				"name": "folan",
				"Age-Group": 1,
				"Rating": 5
			},
			{
				"id": 4,
				"name": "3lan",
				"Age-Group": 1,
				"Rating": 5
			}
		])
		playerStorage.updatePlayer(1,{name:"myMan", "Age-Group": 3, "Rating": 4})
		console.log(playerStorage.getPlayers())
	}, [])

	return <div>storage is working</div>;
}
