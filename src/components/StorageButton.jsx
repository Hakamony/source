'use client';

import eventStorage from '@/lib/storage/eventStorage';
import matchStorage from '@/lib/storage/matchStorage';
import pastEventStorage from '@/lib/storage/pastEventStorage';
import teamStorage from '@/lib/storage/teamStorage';

export default function StorageButton() {
	const handleButton = () => {
		const nextMatchId = matchStorage.getNextMatch();
		const matchList = matchStorage.getMatchesList()

		matchStorage.updateMatch(matchList[0], {status: 1});
		matchStorage.updateMatch(matchList[1], {status: 1});
		matchStorage.updateMatch(matchList[5], {status: 1});


		// for(let i =0; i < matchList.length; i++){
		// 	matchStorage.updateMatch(matchList[i], {status: 0});
		// }
		const position = matchList.indexOf(nextMatchId);
		const match = matchStorage.getMatch(nextMatchId);

		console.log(position);
		console.log(match);
	};

	return (
		<button onClick={handleButton} type="button">
			run
		</button>
	);
}
