'use client';

import { useEffect } from 'react';
import storageHelper from '@/lib/storage/storageHelper';
import playerStorage from '@/lib/storage/playerStorage';
import eventStorage from '@/lib/storage/eventStorage';
import teamStorage from '@/lib/storage/teamStorage';

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
				Rating: 2,
			},
			{
				name: '3lan',
				'Age-Group': 1,
				Rating: 5,
			},
		]);

		teamStorage.saveTeams([
			{
				"name": "f1",
				"players": [],
				"match-played": {
					"won": 2,
					"tie": 2,
					"lose": 3,
				}
			},
			{
				"name": "f2",
				"players": [],
				"match-played": {
					"won": 2,
					"tie": 0,
					"lose": 1
				}
			}
		])
		const players = playerStorage.getPlayers();
		const team = teamStorage.getTeams()[0]
		teamStorage.addPlayerToTeam(players[0].id, team.id)
		teamStorage.addPlayerToTeam(players[1].id, team.id)
		teamStorage.addTieToTeam(team.id)
		// console.log(teamStorage.getTeamRating(team.id))
		//playerStorage.updatePlayer(currentPlayer.id,{name:"myMan", "Age-Group": 3, "Rating": 4})
		// playerStorage.removePlayer(currentPlayer.id)
		// console.log(playerStorage.getPlayers());
	}, []);

	return <div>storage is working</div>;
}
