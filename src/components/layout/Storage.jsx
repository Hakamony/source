'use client';

import { useEffect } from 'react';
import storageHelper from '@/lib/storage/storageHelper';
import playerStorage from '@/lib/storage/playerStorage';
import eventStorage from '@/lib/storage/eventStorage';
import teamStorage from '@/lib/storage/teamStorage';
import matchStorage from '@/lib/storage/matchStorage';

export default function Storage() {
	useEffect(() => {
		storageHelper.localStorageConfig();
		// const event = {
		// 	id: '26473',
		// 	name: 'event1',
		// };
		// eventStorage.updateEvent(event);
		// playerStorage.savePlayers([
		// 	{
		// 		name: 'folan',
		// 		'Age-Group': 1,
		// 		Rating: 2,
		// 	},
		// 	{
		// 		name: '3lan',
		// 		'Age-Group': 1,
		// 		Rating: 5,
		// 	},
		// ]);

		// teamStorage.saveTeams([
		// 	{
		// 		"name": "f1",
		// 		"players": [],
		// 		"match-played": {
		// 			"won": 2,
		// 			"tie": 2,
		// 			"lose": 3,
		// 		}
		// 	},
		// 	{
		// 		"name": "f2",
		// 		"players": [],
		// 		"match-played": {
		// 			"won": 2,
		// 			"tie": 0,
		// 			"lose": 1
		// 		}
		// 	}
		// ])
		// const players = playerStorage.getPlayers();
		// const team = teamStorage.getTeams()[0]
		// teamStorage.addPlayerToTeam(players[0].id, team.id)
		// teamStorage.addPlayerToTeam(players[1].id, team.id)
		// teamStorage.removePlayerFromTeam(players[0].id, team.id)
		// teamStorage.addTieToTeam(team.id)
		// console.log(teamStorage.getTeamRating(team.id))
		//playerStorage.updatePlayer(currentPlayer.id,{name:"myMan", "Age-Group": 3, "Rating": 4})
		// playerStorage.removePlayer(currentPlayer.id)
		// console.log(playerStorage.getPlayers());
		// matchStorage.saveMatches([{
		// 	number: 1,
		// 	teams: {
		// 		first: "gadgadg",
		// 		second: 'gadgafdg'
		// 	},
		// 	scores: {
		// 		first: 12,
		// 		second: 24
		// 	},
		// 	"start-time": "18:45",
		// 	"end-time": "20:45",
		// 	status: 1
		// },{
		// 	number: 2,
		// 	teams: {
		// 		first: "gadgadg",
		// 		second: 'gadgafdg'
		// 	},
		// 	scores: {
		// 		first: 12,
		// 		second: 24
		// 	},
		// 	"start-time": "18:45",
		// 	"end-time": "20:45",
		// 	status: 2
		// }])
		// const {id} = matchStorage.getMatches()[0]
		// // matchStorage.removeMatch(id)
		// matchStorage.setMatchSecondTeam(id, 'qrewrqerq')
		// matchStorage.setMatchSecondTeamScore(id, 44)

		matchStorage.saveMatchList(['a', 'b', 'c']);
		matchStorage.addToMatchList('d')
		matchStorage.moveMatch('a', 0)
	}, []);

	return <div>storage is working</div>;
}
